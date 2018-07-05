import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
// import { counter } from './index.reudx'
import reducers from './reducers'
import thunk from 'redux-thunk' // 修改action creator的书写方式
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Auth from './Auth'
import Dashboard from './Dashboard'

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : () => {}
// applyMiddleware 中间件用thunk处理异步
const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  reduxDevtools
))
console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Auth}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
        {/* 访问不存在的路由统一跳转到dashboard */}
        <Redirect to="/dashboard" component={Dashboard}></Redirect>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
