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

  public logoutUser() {

    this.removeFromStorage('token');
    this.removeFromStorage('userId');

  }

}

export const Authorization = new AuthorizationApi();