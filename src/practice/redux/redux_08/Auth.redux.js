import axios from "axios"

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const USER_DATA = 'USER_DATA'

// state
const initState = {
  isAuth: false,
  user: '李云龙',
  age: 20
}

// reducer
export function auth(state = initState, action) {
  console.log(state, action)
  switch(action.type) {
    case LOGIN:
      return {...state, isAuth: true}
    case LOGOUT:
      return {...state, isAuth: false}
    case USER_DATA:
      return {...state, ...action.payload}
    default:
      return state
  }
}

// action creator
/**
 * 这样用了connect之后，会被挂载到this.props上，自动dispatch，也就是修改了数据
 * 做的所有这些操作，就是为了修改state,不管做了什么，目的就是为了去改state
 */
export function login() {
  return {type: LOGIN}
}
export function logout() {
  return {type: LOGOUT}
}
export function getUserData() {
  // dispatch 用来通知数据修改
  return dispatch => {
    axios.get('/data')
      .then(res => {
        if (res.status === 200) {
          dispatch(userData(res.data[0]))
        }
      })
  }
}
// 通过参数来 拼接 type 和 要传递的data
export function userData(data) {
  return {type: USER_DATA, payload: data}
}