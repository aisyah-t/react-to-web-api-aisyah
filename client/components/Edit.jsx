import React from 'react'

class EditWidget extends React.Component {
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

              <h3>Edit the Widget :?</h3>

              <input type="hidden" name="id"  />
              <br/>

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

                <button type='submit'>Change WIDGET!</button>
            </form>
        )
    }
}


export default EditWidget