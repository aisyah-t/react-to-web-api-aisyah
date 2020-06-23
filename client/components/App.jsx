import React from 'react'
import { getWidgets } from '../api'
import Widget from './Widget'
import WidgetForm from './WidgetForm'

class App extends React.Component {
  
  state = {
    widgets : []
  }
  
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
