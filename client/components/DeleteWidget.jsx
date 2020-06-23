import React from 'react'

class DelWidget extends React.Component {
  state = {
    widgetId: null
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log("deletey clicky")
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <select>

        </select>
        <button type='submit'>Delete</button>
      </form>
    )
  }
}

export default DelWidget