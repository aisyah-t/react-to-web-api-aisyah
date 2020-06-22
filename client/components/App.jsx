import React from 'react'
import { getWidgets } from '../api'
import { saveWidget } from '../api'
import Widget from './Widget'
import Form from './Form'
import request from 'superagent'

class App extends React.Component {
  state = {
    widgets: [],
    form: false,
  }

handleClick = (e) => {
  this.setState({
    form: true,
  })
}


componentDidMount() {
  console.log('did mount')
  getWidgets()

  .then(widgets => {
    this.setState({ "widgets": widgets })
  })
}

createWidget(widget) {
  // console.log(widget)
  saveWidget(widget)
}

  render() {
    console.log('render')
    return (
      <div>
        <h1>Widgets FTW!</h1>{
          this.state.widgets.map(widget => {
            return <Widget key={widget.id} widget={widget}/>
          })
        }
        
        <button onClick={this.handleClick}>Add a new widget</button>
        {this.state.form && <Form createWidget={this.createWidget}/>}
      </div>
    )
  }
}

export default App
