import React from 'react'
import { getWidgets } from '../api.js' 
import Widget from './Widget'
import AddWidget from './AddWidget'

class App extends React.Component {
  state = {
    widgets: []
  }

  componentDidMount() {
    console.log('did mount')
    getWidgets()
    .then((widgets) => {
      this.setState({
        widgets: widgets
      })
    })
}

  addWidget = widget => {
    const widgets = this.state.widgets

    widgets.push(widget)

    this.setState({widgets})
  }


  render() {
    console.log('render')
    return (
      <div>
        <h1>Widgets FTW!</h1>
        <ul>
          {this.state.widgets.map(widget => {
            return <Widget name={widget.name} price={widget.price} mfg={widget.mfg} inStock={widget.inStock} />
          })}
        </ul>
        <h2>Add another widget!</h2>
        <AddWidget addWidget={this.addWidget} />
      </div>
    )
  }
}

export default App
