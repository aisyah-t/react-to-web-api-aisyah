import React from 'react'
import {getWidgets} from '../api'
import Widget from './Widget'
import Form from './Form'
import UpdateWidget from './Update Widget'




class App extends React.Component {



widgetToUpdate = (widgetToUpdate) => {
    console.log('this is data in app -- ' , widgetToUpdate)
    this.setState ({widgetData: widgetToUpdate})
  }
  
state = {
  widgets: [],
  widgetData: {}
}

  componentDidMount() {

    getWidgets()
    .then(data => {
      this.setState({
        widgets: data
      })
    })
  }
    render () {

      return (
      <div>
        <h1>Here are some widgets:</h1>
        <ul>
          {this.state.widgets.map(widget => {
            return (
              <>
              <Widget data={widget} widgetToUpdate={this.widgetToUpdate} />
              </>
            )   
          })}
        </ul>
          <UpdateWidget data={this.state.widgetData}  />
          <Form/>
      </div>
      )
    }
}

export default App
