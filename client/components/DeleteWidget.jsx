import React from 'react'
// import { deleteWidget } from '../api'

class DeleteWidget extends React.Component {

    //Display list of widget names using getWidget
    //When user clicks on a widget name run deleteWidget function

    render() {
        //console.log(this.props)
        return (
            <React.Fragment>
                <h1>Delete a widget</h1>
                {this.props.widgets.map( (widget, i) => {
                    return (
                        <div key={i}>
                            <ul>
                                <li>
                                    <a href='' id={widget.id}>{widget.name}</a>
                                </li>
                            </ul>
                        </div>
                    )
                })}
            </React.Fragment>
        )
    }
}

export default DeleteWidget

