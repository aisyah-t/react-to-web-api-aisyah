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
            widget: {}
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Add a widget:</label>

                <label>Name:
                <input type="text" name="name" onChange={this.handleChange} />
                </label>

                <label >Stock level:
                <input type="text" name="inStock" onChange={this.handleChange} />
                </label>

                <label >MFG:
                <input type="text" name="mfg" onChange={this.handleChange} />
                </label>

                <label >Price:
                <input type="text" name="price" onChange={this.handleChange} />
                </label>

                <label >Rating:
                <input type="text" name="rating" onChange={this.handleChange} />
                </label>

                <button type='submit'>NEW WIDGET!</button>
            </form>
        )
    }
}


export default AddWidget