import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import App from './App'
import { counter } from './index.reudx'
import thunk from 'redux-thunk' // 修改action creator的书写方式
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : () => {}
// applyMiddleware 中间件用thunk处理异步
const store = createStore(counter, compose(
  applyMiddleware(thunk),
  reduxDevtools
))

function Erying() {
  return <h2>二营</h2>
}

function Qibinglian() {
  return <h2>骑兵连</h2>
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">一营</Link>
          </li>
          <li>
            <Link to="erying">二营</Link>
          </li>
          <li>
            <Link to="qibinglian">骑兵连</Link>
          </li>
        </ul>
        <Route path="/" exact component={App}></Route>
        <Route path="/erying" component={Erying}></Route>
        <Route path="/qibinglian" component={Qibinglian}></Route>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
