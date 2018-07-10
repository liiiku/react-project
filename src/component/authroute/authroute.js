import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { loadData } from '../../redux/user.redux'
import { connect } from 'react-redux'

@withRouter
@connect(
  null,
  {loadData}
)
class AuthRoute extends React.Component {
  componentDidMount() {
    const publicList = ['/login', '/register']
    const pathname = this.props.location.pathname
    if (publicList.indexOf(pathname) > -1) {
      return null
    }
    /**
     * 获取用户信息
     * 是否登录
     * 现在的url地址 login 是不需要跳转的
     * 用户的type 身份是boss 还是牛人
     * 用户是否完善信息（选择投降 个人简介）
     */
    axios.get('/user/info')
      .then(res => {
        if (res.status === 200) {
          if (res.data.code === 0) {
            // 有登录信息的
            this.props.loadData(res.data.data)
          } else {
            console.log(26, this.props.history) // undefined 因为AuthRoute不是路由组件，只是一个简单的组件，并没有操作路由的方法，怎么做呢？需要用到withRouter
            this.props.history.push('/login') // 是否能访问其他页面，开关就在server/user.js中控制
          }
          console.log(29, res.data)
        }
      })
  }
  render() {
    return null
  }
}

export default AuthRoute