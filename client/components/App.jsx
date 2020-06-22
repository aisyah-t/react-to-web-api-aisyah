import React from 'react'
import Widget from './Widget'
import { getWidgets } from '../api'

class App extends React.Component {
  //state MUST be declared before render()!!!
  state = {
    widgets: []
  }

  componentDidMount() {
    console.log('component did mount')
    getWidgets()
      .then(widget => {
        this.setState({
          widgets: widget
        })
      })
  }
  
  render () {
    console.log('render')
    return (
      <div>
        <h1>Widgets FTW!</h1>
        {this.state.widgets.map(widget => {
          console.log(widget)
          return <Widget key={widget.id} data={widget}/>
        })}
      </div>
    )
  }
}

export default App
