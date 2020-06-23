import React from 'react'

const Widget = (props) => {

    return (
      <div className='widget' >
        <h1>Widget</h1>
        <h3>{props.widget.name}</h3>
        <h3>{props.widget.price}</h3>
        <p>In stock: {props.widget.inStock}</p>
        <p>MFG: {props.widget.mfg}</p>
        <p>Rating: {props.widget.rating}</p>
        <button onClick={props.handleDeleteClick} id={props.widget.id}>Delete</button>
      </div>
    )
}

export default Widget