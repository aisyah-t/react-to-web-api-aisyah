import React from 'react'

class Form extends React.Component {

  state = {
    name: '',
    price: '',
    mfg: '',
    inStock: '',
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (

      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={this.handleChange} />
        </label>

        <label>
          Price:
          <input type="text" name="price" onChange={this.handleChange} />
        </label>

        <label>
          Mfg:
          <input type="text" name="mfg" onChange={this.handleChange} />
        </label>

        <lable>
          InStock:
          <input type="text" name="inStock" onChange={this.handleChange} />
        </lable>


        <input type="submit" value="Save" />
      </form>
    )
  }
}


export default Form