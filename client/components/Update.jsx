import React from 'react'
import { updateWidget } from '../api'

    //need to hide edit until clicked

//same path pattern as Delete.jsx
class Update extends React.Component {
    state = {
        clicked: false
    }

    handleSubmit = event => {
        event.preventDefault()
        const widget = this.state
        updateWidget(widget, this.props.id)
        .then(() => {
        this.props.updateWidget()
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    editClick = () => {
        if (this.state.clicked == false) {
            this.setState({
                clicked: true
            })
        } else if (this.state.clicked == true) {
            this.setState({
                clicked: false
            })
        }
    }

    //alternative to this method would be to set input value with default value so that the form is already prefilled and no blanks are being pushed
    //triggered wheneever props changed on component
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     console.log(nextProps, prevState)
    //     if (prevState !== nextProps.widget) {
    //         console.log('good')
    //         return {...nextProps.widget} //... duplicator fuction
    //     } else {
    //         return null
    //     }
    // }

    render() {
        return (
                <>
                <button onClick={this.editClick}>Edit</button>
                {this.state.clicked &&
                <div class="update">
                <h3>Edit this Widget</h3>
                    <form onSubmit={this.handleSubmit}>
                        <label>Name:</label>
                        <input type="text" name="name" value={this.state.name} defaultValue={this.props.widget.name} onChange={this.handleChange}/>

                        <label>Price:</label>
                        <input type="text" name="price" value={this.state.price} defaultValue={this.props.widget.price} onChange={this.handleChange}/>

                        <label>MFG:</label>
                        <input type="text" name="mfg" value={this.state.mfg} defaultValue={this.props.widget.mfg} onChange={this.handleChange}/>

                        <label>Stock:</label>
                        <input type="text" name="inStock" value={this.state.inStock} defaultValue={this.props.widget.inStock} onChange={this.handleChange}/>

                        <label>Rating:</label>
                        <input type="text" name="rating" value={this.state.rating} defaultValue={this.props.widget.rating} onChange={this.handleChange}/>

                        <button type="submit">Submit</button>
                    </form>
                </div>
                }
                </>
            )
    }
}

export default Update