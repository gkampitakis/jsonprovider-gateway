import axios from 'axios';

//TODO: extend with authorization and token retrieval
//TODO: ncu and check if you can update


export abstract class API {

  protected postRequest(url: string, body: {}): Promise<any> {

    return axios.post(url, body);

  }

  protected getUserId() {

    return '123';

  }

  protected saveToStorage(key: string, value: any): void {

    localStorage.setItem(key, value);

  }

}