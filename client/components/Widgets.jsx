import React from 'react'


class Widgets extends React.Component {

    render() {
        // console.log(this.props)
        return (
            <div>
                {this.props.widgets.map(widget => {
                    return (
                        <>
                            <h4>Name: {widget.name}</h4>
                            <p>Price: {widget.price}</p>
                            <p>Manufacturing Group: {widget.mfg}</p>
                            <p>In stock:{widget.inStock}</p>
                            <p>Rating:{widget.rating}</p>
                        </>
                    )
                })}
            </div>
        )
    }
}

export default Widgets