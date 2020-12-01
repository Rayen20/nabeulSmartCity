import axios from 'axios'

export const register = newUser => {
  return axios
    .post('http://localhost:5000/users/register', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      if (response.status === 201) {
        console.log('Registered')
      } else {
          console.log(' wrong password ')
      }
      
    })
}
var jwt = require('jsonwebtoken');

export const login = user => {
  return axios
    .post('http://localhost:5000/users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', (response.data))
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}
var STORE_USER
export const signUp = (fields => {
  return function(dispatch) {
      axios.get('http://localhost:5000/users/profile', fields)
          .then(response => {
              const { token } = response.data;
              localStorage.setItem('token', token);
              dispatch({
                  type: STORE_USER,
                  payload: response.data
              })
             
          })
          .catch(err => {
              if(err) { console.log(err) }
          })
  }
})