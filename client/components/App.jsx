import React from 'react'
import Widget from './Widget'
import Form from './Form'
import EditForm from './EditForm'

import { getWidgets } from '../api'
import { saveWidget } from '../api'
import { deleteWidget } from '../api'
import { editWidget } from '../api'

class App extends React.Component {
  state = {
    widgets: [],
    form: false,
    editForm: false
  }

handleClick = (e) => {
  this.setState({
    form: true,
  })
}

handleDeleteClick = (e) => {
  deleteWidget(event.target.id)
  this.refreshList()
}

handleEditClick = (e) => {
  this.setState({editForm:true})
}

handleEditSubmit = (e) => {
  editWidget(event.target.id)
  this.refreshList()
}

refreshList = () => {
  getWidgets()

  .then(widgets => {
    this.setState({ "widgets": widgets })
  })
}

componentDidMount() {
  console.log('did mount')
 this.refreshList()
}

  render() {
    console.log('render')
    return (
      <div>
        <h1>Widgets FTW!</h1>{
          this.state.widgets.map(widget => {
            return <Widget key={widget.id} widget={widget} handleDeleteClick={this.handleDeleteClick} handleEditClick={this.handleEditClick}/>
          })
        }

        {this.state.editForm && <EditForm refreshList={this.refreshList}/>}
        
        <button onClick={this.handleClick}>Add a new widget</button>
        {this.state.form && <Form refreshList={this.refreshList}/>}
      </div>
    )
  }
}

export default App
