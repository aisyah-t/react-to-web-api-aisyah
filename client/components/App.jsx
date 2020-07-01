import React from 'react'

import { getWidgets, saveWidget } from '../api.js'
import Widgets from './Widgets'
import AddWidget from './AddWidget'
import DeleteWidget from './DeleteWidget'

class App extends React.Component {
  state = {
    widgets: [],
    buttonClicked: false,
    deleteButtonClicked: false,
    updateButtonClicked: false
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
      .then((widget) => {
        this.setState({
          widgets: widget
        })
      })
  }

  handleFormClick = () => {
    if (this.state.buttonClicked === false) {
      this.setState({
        buttonClicked: true,
        deleteButtonClicked: false,
        updateButtonClicked: false
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
        deleteButtonClicked: true,
        buttonClicked: false,
        updateButtonClicked: false
      })
    } else if (this.state.deleteButtonClicked === true) {
      this.setState({
        deleteButtonClicked: false
      })
    }
  }

  handleUpdateFormClick = () => {
    if (this.state.updateButtonClicked === false) {
      this.setState({
        updateButtonClicked: true,
        buttonClicked: false,
        deleteButtonClicked: false
      })
    } else if (this.state.updateButtonClicked === true) {
      this.setState({
        updateButtonClicked: false
      })
    }
  }

  render() {
    return (
      <div>
        <h1>Wiaadgets FTW!</h1>
        <Widgets widgets={this.state.widgets} />
        <input type="submit" onClick={this.handleFormClick} value="Add widget" />
        <input type="submit" onClick={this.handleDeleteFormClick} value="Delete widget" />
        <input type="submit" onClick={this.handleUpdateFormClick} value="Update widget" />
        {this.state.buttonClicked && <AddWidget addWidget={this.addWidget} />}
        {this.state.deleteButtonClicked && <DeleteWidget widgets={this.state.widgets} />}
        {this.state.updateButtonClicked && <UpdateWidget widgets={this.state.widgets} />}
      </div>
    )
  }
}

export default App