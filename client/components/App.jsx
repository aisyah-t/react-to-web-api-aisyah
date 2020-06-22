import React from 'react'
import Api, { getWidgets } from '../api'
import Widget from './Widget'

class App extends React.Component {
  state = {
    widgets: []
  }

  componentDidMount() {
    console.log('did mount')
    getWidgets()
      .then((widgetData) => {
        console.log('Widgets done been got!')
        this.setState({
          widgets: widgetData
        })
      })
  }
  render() {
    console.log('render')
    return (
      <div>
        <h1>Widgets FTW!</h1>
        <ul>
          {this.state.widgets.map((element) => {
            return <Widget name={element.name} price={element.price} mfg={element.mfg} inStock={element.inStock} />
          })}
        </ul>
      </div>
    )
  }
}

export default App
