import React from 'react'
import {Link} from 'react-router-dom'

class Widgets extends React.Component {
    state = {
        updateButton:false,
    }

    handleUpdateClick = () => {
        if (this.state.updateButton === false) {
        this.setState({
            updateButton: true
        })
        } else if (this.state.updateButton === true) {
        this.setState({
            updateButton: false
        })
        }
    }

    render() {
        return (
        
            <section>
                    {this.props.widgets.map(widget => {
                    return (<article key={widget.id} id={widget.id}> 
                            <p className="bold_text">{widget.name}</p>
                            <p>{widget.mfg}</p>
                            <p>In stock: {widget.inStock}.</p>
                            <p>Price: ${widget.price}.</p> 
                            <p>User Rating: {widget.rating}</p>
                    <Link to="/edit/:id"><input type="submit" onClick={this.handleEditClick}value ="Edit Widget"/></Link>
                    </article>)
                })}
            </section>
        )
    }
}

export default Widgets