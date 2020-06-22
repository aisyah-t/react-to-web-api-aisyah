import React from 'react'
// import api from '../api'
import { getWidgets } from '../api'
import Widget from './Widget'
import Form from './Form'

class App extends React.Component {

  state = {
    widget: []
  }

  componentDidMount() {
    console.log('did mount');
    getWidgets()
      .then(widget => {
        this.setState({
          widget: widget
        })
      })
  }

  render() {
    console.log('render');
    return (
      <div>
        <h1>Widgets FTW!</h1>
        <Widget widgets={this.state.widget}/>
        <Form/>
      </div>
    )
  }
}

export default App
