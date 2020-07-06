import React from 'react'
import { deleteWidget } from '../api'


class Widget extends React.Component {
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
                </li>
            </>
        )

    }
}

export default Widget
