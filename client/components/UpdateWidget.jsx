import React from 'react'

class UpdateWidget extends React.Component {
  state = {
    widget: {}
  }

  // Up to this component. need to get selecting the widget setting the default state for the field values (and maybe/probably the widget in state), then when updating the values in the fields have them update the state (handlechange). Then when submit button pressed, that should fire off the update call

  // also add isn't working

  handleSelectChange = (e) => {
    console.log()
  }


  handleChange = (e) => {
    this.setState({
      widget: {
        ...this.state.widget,
        [e.target.name]: e.target.value
      }
    }, () => console.log(this.state.widget))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.updateWidget(this.state.widget)
    this.setState({
      widget: {}
    })
  }

  render() {
    return (
      <>
        <label>Pick a widget to update:
        <select name="selectWidget" value={this.state.value} onChange={this.handleSelectChange}>
            {this.props.widgets.map((widget) => {
              return <option key={`select_${widget.id}`} value={widget.id}>{widget.name}</option>
            })
            }
          </select>
        </label>

        <form onSubmit={this.handleSubmit}>
          <label >Name:
        <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <label >Stock level:
        <input type="text" name="inStock" onChange={this.handleChange} />
          </label>
          <label >MFG:
        <input type="text" name="mfg" onChange={this.handleChange} />
          </label>
          <label >Price:
        <input type="text" name="price" onChange={this.handleChange} />
          </label>
          <label >Rating:
        <input type="text" name="rating" onChange={this.handleChange} />
          </label>

          <button type='submit'>Update</button>
        </form>
      </>
    )
  }
}


export default UpdateWidget