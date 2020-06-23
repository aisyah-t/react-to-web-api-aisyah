import React from 'react'

class DeleteWidget extends React.Component {
  state = {
    value: null
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.props)
    console.log(this.state.value)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Pick a widget to delete:</label>
        <select name="deleteWidget">
          {this.props.widgets.map((widget) => {
            return <option key={`delete_${widget.id}`} id={widget.id} value={widget.name}>{widget.name}</option>
          })
          }
        </select>
        <button type='submit' value="Submit">Delete</button>
      </form>
    )
  }
}

export default DeleteWidget

//when handlesubmit is pressed, send value to state, then delete the widget from db with that id