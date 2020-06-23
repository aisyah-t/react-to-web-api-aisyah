import React from 'react'
import {HashRouter as Router, Link} from 'react-router-dom'
import db from '../../server/db/db'



import { getWidgets } from '../api.js'
import Widgets from './Widgets'
import NewWidget from './Form'

class App extends React.Component {
  state = {
    widgets: [],
    buttonClicked: false
  }

  componentDidMount() {
    console.log("did a mounty")
    getWidgets()
      .then((widgets) => {
        this.setState({
          widgets: widgets
        })
      })
  }

  addWidget = (widget) => {
    console.log(widget)
    db.saveWidget(widget)
    .then(()=>{
      console.log('added')
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
    console.log("did a rendery")
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