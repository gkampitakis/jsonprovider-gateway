import axios from 'axios';
import Configuration from '../configuration';

//TODO: extend with authorization and token retrieval
//TODO: ncu and check if you can update


export abstract class API {

  protected apiEndpoint: string;

  constructor() {

    this.apiEndpoint = Configuration.getConfig().api.endpoint;

  }


  //TODO: add Token at header as well
  protected postRequest(url: string, body: {}): Promise<any> {

    return axios.post(url, body);

  }

  //TODO: add Token at header as well

  protected putRequest(url: string, body: {}): Promise<any> {

    return axios.put(url, body);

  }

  protected getUserId() {
    //FIXME: not yet used
    return '123';

  }

  protected saveToStorage(key: string, value: any): void {

    localStorage.setItem(key, value);

  }

  protected removeFromStorage(key: string): void {

    localStorage.removeItem(key);

  }

}