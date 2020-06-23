import React from "react"

const Widget = props => {
    return(
    <li>{props.widgetObject.name} {props.widgetObject.price} {props.widgetObject.mfg}</li>
    )
}

export default Widget