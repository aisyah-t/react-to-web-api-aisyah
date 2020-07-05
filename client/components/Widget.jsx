import React from 'react'
import {widgetToUpdate} from './Update Widget'






class Widget extends React.Component {
  
  

  handleButtonClick = event => {
    console.log('button being clicked!')
    widgetToUpdate('billy')

  }
  
  
  
  render() {
    const data = this.props.data
    return (
      <>
      <h2>{data.name}</h2>
      <p>Price: {data.price}</p>
      <p>MFG: {data.mfg}</p>
      <p>Remaining Stock: {data.inStock}</p>
      {/* <button onClick = {this.handleButtonClick} >update</button> */}
      </>
    )
      
  }
}

export default Widget