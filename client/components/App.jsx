import React from 'react'
import Widget from './Widget'
import Form from './Form'
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
          widgets: widget,
        })
      })
  }

  addWidget = widget => {
    const widgets = this.state.widgets
    widgets.push(widget)
    this.setState({widgets})
  }
  
  render () {
    console.log('render')
    return (
    <div>
      <h1>Widgets FTW!</h1>
      {this.state.widgets.map(widget => {
        return <Widget key={widget.id} data={widget}/>
      })}
      <Form addWidget={this.addWidget}/>
    </div>
    )
  }
}

export default App
