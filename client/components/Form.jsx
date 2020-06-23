import React from 'react'

class NewWidget extends React.Component {
    state = {
        widget: {}
    }

    handleChange = (e) => {
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

        this.props.addWidget(
           this.state.widget
        )
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

                <button type='submit'>NEW WIDGET!</button>
            </form>
        )
    }
}


export default NewWidget