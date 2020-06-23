import React from 'react'
import { getWidgets } from '../api'
import Widget from './Widget'

class App extends React.Component {
  
  state = {
    widgets : []
  }
  
  componentDidMount(){
    console.log('did mount')
    console.log('render')
    getWidgets()
      .then((data) => {
        console.log("getWidgets return:", data)
        this.setState({
          widgets: data
        })
        console.log("value of property widgets set:", this.state.widgets)
      })
  }

  // make widget component that will get mapped onto the page
    // widget comp. returns <li>
    // .map widget into <ul>
      // use data from state somehow
        // can map put one object into one <li>?
        // map will run aslong as there are objects in the array. So each widget <li> will get an object.
      // put data from each object into prop using map
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
      </div>
    )
  }
}

export default App
