import React from 'react'

class UpdateWidget extends React.Component {
  state = {
    widget: {}
  }

  handleChange = (e) => {
    this.setState({
      widget: {
        ...this.state.widget,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.updateWidget(this.state.widget)
    this.setState({
      widget: {}
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Update a widget:</label>
        <label >Name: </label>
        <input type="text" name="name" onChange={this.handleChange} />

        <label >Stock level: </label>
        <input type="text" name="inStock" onChange={this.handleChange} />

        <label >MFG: </label>
        <input type="text" name="mfg" onChange={this.handleChange} />

        <label >Price: </label>
        <input type="text" name="price" onChange={this.handleChange} />

        <label >Rating: </label>
        <input type="text" name="rating" onChange={this.handleChange} />

        <button type='submit'>NEW WIDGET!</button>
      </form>
    )
  }
}


export default UpdateWidget