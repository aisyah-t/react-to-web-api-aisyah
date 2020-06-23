import React from 'react'
import {makeWidgetApi} from '../api'

class Form extends React.Component {
  
  state = {
    name: '',
    price: '',
    mfg: '',
    inStock: '',
  }

  
  makeWidget = event => {
    event.preventDefault()
    // this.props.setName(this.state.name)
    console.log('sending the stufff!')
    makeWidgetApi(this.state)
  }
  
  handleChange = event => {
    
    console.log('change!',this.state)

    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  
  render () {
    return (
      <div>
      <h3>Add a new widget!</h3>
      <form onSubmit={this.makeWidget} >
        <label >Name</label>
        <input type="text" name="name"  onChange={this.handleChange}/>

        <label >Price</label>
        <input type="text" name="price" onChange={this.handleChange}/>

        <label >MFG</label>
        <input type="text" name="mfg" onChange={this.handleChange} />

        <label >Remaining Stock</label>
        <input type="text" name="inStock" onChange={this.handleChange} />

        <input type="submit" name="submit"/>

      </form>
      </div>
    )
  }
}

export default Form