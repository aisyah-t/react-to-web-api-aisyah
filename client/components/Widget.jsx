import React from 'react'
import {deleteWidgetApiFunction} from '../api'






class Widget extends React.Component {
  
  

  handleUpdate = event => {
    console.log('button being clicked!')
    this.props.widgetToUpdate(this.props.data)

  }


  
  deleteWidget = event => {
    deleteWidgetApiFunction(this.props.data)
  }
  
  
  render() {
    const data = this.props.data
    return (
      <>
      <h2>{data.name}</h2>
      <p>Price: {data.price}</p>
      <p>MFG: {data.mfg}</p>
      <p>Remaining Stock: {data.inStock}</p>
      <button onClick = {this.handleUpdate}> Update </button>
      <button onClick = {this.deleteWidget}> Delete  </button>
      </>
    )
      
  }
}

export default Widget