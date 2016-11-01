import { combineReducers } from 'redux'
import todos from './todos'

//combineReducers 辅助函数的作用是，把一个由多个不同 reducer 函数作为 
//value 的 object，合并成一个最终的 reducer 函数，然后就可以对这个 reducer
//调用 createStore。
//合并后的 reducer 可以调用各个子 reducer，并把它们的结果合并成一个 state 对象。
//state 对象的结构由传入的多个 reducer 的 key 决定。
//最终，state 对象的结构会是这样的{
  //reducer1: ...
  //reducer2: ...
//}
//使用 combineReducers 的前提是，每一个被组合的 Reducer 仅仅和 State 的一部分数据相关
const rootReducer = combineReducers({
  todos
})

export default rootReducer
