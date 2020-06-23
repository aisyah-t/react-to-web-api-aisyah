import React from 'react'

class Form extends React.Component {
    state = {
        name: " ",
        price: " ",
        mfg: " ",
        inStock: " ",
    }

    handleSubmit = event => {
        event.preventDefault()
        addWidget(this.state)
        .then(newWidget => {
          this.props.addWidget(newWidget)
        })
    }

    handleChange = (e) => {
        this.setState({
            //automatically thinks of it a string
            //cannot access using dot notation... throws a tantrum
            
            //this line basically means please look and update only the one I'm working on pretty please and thank you...
            [e.target.name]: e.target.value,
        })
    }
    
    render() {
        return (
            <div className="create">
                <h3>Create your own Widget!</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>

                    <label>Price:</label>
                    <input type="text" name="price" value={this.state.price} onChange={this.handleChange}/>

                    <label>MFG:</label>
                    <input type="text" name="mfg" value={this.state.mfg} onChange={this.handleChange}/>

                    <label>Stock:</label>
                    <input type="text" name="inStock" value={this.state.inStock} onChange={this.handleChange}/>

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form