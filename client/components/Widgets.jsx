import React from 'react'


class Widgets extends React.Component {

    render() {
        // console.log(this.props)
        return (
            <React.Fragment>
                {this.props.widgets.map(widget => {
                    return (
                        <main key={widget.id}>
                            <h4>{widget.name}</h4>
                            <ul>
                                <li>Price: {widget.price}</li>
                                <li>Manufacturing Group: {widget.mfg}</li>
                                <li>In stock:   {widget.inStock}</li>
                                <li>Rating: {widget.rating}</li>
                            </ul>
                        </main>
                    )
                })}
            </React.Fragment>
        )
    }
}

export default Widgets