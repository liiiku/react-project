import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addGun, removeGun, addGunAsync } from './index.reudx'

class App extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    // const store = this.props.store
    // const num = store.getState()
    const num = this.props.num
    const addGun = this.props.addGun
    const removeGun = this.props.removeGun
    const addGunAsync = this.props.addGunAsync
    return (
      <div>
        <h1>现在有机枪{num}把</h1>
        {/* <button onClick={() => store.dispatch(addGun())}>申请武器</button>
        <button onClick={() => store.dispatch(removeGun())}>上交武器</button>
        <button onClick={() => store.dispatch(addGunAsync())}>拖两天再给</button> */}
        <button onClick={addGun}>申请武器</button>
        <button onClick={removeGun}>上交武器</button>
        <button onClick={addGunAsync}>拖两天再给</button>
      </div>
    )
  }
}

/**
 * connect先执行，App再当成参数传进来 装饰器的模式， 返回的app已经是一个新的组件了
 * 其实有四个参数，这里先传两个参数：第一个，需要哪些数据；第二个，操作这些数据的方法,
 * 并且这些方法有了自动dispatch的功能，所以也不需要store.dispatch()调用了
 * 这样react-redux 会自动把state\action放到props里面，也就不用写上面的这些内容了：
 *  const store = this.props.store
    const num = store.getState()
 */
const mapStatetoProps = (state) => {
  return { num: state }
}
const actionCreators = { addGun, removeGun, addGunAsync }

App = connect(mapStatetoProps, actionCreators)(App)
export default App