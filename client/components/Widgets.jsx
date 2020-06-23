import React from 'react'


class Widgets extends React.Component {

    render() {
        // console.log(this.props)
        return (
            <div>
                {this.props.widgets.map(widget => {
                    return (
                        <main>
                            <h4>{widget.name}</h4>
                            <ul>
                                <li>Price: {widget.price}</li>
                                <li>Manufacturing Group: {widget.mfg}</li>
                                <li>In stock:{widget.inStock}</li>
                                <li>Rating:{widget.rating}</li>
                            </ul>
                        </main>
                    )
                })}
            </div>
        )
    }
}

export default Widgets