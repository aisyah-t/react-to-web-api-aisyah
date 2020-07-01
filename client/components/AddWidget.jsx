import React from 'react'

class AddWidget extends React.Component {
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
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addWidget(this.state.widget)
        this.setState({
            widget:{}
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Add a widget:</label>
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

                <label >Rating: </label>
                <input type="text" name="rating" onChange={this.handleChange} />
                <br />

                <button type='submit'>NEW WIDGET!</button>
            </form>
        )
    }
}


export default AddWidget