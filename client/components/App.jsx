import React from 'react'
import { getWidgets } from "../api"
class App extends React.Component {
  state = {
    Widgets: []
  }
}

componentDidMount() {
  console.log('mounted')
  getWidgets().then(data => {
    console.log('got widgets')
    this.ListeningStateChangedEvent({
      Widgets: data
    })
  })

}
render() {
  console.log(this.state.Widgets)
  return (
    <div>
      <h1> I love beans</h1>
    </div>
  )
}



export default App
