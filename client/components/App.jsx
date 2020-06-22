import React from 'react'
import { getWidgets } from '../api'

class App extends React.Component {
  state = {
    widgets: []
  }


componentDidMount() {
  console.log('did mount')
  getWidgets()
    // .then(result => {
    //   console.log(result)
    // })
  .then(widgets => {
    this.setState({ "widgets": widgets })
  })
}

  render() {
    console.log('render')
    return (
      <div>
        <h1>Widgets FTW!</h1>
      </div>
    )
  }
}

export default App
