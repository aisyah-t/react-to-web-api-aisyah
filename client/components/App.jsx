import React from 'react'
import {HashRouter as Router, Link} from 'react-router-dom'


import { getWidgets, saveWidget } from '../api.js'
import Widgets from './Widgets'
import NewWidget from './Form'
import DelWidget from './DeleteWidget'

class App extends React.Component {
  state = {
    widgets: [],
    buttonClicked: false,
    deleteButtonClicked: false
  }

  componentDidMount() {
    getWidgets()
      .then((widgets) => {
        this.setState({
          widgets: widgets
        })
      })
  }

  addWidget = (widget) => {
    saveWidget(widget)
    .then((widget)=>{
      this.setState({
        widgets:widget
      })
    })
  }

  handleFormClick = () => {
    if (this.state.buttonClicked === false) {
      this.setState({
        buttonClicked: true
      })
    } else if (this.state.buttonClicked === true) {
      this.setState({
        buttonClicked: false
      })
    }
  }

  handleDeleteFormClick = () => {
    if (this.state.deleteButtonClicked === false) {
      this.setState({
        deleteButtonClicked: true
      })
    } else if (this.state.deleteButtonClicked === true) {
      this.setState({
        deleteButtonClicked: false
      })
    }
  }

  render() {
    return (
      <div>
        <Router>
          <h1>Wiaadgets FTW!</h1>
          <Widgets widgets={this.state.widgets} />
          <input type="submit" onClick={this.handleFormClick} value="Add widget"/>
          <input type="submit" onClick={this.handleDeleteFormClick} value="Delete widget" />
          {this.state.buttonClicked && <NewWidget addWidget={this.addWidget}/>}
          {this.state.deleteButtonClicked && <DelWidget delWidget={this.delWidget}/>}
        </Router>
      </div>
    )
  }
}

export default App