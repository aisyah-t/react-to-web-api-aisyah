import React from 'react'

class EditWidget extends React.Component {
    state = {
        widget: {}
    }

    handleChange = (e) => {
        this.setState({
            widget: {
                ...this.state.widget,
                id:  this.props.widget.id,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const widget = {
            ...this.props.widget,
            ...this.state.widget
            }

            console.log(widget)

        this.props.updateWidget(widget)
        this.setState({
            widget:{}
        })
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>

              <h3>Edit Widget:</h3>

              <input type="hidden" name="id" />
              <br/>

                <label >Name: </label>
                <input type="text" name="name" defaultValue={this.props.widget.name} onChange={this.handleChange} />
                <br />

                <label >Stock level: </label>
                <input type="text" name="inStock"defaultValue={this.props.widget.inStock} onChange={this.handleChange} />
                <br />

                <label >MFG: </label>
                <input type="text" name="mfg" defaultValue={this.props.widget.mfg} onChange={this.handleChange} />
                <br />

                <label >Price: </label>
                <input type="text" name="price" defaultValue={this.props.widget.price} onChange={this.handleChange} />
                <br />

                <label >Rating: </label>
                <input type="text" name="rating" defaultValue={this.props.widget.rating} onChange={this.handleChange} />
                <br />

                <button type='submit'>Change WIDGET!</button>
            </form>
        )
    }
}


export default EditWidget