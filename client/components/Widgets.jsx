import React from 'react'


import Edit from './Edit'

class Widgets extends React.Component {
    state = {
        currentWidget: null,
        updateButton: false,
    }

    handleUpdateClick = (widget) => {
        if (this.state.updateButton === false) {
            this.setState({
                updateButton: true,
                currentWidget:widget
            })
        } else if (this.state.updateButton === true) {
            this.setState({
                updateButton: false,
                currentWidget:null
            })
        }
    }

    render() {
        return (
            <div>
                <section className="container">
                    {this.props.widgets.map(widget => {
                        return (<article className="item" key={widget.id} id={widget.id}>
                            <p className="bold_text" >{widget.name}</p>
                            <p>{widget.mfg}</p>
                            <p>In stock: {widget.inStock}.</p>
                            <p>Price: ${widget.price}.</p>
                            <p>User Rating: {widget.rating}</p>
                            <button onClick={()=>this.handleUpdateClick(widget)}>Edit</button>
                        </article>)
                    })}
                </section>
                {this.state.updateButton && <Edit widget={this.state.currentWidget} updateWidget={this.props.updateWidget}/>}
            </div>
        )
    }
}

export default Widgets