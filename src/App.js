import React, { Component } from 'react'
import './App.css'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {getActiveScreen} from './action/screen.action'

class App extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <div className="App">
        <h1>Hello World.</h1>
      </div>
    )
  }
}

const stateProps = (state, ownProps) => ({
  activeScreen: state.activeScreen
})

const dispatchProps = dispatch => (
  bindActionCreators({getActiveScreen}, dispatch)
)

export default connect(stateProps, dispatchProps)(App)