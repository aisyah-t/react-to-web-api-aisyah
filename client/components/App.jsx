import React from 'react'
import { getWidgets } from '../api'
import Widgets from './Widgets'

class App extends React.Component {

  state = {
    widgets: []
  }

  componentDidMount() {
    // console.log('did mount')
    getWidgets()
      .then( widgetsApi => {
        this.setState ({ widgets: widgetsApi })
      }
  )}

  render() {
    // console.log('render')
    return (
      <div>
        <h1>Widgets FTW!</h1>
        <Widgets widgets = {this.state.widgets}/>
      </div>
    )

  }
}

export default App
