//引入react核心库
import React from 'react'
//引入页面渲染库ReactDOM
import ReactDOM from 'react-dom'
//引入App
import App from './App'
import store from './store/index'
import {Provider} from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
