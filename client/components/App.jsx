import React from 'react'
import { getWidgets } from '../api'
import Widget from './Widget'

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
        <h1>Widgets FTW!</h1>{
          this.state.widgets.map(widget => {
            return <Widget widget={widget}/>
          })
        }
      </div>
    )
  }
}

export default App
