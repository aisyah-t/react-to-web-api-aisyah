import React from 'react'

class Widget extends React.Component {
  render() {
    console.log(this.props)
    const data = this.props.data
    return (
      <>
      <h2>{data.name}</h2>
      <p>Price: {data.price}</p>
      <p>MFG: {data.mfg}</p>
      <p>Remaining Stock: {data.inStock}</p>
      </>
    )
      
  }
}

export default Widget