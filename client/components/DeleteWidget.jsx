import React from 'react'
import { deleteWidget } from '../api'

class DeleteWidget extends React.Component {

    state = {
        widget: {
            id: ''
        }
    }

    handleChange = (evt) => {
        // console.log(evt.target.value)
        this.setState({
            widget: {
                id: evt.target.value
            }
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        deleteWidget(this.state.widget, this.state.widget.id)
        .then()
    }

    render() {
        // console.log(this.props)
        return (
            <form className="four columns">
                <h3>Delete a widget</h3>
                <label htmlFor="widget">Select a widget to delete:</label>
                <select name="id" value={this.state.value} onChange={this.handleChange}>
                    {this.props.widgets.map(widget => {
                        return (
                            <option value={widget.id}>
                                {widget.name}
                            </option>
                        )
                        
                    })}
                </select>
                <button onClick={this.handleSubmit}>Delete widget</button>
            </form>
        )
    }
}


export default DeleteWidget

