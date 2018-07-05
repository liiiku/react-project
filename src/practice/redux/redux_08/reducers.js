// 合并所有的reducer 并且返回
import { combineReducers } from 'redux'
import { counter } from './index.reudx'
import { auth } from './Auth.redux'

/**
 * 这样拼接之后，后面再connect中想拿到state，就需要state.counter state.auth才能拿到state数据了
 */
export default combineReducers({counter, auth})
