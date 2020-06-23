import React from 'react'

class DeleteWidget extends React.Component {

  handleDelClick = (e) => {
    e.preventDefault()

    let id = e.target.id

    const widgetId = this.props.widgets.find(widget => id == widget.id)
    console.log(widgetId)

    this.props.removeWidget(widgetId)
  }

  render() {
    return (
      <div>
        <h3>Remove Widgets :(</h3>
        <ul>
          {this.props.widgets.map(widget => {
            return <li onClick={this.handleDelClick} key={widget.id}>
              <a id={widget.id}href="">{widget.name}</a>
            </li>
          })}
        </ul>
      </div>
    )
  }
}


export default DeleteWidget