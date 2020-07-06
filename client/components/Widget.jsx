import React from "react"
import { delWidget } from "../api"

class Widget extends React.Component {
  handleClick = (event, widget) => {
    event.preventDefault()
    delWidget(widget.id).then((res) => console.log("works"))
  }
  render() {
    return this.props.widgets.map((widget) => {
      return (
        <li>
          name: {widget.name} price: {widget.price}
          <form>
            <input type="submit" value="delete" onClick={(event) => this.handleClick(event, widget)} />
          </form>
        </li>
      )
    })
  }
}

export default Widget;
