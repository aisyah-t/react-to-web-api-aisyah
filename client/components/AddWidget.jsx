import React from 'react'
import { addWidget } from "../api"

class AddWidget extends React.Component {
  state = {
    name: '',
    price: '',
    mfg: '',
    instock: ''
  }

  handleSubmit = event => {
    // Don't automatically submit the form
    event.preventDefault()
    console.log('Yuss!')
    addWidget(this.state)
      .then(newWidget => {
        // grabby arm
        this.props.addWidget(newWidget)
      })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} >
          <label>Name:
        <input type="text" name="name" onChange={this.handleChange} />
          </label><br></br>
          <label>Price:
        <input type="text" name="price" onChange={this.handleChange} />
          </label><br></br>
          <label>MFG:
        <input type="text" name="mfg" onChange={this.handleChange} />
          </label><br></br>
          <label>In Stock:
        <input type="text" name="instock" onChange={this.handleChange} />
          </label><br></br>
          <input type="submit" value="Add!" />
        </form>
      </>
    )
  }
}

export default AddWidget