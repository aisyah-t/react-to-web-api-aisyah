import React from 'react'
import Widget from './Widget'
import Form from './Form'
import { getWidgets, deleteWidget } from '../api'

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

  updateWidget = () => {
    getWidgets()
      .then(widget => {
        this.setState({
          widgets: widget,
        })
      })
  }

  removeWidget = widget => {
    deleteWidget(widget)
    .then(widgets => 
    this.setState({widgets}))
}
  
  render () {
    console.log('render')
    return (
    <div>
      <h1>Widgets FTW!</h1>
      {this.state.widgets.map(widget => {
        return <Widget key={widget.id} data={widget} removeWidget={this.removeWidget} updateWidget={this.updateWidget}/>
      })}
      <Form addWidget={this.addWidget}/>
    </div>
    )
  }
}

export default App
