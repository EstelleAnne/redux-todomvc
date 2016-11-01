import React from 'react'
import {render} from 'react-dom'
import reducer from './reducers'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './containers/App'
import 'todomvc-app-css/index.css'

//定义一个store，传递reducer
const store = createStore(reducer)

render(
	<Provider store={store}>
		<App/>
	</Provider>,

document.getElementById('root')
	)
