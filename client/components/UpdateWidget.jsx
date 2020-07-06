import React from 'react'

import { getWidget, updateWidget } from '../api'

class UpdateWidget extends React.Component {

    state = {
        widget: {
            id: '',
            name: '',
            price: '',
            mfg: '',
            inStock: '',
            rating: ''
        },
        showWidget: true
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

    getWidget = (evt) => {
        evt.preventDefault()
        getWidget(evt.target.value)
            .then(widget => {
                this.setState({
                    widget: {
                        id: widget.id,
                        name: widget.name,
                        price: widget.price,
                        mfg: widget.mfg,
                        inStock: widget.inStock,
                        rating: widget.rating
                    },
                    showWidget: false
                })
            })
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        // console.log(this.state)
        updateWidget(this.state.widget.id, this.state.widget)
            .then(widget => {
                // console.log(this.state.widget)
                this.props.refresh()
                this.props.showWidgets()
            })
    }

    render() {
        // console.log(this.props)
        return (
            <form className="four columns">
                <h3>Update a widget</h3>
                {this.state.showWidget
                    ? <>
                        <label htmlFor="widget">Select a widget to update:</label>
                        <select name="id" value={this.state.value} onChange={this.getWidget}>
                            {this.props.widgets.map(widget => {
                                return (
                                    <option value={widget.id} key={widget.id}>
                                        {widget.name}
                                    </option>
                                )
                            })}
                        </select>
                    </>
                    :
                    <>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" value={this.state.widget.name} onChange={this.handleChange} />

                        <label htmlFor="price">Price:</label>
                        <input type="text" name="price" value={this.state.widget.price} onChange={this.handleChange} />

                        <label htmlFor="mfg">Manufacturing Group:</label>
                        <input type="text" name="mfg" value={this.state.widget.mfg} onChange={this.handleChange} />

                        <label htmlFor="inStock">In Stock:</label>
                        <input type="text" name="inStock" value={this.state.widget.inStock} onChange={this.handleChange} />

                        <label htmlFor="rating">Rating:</label>
                        <input type="text" name="rating" value={this.state.widget.rating} onChange={this.handleChange} />

                        <button onClick={this.handleSubmit}>Update widget</button>
                    </>
                }
            </form>
        )
    }
}


export default UpdateWidget