import React from 'react'

class Widget extends React.Component {
    render() {
        return (
            <>
                <li>
                    <p>Name: {this.props.name}</p>
                    <p>Price: {this.props.price}</p>
                    <p>MFG: {this.props.mfg}</p>
                    <p>Number in stock: {this.props.inStock}</p>
                </li>
            </>
        )

    }
}

export default Widget
