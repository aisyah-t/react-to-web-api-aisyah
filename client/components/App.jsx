import React from 'react'
import {HashRouter as Router, Link} from 'react-router-dom'


import { getWidgets, saveWidget, delWidget } from '../api.js'
import Widgets from './Widgets'
import NewWidget from './Form'
import DeleteWidget from './Delete'

class App extends React.Component {
  state = {
    widgets: [],
    buttonClicked: false,
    removeButton:false,
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

  removeWidget = (widget) => {
    delWidget(widget)
    .then(widget => {
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

  handleRemoveClick = () => {
    if (this.state.removeButton === false) {
      this.setState({
        removeButton: true
      })
    } else if (this.state.removeButton === true) {
      this.setState({
        removeButton: false
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
          <br/>

          {this.state.buttonClicked && <NewWidget addWidget={this.addWidget}/>}

          <input type="submit" onClick={this.handleRemoveClick} value="Delete widget"/>

          {this.state.removeButton && <DeleteWidget widgets={this.state.widgets} removeWidget={this.removeWidget}/>}

        </Router>
      </div>
    )
  }
}

export default App