// thunk

import { API_URL_LOGIN } from "../../components/constants/api"

export const userSighIn = (name, pass) => (dispatch) => {
fetch(API_URL_LOGIN, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    
    username: 'kminchelle',
    password: '0lelplR',
    // expiresInMins: 60, // optional
  })
})
.then(res => res.json())
.then(console.log);
}