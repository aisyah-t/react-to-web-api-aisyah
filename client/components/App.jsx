import React from 'react'
import { getWidgets } from '../api'
import Widgets from './Widgets'
import AddWidget from './AddWidget'
import DeleteWidget from './DeleteWidget'
import UpdateWidget from './UpdateWidget'

class App extends React.Component {

  state = {
    widgets: [],
    showWidgets: true
  }

  componentDidMount() {
    this.refreshWidgets()
  }

  refreshWidgets = () => {
    getWidgets()
      .then(widgetsApi => {
        this.setState({ widgets: widgetsApi })
      })
  }

  hideWidgets = () => {
    this.setState({
      showWidgets: false
    })
  }

  showWidgets = () => {
    this.setState({
      showWidgets: true
    })
  }

  render() {
    // console.log('render')
    return (
      <div className="container">

        <header>
          <h1>Widgets FTW!</h1>
        </header>

        {this.state.showWidgets
          ? <>
              <Widgets widgets={this.state.widgets} />
              <button onClick={this.hideWidgets}>Add a Widget</button>
              <button onClick={this.hideWidgets}>Delete a Widget</button>
              <button onClick={this.hideWidgets}>Update a Widget</button>
            </>
          :
          <>
            <AddWidget refresh={this.refreshWidgets} showWidgets={this.showWidgets} />
            <DeleteWidget widgets={this.state.widgets} refresh={this.refreshWidgets} showWidgets={this.showWidgets} />
            <UpdateWidget widgets={this.state.widgets} refresh={this.refreshWidgets} showWidgets={this.showWidgets} />
          </>
        }
      </div>
    )
  }
}

export default App