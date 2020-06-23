import React from 'react'

class Form extends React.Component {
    // state ={
    //     name: '',
    //     price: '',
    //     mfg: '',
    //     inStock: ''
    // }


    // handleChange = event => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     })
    // }

    

    // handleSubmit = (event) => {
    //     console.log(this.props)
    //     event.preventDefault()
    //     this.props.addData(this.props)
    //   }

    render() {

        
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label method="post">Name: 
                        <input type="text" name="name" onChange={this.props.handleChange}></input>
                    </label>
                    <label>Price: 
                        <input type="text" name="price" onChange={this.props.handleChange}></input>
                    </label>
                    <label >MFG: 
                        <input type="text" name="mfg" onChange={this.props.handleChange}></input>
                    </label>
                    <label>Number in stock: 
                        <input type="text" name="inStock" onChange={this.props.handleChange}></input>
                    </label>
                    <input type="submit"></input>
                </form>
            </>
        )
    }
}

export default Form


