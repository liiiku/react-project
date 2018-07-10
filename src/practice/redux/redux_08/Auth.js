import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login, getUserData } from './Auth.redux'
// import axios from 'axios'

// 有两个reducers 一个页面 一个登陆 每个reducer都有一个state
// 多个reducer就需要合并，combineReducers合并
@connect(
  state => state.auth,
  {login, getUserData}
)
class Auth extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     data: {}
  //   }
  // }
  componentDidMount() {
    this.props.getUserData()
  }
  render() {
    return (
      <div>
        <h2>我的名字是 {this.props.user}, 年龄{this.props.age}</h2>
        { this.props.isAuth ? <Redirect to="/dashboard"/> : null}
        <h2>你没有权限，需要登陆才能看</h2>
        <button onClick={this.props.login}>登录</button>
      </div>
    )
  }
}

export default Auth
