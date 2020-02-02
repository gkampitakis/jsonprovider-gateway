import axios, { AxiosRequestConfig } from 'axios';
import Configuration from '../configuration';

//TODO: extend with authorization and token retrieval

export abstract class API {

  protected apiEndpoint: string;

  constructor() {

    this.apiEndpoint = Configuration.getConfig().api.endpoint;

  }

  private setConfig({ token }: { token?: string }): AxiosRequestConfig {

    return {
      headers: { Authorization: `Bearer ${token}` }
    };

  }

  protected postRequest(url: string, body: {}, token?: string): Promise<any> {

    return axios.post(url, body);

  }

  protected putRequest(url: string, body: {}, token?: string): Promise<any> {

    return axios.put(url, body, this.setConfig({ token }));

  }

  protected getRequest(url: string, token?: string): Promise<any> {

    return axios.get(url, this.setConfig({ token }));

  }

  protected deleteRequest(url: string, token?: string): Promise<any> {

    return axios.delete(url, this.setConfig({ token }));

  }

  protected getUserId() {
    //FIXME: not yet used
    return '123';

  }

  protected getToken() {

    return localStorage.getItem('token');

  }

  protected saveToStorage(key: string, value: any): void {

    localStorage.setItem(key, value);

  }

  protected removeFromStorage(key: string): void {

    localStorage.removeItem(key);

  }

}