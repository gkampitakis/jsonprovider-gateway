import { API } from '../API';
import autoBind from 'auto-bind';
import { AxiosResponse } from 'axios';


class UserApi extends API {


  constructor() {

    super();
    autoBind(this);

  }

  public createUser({ email, username, password }: { email: string; username: string; password: string }): Promise<any> {

    return this.postRequest(this.apiEndpoint + 'user',
      {
        email,
        username,
        password
      })
      .then((result: AxiosResponse) => {

        return result.data;

      });

  }


  public userExist(id: string, field: 'email' | 'username'): Promise<{ message: string; status: number }> {

    return this.postRequest(`${this.apiEndpoint}user/exists/${field}`,
      {
        id
      })
      .then((result: AxiosResponse) => {

        return result.data;

      });

  }

}

export const User = new UserApi();