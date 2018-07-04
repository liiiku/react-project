import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './App'
import { counter, addGun, removeGun } from './index.reudx'

/**
 * react 和 redux 链接起来：
 * 1、先新建一个store
 * 2、store通过props的方式传到组件里面
 * 3、外界用subscribe订阅这个render函数，数据一旦有什么变化，函数会重新执行，会重新渲染整个页面
 */
const store = createStore(counter)

function render() {
  ReactDOM.render( 
    <App store={ store } addGun={ addGun } removeGun={removeGun}/>,
    document.getElementById('root')
  )
}

render()

// 当时数据有变化的时候回执行这个函数
store.subscribe(render)