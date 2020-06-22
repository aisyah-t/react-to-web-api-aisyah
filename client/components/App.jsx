import React from 'react'
import { getWidgets } from "../api"
class App extends React.Component {
  state = {
    Widgets: []
  }

  componentDidMount() {
    console.log("mounted")
    getWidgets().then(data => {
      console.log("got Widgets")
      this.setState({
        Widgets: data
      })
    })

  }
  render() {
    console.log(this.state.Widgets)
    this.state.Widgets.map(elem => {console.log(elem)})
    console.log("renderd")
    return (
      <div>
        <h1>Widgets FTW!</h1>
      </div>
    )
  }
}

export default App
