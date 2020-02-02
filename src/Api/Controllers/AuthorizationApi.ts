import { API } from '../API';
import autoBind from 'auto-bind';
import { AxiosResponse } from 'axios';

class AuthorizationApi extends API {

  constructor() {

    super();
    autoBind(this);

  }

  public loginRequest(email: string, password: string): Promise<{ token: string; userId: string }> {

    return this.postRequest(this.apiEndpoint + 'auth',
      { email: email, password: password })
      .then((result: AxiosResponse) => {

        return result.data;

      });

  }

  public saveLocalstorage(token: string, userId: string): void {

    this.saveToStorage('token', token);
    this.saveToStorage('userId', userId);

  }

  public forgotPassRequest(email: string) {

    return this.postRequest(this.apiEndpoint + 'user/password',
      { email })
      .then((result: AxiosResponse) => {

        return result.data;

      });

  }

  public resetPassword(password: string, token: string) {

    return this.putRequest(this.apiEndpoint + 'user/password?t=' + token,
      { password })
      .then((result: AxiosResponse) => {
        return result.data;
      });

  }

  private tokenInvalidate(token: string | null) {

    if (!token) return;

    return this.deleteRequest(this.apiEndpoint + 'auth?t=' + token)
      .then((result: AxiosResponse) => {
        return result.data;
      });

  }

  public async logoutUser() {

    try {

      await this.tokenInvalidate(this.getToken());

    } catch (error) {

      console.log(error);//TODO:this needs different handling

    }

    this.removeFromStorage('token');
    this.removeFromStorage('userId');

  }

}

export const Authorization = new AuthorizationApi();