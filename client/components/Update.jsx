import React from 'react'
import { render } from 'enzyme'

//same path pattern as Delete.jsx
function Update (props) {
    function handleSubmit() {
        props.updateWidget(props.id)
    }

    //need to write handleSubmit
    //need to hide edit until clicked

    return (
        <div class="update">
        <h3>Create your own Widget!</h3>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>

                <label>Price:</label>
                <input type="text" name="price" value={this.state.price} onChange={this.handleChange}/>

                <label>MFG:</label>
                <input type="text" name="mfg" value={this.state.mfg} onChange={this.handleChange}/>

                <label>Stock:</label>
                <input type="text" name="inStock" value={this.state.inStock} onChange={this.handleChange}/>

                <label>Rating:</label>
                <input type="text" name="rating" value={this.state.rating} onChange={this.handleChange}/>

                <button type="submit">Edit</button>
            </form>
        </div>
    )
    
}

export default Update