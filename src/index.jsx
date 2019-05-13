import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import App from './components/App'

import './assets/css/bootstrap-grid.min.css'
import './assets/css/app.css'
import './assets/js/icons'

ReactDOM.render(
    <Provider store={ store } >
        <App/>
    </Provider>,
    document.getElementById('root')
)