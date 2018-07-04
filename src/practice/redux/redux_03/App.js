import React, { Component } from 'react'

class App extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    const store = this.props.store
    const addGun = this.props.addGun
    const removeGun = this.props.removeGun
    const addGunAsync = this.props.addGunAsync
    const num = store.getState()
    return (
      <div>
        <h1>现在有机枪{num}把</h1>
        <button onClick={() => store.dispatch(addGun())}>申请武器</button>
        <button onClick={() => store.dispatch(removeGun())}>上交武器</button>
        <button onClick={() => store.dispatch(addGunAsync())}>拖两天再给</button>
      </div>
    )
  }
}

export default App