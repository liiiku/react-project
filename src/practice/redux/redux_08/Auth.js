import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from './Auth.redux'

// 有两个reducers 一个页面 一个登陆 每个reducer都有一个state
// 多个reducer就需要合并，combineReducers合并
// 这里是将state.auth放到了props上，因为我要用的就是state.auth上的数据 state.auth的格式是auth: {isAuth: false, user: '李云龙'}
@connect(
  state => state.auth,
  {login}
)
class Auth extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.user}告诉你</h1>
        { this.props.isAuth ? <Redirect to="/dashboard"/> : null}
        <h2>你没有权限，需要登陆才能看</h2>
        <button onClick={this.props.login}>登录</button>
      </div>
    )
  }
}

export default Auth
