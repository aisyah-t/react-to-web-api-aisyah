import React from 'react'

class Add extends React.Component {
    state = {
        name: '',
        price: '',
        mfg: '',
        inStock: ''
    }
    handleSubmit = event => {
        event.preventDefault()
        console.log('submit', this.state)
        this.props.setName(this.state.name)
        this.state.setstate(this.state)
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <label>Name:
            <input type="text" name="name" />
                    </label>
                    <label>Price:
            <input type="text" name="price" />
                    </label>
                    <label>MFG:
            <input type="text" name="mfg" />
                    </label>
                    <label>Stock:
            <input type="text" name="instock" />
                    </label>
                    <input type="submit" value="Add" />
                </form>
            </div>
        )
    }
}

export default Add