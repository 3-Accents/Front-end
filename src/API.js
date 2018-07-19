const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:3013/api/v1' : 'https://ante-up.herokuapp.com/api/v1'

function getBets() {
  return fetch(`${API_URL}/bets`, {
    headers: {
      Authorization: 'Bearer ' + localStorage.token
    }
  }).then(res => res.json());
}

export default {
  getBets
};
