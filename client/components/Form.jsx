import React from 'react'
import { addNewWidget } from '../api'

class Form extends React.Component {
    state ={
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

    

    handleSubmit = (event) => {
        event.preventDefault()
        // console.log(this.state)
        addNewWidget(this.state)
        document.getElementById('formName').value = ''
        document.getElementById('formPrice').value = ''
        document.getElementById('formMFG').value = ''
        document.getElementById('formStock').value = ''
      }
    render() {
        
        
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label method="post">Name: 
                        <input id="formName" type="text" name="name" onChange={this.handleChange}></input>
                    </label>
                    <label>Price: 
                        <input id="formPrice" type="text" name="price" onChange={this.handleChange}></input>
                    </label>
                    <label >MFG: 
                        <input id="formMFG" type="text" name="mfg" onChange={this.handleChange}></input>
                    </label>
                    <label>Number in stock: 
                        <input id="formStock" type="text" name="inStock" onChange={this.handleChange}></input>
                    </label>
                    <input type="submit"></input>
                </form>
            </>
        )
    }
}

export default Form


