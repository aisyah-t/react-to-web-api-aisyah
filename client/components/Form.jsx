import React from 'react'

class Form extends React.Component {
    state = {
        name: "",
        price: 0,
        mfg: "",
        inStock: 0,
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createWidget(this.state)
    }

    handleChange = (event) => {
        // console.log('change', event.target.name)

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h3>This is a form</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" onChange={this.handleChange}/>
                    <label>Price:</label>
                    <input type="number" name="price" onChange={this.handleChange}/>
                    <label>MFG:</label>
                    <input type="text" name="mfg" onChange={this.handleChange}/>
                    <label>Stock level:</label>
                    <input type="number" name="inStock" onChange={this.handleChange}/>
                    <input type="submit" value="Save"/>
                </form>
            </div>
          )
    }

}

export default Form