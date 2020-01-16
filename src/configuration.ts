

class Configuration {


  public getConfig() {

    return {
      api: {
        endpoint: process.env.REACT_APP_BACKEND_ENDPOINT || ''
      }
    };

  }

}

export default new Configuration();