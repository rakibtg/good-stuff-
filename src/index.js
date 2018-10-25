import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

import {Provider} from 'react-redux'
import {createStore} from 'redux'

import rootReducer from './reducer/screen.reducer'
const store = createStore(rootReducer, {activeScreen: 'container-screen'})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
)

serviceWorker.unregister()