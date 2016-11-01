import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from '../constants/ActionTypes'

//设置初始
const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
]
//es6参数默认值语法 以指定state的初始状态为开始。redux首次执行的时候，
//state为undefined，在此可借机设置并返回应用的初始state
//                                  ||
//                                  \/
export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          //reduce()：对数组中的所有元素调用指定的回调函数。该回调函数的返回值
          //为累积结果，并且此返回值在下一次调用该回调函数时作为参数提供
         id:state.reduce((maxId,todo)=>Math.max(maxId,todo.id),-1) + 1,
         completed:false,
         text:action.text
        },
        ...state
      ]

    case DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      )

    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, text: action.text } :
          todo
      )
//选中todo 
    case COMPLETE_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, completed: !todo.completed } :
          todo
      )
//全选
    case COMPLETE_ALL:
      const areAllMarked = state.every(todo => todo.completed)
      return state.map(todo => ({
        ...todo,
        completed: !areAllMarked
      }))
//清除已完成
    case CLEAR_COMPLETED:
      return state.filter(todo => todo.completed === false)

    default:
      return state
  }
}
