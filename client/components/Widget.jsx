import React from 'react'
import { deleteWidget } from '../api'

class Widget extends React.Component {

    state = {
        name: '',
        price: '',
        mfg: '',
        inStock: '',
        id: this.props.id
    }

    render() {
        //console.log(this.props)
        return (
            <div className="display">
                <li>
                    <p>Name: {this.props.name}</p>
                    <p>Price: {this.props.price}</p>
                    <p>MFG: {this.props.mfg}</p>
                    <p>Number in stock: {this.props.inStock}</p>
                    <button onClick={() => {deleteWidget(this.props.id)
            }}>Delete</button>
                </li>
            </div>
        )
    }
}
export default Widget
