import React from "react"

const Widget = props => {
    console.log("Is this working? Object passed through props:", props.widgetObject)
    return(
    <li>{props.widgetObject.name} {props.widgetObject.price} {props.widgetObject.mfg}</li>
    )
}

export default Widget