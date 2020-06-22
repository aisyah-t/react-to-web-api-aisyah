import React from 'react'

class Form extends React.Component {
  render () {
    return (
      <div>
      <h3>Add a new widget!</h3>
      <form onSubmit={this.handleSubmit} >
        <label >Name</label>
        <input type="text" name="name"/>

        <label >Price</label>
        <input type="text" name="price"/>

        <label >MFG</label>
        <input type="text" name="mfg"/>

        <label >Remaining Stock</label>
        <input type="text" name="inStock"/>

        <input type="submit" name="submit"/>

      </form>
      </div>
    )
  }
}

export default Form