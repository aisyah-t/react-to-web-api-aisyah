import React from 'react'
import { deleteWidget } from '../api'

class DeleteWidget extends React.Component {
  state = {
    widgetId: this.props.widgets[0].id
  }

  handleChange = (e) => {
    this.setState({ widgetId: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    deleteWidget(this.state.widgetId)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Pick a widget to delete:</label>
        <select name="deleteWidget" value={this.state.value} onChange={this.handleChange}>
          {this.props.widgets.map((widget) => {
            return <option key={`delete_${widget.id}`} value={widget.id}>{widget.name}</option>
          })
          }
        </select>

        <button type='submit' value="Submit">Delete</button>
      </form>
    )
  }
}

export default DeleteWidget