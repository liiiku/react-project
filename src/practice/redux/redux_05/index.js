import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import App from './App'
import { counter } from './index.reudx'
import thunk from 'redux-thunk' // 修改action creator的书写方式
import { Provider } from 'react-redux'

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : () => {}
// applyMiddleware 中间件用thunk处理异步
const store = createStore(counter, compose(
  applyMiddleware(thunk),
  reduxDevtools
))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
