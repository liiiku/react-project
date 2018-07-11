import React from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from '../../redux/user.redux'

/**
 * 这里的user就是reducer.js中合并的user，也就是user.redux.js中export出来的user，这里面包含了所有的state，这才使得connect将state全部挂载到了props上面，类似于mapStatetoProps
 * 只有这样了之后，才有了后面的this.props.redirectTo这样获取值的效果
 * 因为是数据驱动的，所以页面跳转的控制也是由数据控制的，只要数据符合要求之后，就会做响应的跳转
 */
@connect(
  state => state.user,
  {login}
)
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      pwd: ''
    }
    this.register = this.register.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }
  register() {
    console.log(11, this.props)
    this.props.history.push('./register')
  }
  handleChange(key, val) {
    this.setState({
      [key]: val
    }) 
  }
  handleLogin() {
    this.props.login(this.state)
  }
  render() {
    return (
      <div>
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo}/> : null }
        <Logo></Logo>
        <WingBlank>
          <List>
            {this.props.msg ? <p className="error-msg">{this.props.msg}</p> : null}
            <InputItem onChange={v => this.handleChange('user', v)}>用户</InputItem>
            <InputItem type="password" onChange={v => this.handleChange('pwd', v)}>密码</InputItem>
          </List>
          <WhiteSpace />
          <Button type='primary' onClick={this.handleLogin}>登录</Button>
          <WhiteSpace />
          <Button onClick={this.register} type='primary'>注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Login