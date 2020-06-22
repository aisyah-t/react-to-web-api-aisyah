import React from 'react'

class NewWidget extends React.Component {
    state = {
        widget: {}
    }

    handleChange = (e) => {
        // console.log(e.target.value)
        // console.log(e.target.name)

        this.setState({
            widget: {
                ...this.state.widget,
                [e.target.name]: e.target.value
            }
        })

        console.log(this.state.widget)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.widget)

        // this.props.addWidget({
        //     name: this.name.value,
        //     mfg: this.mfg.value,
        //     inStock: this.inStock.value,
        //     price: this.price.value
        // }, ()=>{console.log(this.state)})
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label >Name: </label>
                <input type="text" name="name" onChange={this.handleChange} />
                <br />

                <label >Stock level: </label>
                <input type="text" name="inStock" onChange={this.handleChange} />
                <br />

                <label >MFG: </label>
                <input type="text" name="mfg" onChange={this.handleChange} />
                <br />

                <label >Price: </label>
                <input type="text" name="price" onChange={this.handleChange} />
                <br />

                <button onClick={this.handleSubmit} type='submit'>NEW WIDGET!</button>
            </form>
        )
    }
}


export default NewWidget