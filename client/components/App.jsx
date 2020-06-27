import React from 'react'
import { getWidgets } from '../api'
import Widgets from './Widgets'
import AddWidget from './AddWidget'
import DeleteWidget from './DeleteWidget'

class App extends React.Component {

  state = {
    widgets: [],
    showWidgets: true
  }

  componentDidMount() {
    // console.log('did mount')
    getWidgets()
      .then(widgetsApi => {
        this.setState({ widgets: widgetsApi })
      })
  }

  addWidget = () => {
    this.setState({
      showWidgets: false
    })
  }

  editWidget = () => {
    this.setState({
      showWidgets: false
    })
  }

  render() {
    // console.log('render')
    return (
      <div className="container">
        <h1>Widgets FTW!</h1>
        {this.state.showWidgets
          ? <Widgets widgets={this.state.widgets} />
          :
          <>
            <AddWidget />
            <DeleteWidget widgets={this.state.widgets} />
          </>}
          <button onClick={this.addWidget}>Add a Widget</button>
          <button onClick={this.editWidget}>Edit a Widget</button>
      </div>
    )
  }

}

export default App
