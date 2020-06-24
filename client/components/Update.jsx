import React from 'react'
import { updateWidget } from '../api'

    //need to hide edit until clicked

//same path pattern as Delete.jsx
class Update extends React.Component {
    state = {}

    handleSubmit = event => {
        event.preventDefault()
        const widget = this.state
        updateWidget(widget, this.props.id)
        .then(() => {
        console.log('it worked!')
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    //triggered wheneever props changed on component
    getDerivedStateFromProps(nextProps, prevState) {
        if (prevState !== nextProps.widget) {
            return {...nextProps.widget} //... duplicator fuction
        } else {
            return null
        }
    }

    render() {
        return (
            <div class="update">
            <h3>Edit this Widget</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>

                    <label>Price:</label>
                    <input type="text" name="price" value={this.state.price} onChange={this.handleChange}/>

                    <label>MFG:</label>
                    <input type="text" name="mfg" value={this.state.mfg} onChange={this.handleChange}/>

                    <label>Stock:</label>
                    <input type="text" name="inStock" value={this.state.inStock} onChange={this.handleChange}/>

                    <label>Rating:</label>
                    <input type="text" name="rating" value={this.state.rating} onChange={this.handleChange}/>

                    <button type="submit">Edit</button>
                </form>
            </div>
        )
    }
}

export default Update