import React from 'react'
import { getWidgets } from '../api'
import Widget from './Widget'
import Form from './Form'

class App extends React.Component {
  state = {
    widgets: [],
    showForm: false,
    name: '',
    price: '',
    mfg: '',
    inStock: ''
  }

  addWidget = () => {
    document.getElementById('formButton').style.display = 'none'
    this.setState({
      showForm: true
    })
  }

  componentDidMount() {
    getWidgets()
      .then((widgetData) => {
        this.setState({
          widgets: widgetData
        })
      })
  }

  componentDidUpdate() {
    getWidgets()
      .then((widgetData) => {
        this.setState({
          widgets: widgetData
        })
      })
  }


  render() {
    return (
      <div>
        <h1>Widgets FTW!</h1>
        <ul>
          {this.state.widgets.map((element) => {
            return <Widget id={element.id} key={element.id} name={element.name} price={element.price} mfg={element.mfg} inStock={element.inStock} />
            })}
        </ul>
        {this.state.showForm && <Form handleChange={this.handleChange} />}
        <button id="formButton" onClick={this.addWidget}>Add Widget</button>
      </div>
    )
  }
}

export default App