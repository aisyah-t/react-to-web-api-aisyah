import React from 'react'
import { saveWid } from "../api"

class Add extends React.Component {
    state = {
        formstuff: {
            name: "none",
            price: "0",
            mfg: "rubin inc",
            inStock: "0",
        }
       
      }
    
      componentDidMount() {
        console.log("mounted add")
       
      }

      handleSubmit = event => {
       
        event.preventDefault()
        console.log( this.state.formstuff)

        saveWid(this.state.formstuff).then(elem => {
            console.log("data base")
        })  
        
      }
      handleChange = event => {
        console.log('change!', event.target.name)
    

        this.setState({
          formstuff: {
           ... this.state.formstuff, 
           [event.target.name]: event.target.value
          }
        })
      }
      
      render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} placeholder="name" name="name"/>
            <input type="text" onChange={this.handleChange} placeholder="price" name="price"/>
            <input type="text" onChange={this.handleChange} placeholder="mfg" name="mfg"/>
            <input type="text" onChange={this.handleChange} placeholder="inStock" name="inStock"/>
            <button type="submit">submit</button>
        </form>
           

        )
      }
}

export default Add
