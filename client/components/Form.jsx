import React from 'react'
import {makeWidgetApi} from '../api'

class Form extends React.Component {
  
  state = {
    name: '',
    price: '',
    mfg: '',
    inStock: '',
    rating: '',
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
      <div id="updateFormStyle">
      <h2>Add A New Widget</h2>
      <form className = 'formDiv'onSubmit={this.makeWidget} >
        <label >Name</label>
        <input type="text" name="name"  onChange={this.handleChange}/>

        <label >Price</label>
        <input type="text" name="price" onChange={this.handleChange}/>

        <label >MFG</label>
        <input type="text" name="mfg" onChange={this.handleChange} />

        <label >Remaining Stock</label>
        <input type="text" name="inStock" onChange={this.handleChange} />

        <label >Rating</label>
        <input type="text" name="rating" onChange={this.handleChange} />

        <input type="submit" name="submit"/>

      </form>
      </div>
    )
  }
}

export default Form