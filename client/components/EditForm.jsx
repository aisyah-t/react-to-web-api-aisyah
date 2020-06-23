import React from 'react'
import { saveWidget } from '../api'


class EditForm extends React.Component {
    state = {
        name: "",
        price: 0,
        mfg: "",
        inStock: 0,
        rating: ""
    }

    handleEditSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
        editWidget(this.state)
            .then(() => this.props.refreshList())
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h3>This is an edit form</h3>
                <form onSubmit={this.handleEditSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" onChange={this.handleChange} />
                    <label>Price:</label>
                    <input type="number" name="price" onChange={this.handleChange} />
                    <label>MFG:</label>
                    <input type="text" name="mfg" onChange={this.handleChange} />
                    <label>Stock level:</label>
                    <input type="number" name="inStock" onChange={this.handleChange} />
                    <label>Rating:</label>
                    <span className="radio-buttons">
                        <input type="radio" id="rating-1" name="rating" value="1" onChange={this.handleChange}/><label htmlFor="1">1</label>
                        <input type="radio" id="rating-2" name="rating" value="2" onChange={this.handleChange}/><label htmlFor="2">2</label>
                        <input type="radio" id="rating-3" name="rating" value="3" onChange={this.handleChange}/><label htmlFor="3">3</label>
                        <input type="radio" id="rating-4" name="rating" value="4" onChange={this.handleChange}/><label htmlFor="4">4</label>
                        <input type="radio" id="rating-5" name="rating" value="5" onChange={this.handleChange}/><label htmlFor="5">5</label>
                    </span>
                    <input type="submit" value="Save" />
                </form>
            </div>
        )
    }

}

export default EditForm