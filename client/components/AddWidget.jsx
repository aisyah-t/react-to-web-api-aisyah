import React from 'react'

class AddWidget extends React.Component {
  state = {
    name: '',
    price: '',
    mfg: '',
    inStock: ''
  }

  handleSubmit = event => {
    // Don't automatically submit the form
    event.preventDefault()

    console.log('submit', this.state)

    this.props.setName(this.state.name)
  }

  render() {
    return (
      <>
      <form onSubmit={this.handleSubmit} >
        <label>Name:
        <input type="text" name="name"/>
        </label><br></br>
        <label>Price:
        <input type="text" name="price"/>
        </label><br></br>
        <label>MFG:
        <input type="text" name="mfg"/>
        </label><br></br>
        <label>In Stock:
        <input type="text" name="instock"/>
        </label><br></br>
        <input type="submit" value="Add!" />
      </form>
      </>
    )
  }
}

export default AddWidget