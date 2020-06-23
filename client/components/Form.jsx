import React from 'react'
import { saveWidget } from '../api'


class Form extends React.Component {
    state = {
        name: "",
        price: 0,
        mfg: "",
        inStock: 0,
    }

    handleSubmit = (event) => {
        event.preventDefault()
        saveWidget(this.state)
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
                <h3>This is a form</h3>
                <form onSubmit={this.handleSubmit}>
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
                        <input type="radio" id="rating-1" name="rating" value="1" /><label>1</label>
                        <input type="radio" id="rating-2" name="rating" value="2" /><label>2</label>
                        <input type="radio" id="rating-3" name="rating" value="3" /><label>3</label>
                        <input type="radio" id="rating-4" name="rating" value="4" /><label>4</label>
                        <input type="radio" id="rating-5" name="rating" value="5" /><label>5</label>
                    </span>
                    <input type="submit" value="Save" />
                </form>
            </div>
        )
    }

}

export default Form