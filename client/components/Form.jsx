import React from "react";
import { saveWidget } from "../api";

class Form extends React.Component {
  state = {
    name: " ",
    price: " ",
    mfg: " ",
    inStock: " ",
    rating: " ",
  };

  handleSubmit = (event) => {
    event.preventDefault();

    saveWidget(this.state).then((newWidget) => {
      this.props.saveWidget(newWidget);
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="create">
        <h3>Create your own Widget!</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <label>Price:</label>
          <input
            type="text"
            name="price"
            value={this.state.price}
            onChange={this.handleChange}
          />

          <label>MFG:</label>
          <input
            type="text"
            name="mfg"
            value={this.state.mfg}
            onChange={this.handleChange}
          />

          <label>Stock:</label>
          <input
            type="text"
            name="inStock"
            value={this.state.inStock}
            onChange={this.handleChange}
          />

          <label>Rating:</label>
          <input
            type="text"
            name="rating"
            value={this.state.rating}
            onChange={this.handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
