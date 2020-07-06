import React from 'react'
import { deleteWidget, updateWidget } from '../api'


class Widget extends React.Component {
    state = {
        showUpdate: false,
        name: '',
        price: '',
        mfg: '',
        inStock: '',
        id: this.props.id
    }

    openUpdate = () => {
        this.setState({
            showUpdate: true
        })
    }

    handleChange = () => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = () => {
        event.preventDefault()
        updateWidget(this.state)
        this.setState({
            showUpdate: false
        })
        window.location.replace('/')
    }

    render() {
        return (
            <>
                <li>
                    <p>Name: {this.props.name}</p>
                    <p>Price: {this.props.price}</p>
                    <p>MFG: {this.props.mfg}</p>
                    <p>Number in stock: {this.props.inStock}</p>
                    <button onClick={() => {
                        deleteWidget(this.props.id)
                    }}>Delete</button>
                    <button onClick={this.openUpdate}>Update</button>
                    {this.state.showUpdate
                        ?
                        <form>
                            <label method="post">Name:
                        <input type="text" name="name" onChange={this.handleChange}></input>
                            </label>
                            <label>Price:
                        <input type="text" name="price" onChange={this.handleChange}></input>
                            </label>
                            <label >MFG:
                        <input type="text" name="mfg" onChange={this.handleChange}></input>
                            </label>
                            <label>Number in stock:
                        <input type="text" name="inStock" onChange={this.handleChange}></input>
                            </label>
                            <input value="Update" onClick={this.handleSubmit} type="submit"></input>
                        </form>
                        : null}
                </li>
            </>
        )

    }
}

export default Widget
