import React from 'react'
import { getWidgets } from '../api.js'
import Widgets from './Widgets'

class App extends React.Component {
  state = {
    widgets: []
  }

  componentDidMount() {
    console.log("did a mounty")
    getWidgets()
      .then((widgets) => {
        this.setState({
          widgets: widgets
        })
      })
  }

  render() {
    console.log("did a rendery")
    return (
      <div>
        <h1>Wiaadgets FTW!</h1>
          <Widgets widgets={this.state.widgets}/>
      </div>
    )
  }
}

export default App