import React from 'react'
import { getWidgets } from '../api.js'

class App extends React.Component {
  state = {
    widgets: []
  }

  componentDidMount() {
    console.log("did a mounty")
    getWidgets()
      .then(() => {console.log("it a then")})
  }

  render() {
    console.log("did a rendery")
    return (
      <div>
        <h1>Wiaadgets FTW!</h1>
      </div>
    )}
}

export default App