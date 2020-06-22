import React from 'react'
import Widget from './Widget'
import { getWidgets } from '../api'

class App extends React.Component {
  //state MUST be declared before render()!!!
  state = {
    widgets: []
  }

  componentDidMount() {
    console.log('component did mount')
    getWidgets()
      .then(widget => {
        this.setState({
          widgets: widget,
        })
      })
  }
  
  render () {
    console.log('render')
    return (
    <>
      <div>
        <h1>Widgets FTW!</h1>
        {this.state.widgets.map(widget => {
          return <Widget key={widget.id} data={widget}/>
        })}
      </div>
      {/* <div>
        <form onSubmit={this.onSubmitHandle.bind(this)}>  
          <input type="text" name="item" className="item"/>        
          <button className="btn-add-item">Add</button>
        </form>
        <ul>{this.state.mockData.map(item => (          
          <li key={item.id}>{item.title}
            <button onClick={this.onDeleteHandle.bind(this, item.id)}>Delete</button> 
            <button onClick={this.onEditHandle.bind(this, item.id, item.title)}>Edit</button>
            <button onClick={this.onCompleteHandle}>Complete</button>
          </li>
          ))}
        </ul>
      </div> */}
    </>
    )
  }
}

export default App
