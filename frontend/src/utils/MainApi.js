import { BASE_URL } from '../utils/Constants';
class MainApi {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  /**
   * This method will expand later and consider current user's token
   */
  _setHeaders() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  _checkResult(res) {
    return (res.ok ? res.json() : Promise.reject('Error!' + res.statusText));
  }

  /**
   * Loading Cards from the Server
   */
  getCardsCentre() {
    return fetch(this._baseUrl + '/cards/cheed', {
      headers: this._headers
    })
    .then(res => this._checkResult(res))
  }
  getCardsAned() {
    return fetch(this._baseUrl + '/cards/aned', {
      headers: this._headers
    })
    .then(res => this._checkResult(res))
  }
  getCardsKodzoG() {
    return fetch(this._baseUrl + '/cards/kodzo-gue', {
      headers: this._headers
    })
    .then(res => this._checkResult(res))
  }
}


const mainApi = new MainApi({ baseUrl: BASE_URL });

export default mainApi;