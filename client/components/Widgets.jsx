import React from 'react'

class Widgets extends React.Component {
    render() {
        return (
            <ul>   
                {this.props.widgets.map((widget, i) => {
                    return <li key={i}>{widget.name}</li>
                })}
            </ul>
        )
    }
}

export default Widgets