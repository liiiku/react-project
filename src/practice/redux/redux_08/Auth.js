import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from './Auth.redux'

// 有两个reducers 一个页面 一个登陆 每个reducer都有一个state
// 多个reducer就需要合并，combineReducers合并
@connect(
  state => state.auth,
  {login}
)
class Auth extends Component {
  render() {
    return (
      <div>
        { this.props.isAuth ? <Redirect to="/dashboard"/> : null}
        <h2>你没有权限，需要登陆才能看</h2>
        <button onClick={this.props.login}>登录</button>
      </div>
    )
  }
}

export default Auth
