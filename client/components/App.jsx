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

  deleteWidget = () => {
    this.setState({
      showWidgets: false
    })
  }

  // updateWidget = () => {
  //   this.setState({
  //     showWidgets: false
  //   })
  // }

  render() {
    // console.log('render')
    return (
      <div className="container">
        
        <header>
          <h1>Widgets FTW!</h1>
        </header>

        {this.state.showWidgets
          ? <Widgets widgets={this.state.widgets} />
          :
          <>
            <AddWidget />
            <DeleteWidget widgets={this.state.widgets} />
          </>}
        <button onClick={this.addWidget}>Add a Widget</button>
        <button onClick={this.deleteWidget}>Delete a Widget</button>
        {/* <button onClick={this.editWidget}>Edit a Widget</button> */}
      </div>
    )
  }

}

export default App
