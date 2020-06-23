import React from 'react'
import { getWidgets } from '../api'
import Widget from './Widget'
import WidgetForm from './WidgetForm'

class App extends React.Component {
  
  state = {
    widgets : []
  }
  
// -Make things get added to DB-
// set up post route
// set up DB function that adds things
// Do i make form submit post like normal?
// route will send us to the same page

  componentDidMount(){
    console.log('did mount')
    console.log('render')
    getWidgets()
      .then((data) => {
        this.setState({
          widgets: data
        })
      })
  }

  getData = (dataFromForm) => {
    return dataFromForm
    //call api post func that will post using superagent to route that'll add and send stuff. i'll write this api func in api.js
    //then use .then (i forget what for...)
    
    // Using getWidgets() would cause more traffic/i wish i remembered the word edgars used
  }

  render() {
    return (
      <div>
        <h1>Widgets FTW!</h1>
        <ul>
          {this.state.widgets.map(eachObject => {
            return <Widget widgetObject={eachObject} key={eachObject.id}/>
            })
            }
        </ul>
        <WidgetForm getData={this.getData}/>
      </div>
    )
  }
}

export default App
