import React from 'react'
import {HashRouter as Router, Link} from 'react-router-dom'


import { getWidgets, saveWidget } from '../api.js'
import Widgets from './Widgets'
import NewWidget from './Form'

class App extends React.Component {
  state = {
    widgets: [],
    buttonClicked: false
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

  render() {
    return (
      <div>
        <Router>
          <h1>Wiaadgets FTW!</h1>
          <Widgets widgets={this.state.widgets} />
          <input type="submit" onClick={this.handleFormClick} value="Add widget"/>
          {this.state.buttonClicked && <NewWidget addWidget={this.addWidget}/>}
        </Router>
      </div>
    )
  }
}

export default App