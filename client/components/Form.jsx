import React from 'react'
import {addWidget} from '../api'


class Form extends React.Component {

  state = {
    name: '',
    price: '',
    mfg: '',
    inStock: '',
    raiting:'',
  }

  handleChange = event => {
    this.setState({

      [event.target.name]: event.target.value
    })
  }

 handleSubmit = event =>{
 
  event.preventDefault()
   
  addWidget(this.state)
   .then(() => {
  
     this.props.refreshWidgets()
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
        
        <label>
          Rating:
          <input type="text" nam="rating" onChange={this.handleChange}/>
        </label>

        <input type="submit" value="Save" />
      </form>
    )
  }
}


export default Form