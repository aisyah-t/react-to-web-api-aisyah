import React from 'react'
import {getWidgets} from '../api'
import Widget from './Widget'
import Form from './Form'

class App extends React.Component {

state = {
  widgets: []
}

  componentDidMount() {
    console.log('did mount')
    getWidgets()
    .then(data => {
      // console.log(data)
      // console.log(typeof data)
      this.setState({
        widgets: data
      })
    })
  }
    render () {
      console.log('render')
      return (
      <div>
        <h1>Here are some widgets:</h1>
        <ul>
          {this.state.widgets.map(widget => {
            return (
              <>
              <Widget data={widget} />
              </>
            )   
          })}
        </ul>
          <Form/>
      </div>
      )
    }
}

export default App
