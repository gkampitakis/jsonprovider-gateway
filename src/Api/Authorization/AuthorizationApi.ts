import { API } from '../API';
import autoBind from 'auto-bind';
import { AxiosResponse } from 'axios';

const apiEndPoint = 'http://localhost:5000/';//FIXME:
//TODO: create dynamic config
class AuthorizationApi extends API {

  constructor() {

    super();
    autoBind(this);

  }

  public loginRequest(email: string, password: string): Promise<{ token: string; userId: string }> {

    return this.postRequest(apiEndPoint + 'auth',
      { email: email, password: password })
      .then((result: AxiosResponse) => {

        return result.data;

      })
      .catch(err => {

        console.error(err);
        //FIXME:
        throw new Error('This error needs changing');

      });

  }

  public saveLocalstorage(token: string, userId: string): void {

    this.saveToStorage('token', token);
    this.saveToStorage('userId', userId);

  }

}

export const Authorization = new AuthorizationApi();