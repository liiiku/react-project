import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import App from './App'
import { counter, addGun, removeGun, addGunAsync } from './index.reudx'
import thunk from 'redux-thunk' // 修改action creator的书写方式

// applyMiddleware 中间件用thunk处理异步
const store = createStore(counter, applyMiddleware(thunk))

function render() {
  ReactDOM.render( 
    <App store={ store } addGun={ addGun } removeGun={removeGun} addGunAsync={addGunAsync}/>,
    document.getElementById('root')
  )
}

render()

// 当时数据有变化的时候回执行这个函数
store.subscribe(render)