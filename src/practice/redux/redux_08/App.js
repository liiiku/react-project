import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addGun, removeGun, addGunAsync } from './index.reudx'

@connect(
  // state属性放到props里面
  state => ({num: state.counter}),
  // 需要用的方法，放到props里面，自动dispatch
  { addGun, removeGun, addGunAsync }
)
class App extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    const num = this.props.num
    const addGun = this.props.addGun
    const removeGun = this.props.removeGun
    const addGunAsync = this.props.addGunAsync
    return (
      <div>
        <h1>现在有机枪{num}把</h1>
        <button onClick={addGun}>申请武器</button>
        <button onClick={removeGun}>上交武器</button>
        <button onClick={addGunAsync}>拖两天再给</button>
      </div>
    )
  }
}

// const mapStatetoProps = (state) => {
//   return { num: state }
// }
// const actionCreators = { addGun, removeGun, addGunAsync }

// App = connect(mapStatetoProps, actionCreators)(App)
export default App