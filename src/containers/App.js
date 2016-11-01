import React,{PropTypes} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as TodoActions from '../actions'
 
 //             解构赋值
 //                ||
 //                \/
const App=({todos,actions})=>(
  <div>
    <Header addTodo={actions.addTodo}/>
    <MainSection actions={actions} todos={todos}/>
  </div>
  )
App.PropTypes={
  actions:PropTypes.object.isRequired,
  todos:PropTypes.array.isRequired
}
const mapStateToProps=state=>({
  todos:state.todos
})
//bindActionCreators的使用场景：当需要把action creators往下传到一个组件上，
//却不想让这个组件察觉到redux的存在，而且不希望把Redux store或dispatch传给他
//TodoActions为函数
const mapDispatchToProps=dispatch=>({
  actions:bindActionCreators(TodoActions,dispatch)
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App)