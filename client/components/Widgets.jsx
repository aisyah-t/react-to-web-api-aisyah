import React from 'react'

class Widgets extends React.Component {
    render() {
        return (
            <ul>   
                {this.props.widgets.map((widget) => {
                    return <li key={widget.id} id={widget.id}>{widget.name}, {widget.mfg} In stock: {widget.inStock}. Price: ${widget.price}. User Rating: {widget.rating}</li>
                })}
            </ul>
        )
    }
}

export default Widgets