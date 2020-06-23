import React from 'react'
import Api, { getWidgets } from '../api'
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

  handleChange = event => {
    this.setState({
        [event.target.name]: event.target.value
    })
}

handleSubmit = (event) => {
  console.log(this.props)
  event.preventDefault()
  this.props.addData(this.props)
}

  addData = () => {
    console.log(this.state)

  }


  componentDidMount() {
    getWidgets()
      .then((widgetData) => {
        this.setState({
          widgets: widgetData
        })
      })
  }
  render() {
    // this.saveData(4)
    return (
      <div>
        <h1>Widgets FTW!</h1>
        <ul>
          {this.state.widgets.map((element) => {
            return <Widget key={element.id} name={element.name} price={element.price} mfg={element.mfg} inStock={element.inStock} />
          })}
        </ul>
        {this.state.showForm && <Form handleChange={this.handleChange} addData={this.addData} />}
        <button id="formButton" onClick={this.addWidget}>Add Widget</button>
      </div>
    )
  }
}

export default App