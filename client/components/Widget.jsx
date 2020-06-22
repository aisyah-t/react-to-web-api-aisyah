import React from 'react'

function Widget(props) {
  console.log(props.widgets);

  return props.widgets.map(widget => {
  return <li>name: {widget.name} price: {widget.price}</li>
  })
  
}

export default Widget