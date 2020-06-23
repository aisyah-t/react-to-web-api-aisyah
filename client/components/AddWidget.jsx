import React from 'react'
import { addWidget } from '../api'

class AddWidget extends React.Component {

    state = {
        widget: {
            name: '',
            price: '',
            mfg: '',
            inStock: '',
            rating: ''
        }
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        addWidget(this.state.widget)
        .then()
    }

    handleChange = (evt) => {
        this.setState({
            widget: {
                ...this.state.widget,
                [evt.target.name]: evt.target.value
            }
        })
        console.log(this.state.widget)
    }

    render() {
        return (
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" onChange={this.handleChange} />

                <label htmlFor="price">Price:</label>
                <input type="text" name="price" onChange={this.handleChange} />

                <label htmlFor="mfg">Manufacturing Group:</label>
                <input type="text" name="mfg" onChange={this.handleChange} />

                <label htmlFor="inStock">In Stock:</label>
                <input type="text" name="inStock" onChange={this.handleChange} />

                <label htmlFor="rating">Rating:</label>
                <input type="text" name="rating" onChange={this.handleChange} />

                <button onClick={this.handleSubmit}>Add widget</button>
            </div>
        )
    }
}

export default AddWidget