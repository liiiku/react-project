import React from 'react'
import { connect } from 'react-redux'
import { addGUN, removeGUN, addGunAsync } from './index.redux'

// 需要哪些数据
const mapStatetoProps = (state) => {
  return { num: state }
}
const actionCreators = { addGUN, removeGUN, addGunAsync }
// App = connect(mapStatetoProps, actionCreators)(App)
// 你要state里面的什么属性，放在props里面  你好什么方法，放在props 自动dispatch
@connect(mapStatetoProps, actionCreators)

class App extends React.Component{
  // constructor(props) {
  //   super(props)
  // }
  render() {
    // const store = this.props.store
    // const num = store.getState()
    const num = this.props.num
    const addGUN = this.props.addGUN
    const removeGUN = this.props.removeGUN
    const addGunAsync = this.props.addGunAsync
    return (
      <div>
        <h1>现在有机枪{num}把</h1>
        {/* <button onClick={() => store.dispatch(addGUN())}>申请武器</button>
        <button onClick={() => store.dispatch(removeGUN())}>上交武器</button>
        <button onClick={() => store.dispatch(addGunAsync())}>拖两天再给</button> */}
        <button onClick={addGUN}>申请武器</button>
        <button onClick={removeGUN}>上交武器</button>
        <button onClick={addGunAsync}>拖两天再给</button>
      </div>
    )
  }
}

export default App
