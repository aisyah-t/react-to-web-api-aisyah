import React from 'react'
import {updateWidgetApiFunction} from '../api'




export function widgetToUpdate (widgetToUpdate) {
    console.log('this is data in update widget -- ' , widgetToUpdate)
    return widgetToUpdate
  }

class UpdateWidget extends React.Component {

    state = {
      originalName: '',
      newName: '',
        price: '',
        mfg: '',
        inStock: '',
        rating: '',
      }
    
    UpdateWidget = event => {
        event.preventDefault()
        updateWidgetApiFunction(this.state)
    }

    handleChange = event => {
    
        this.setState({
          [event.target.name]: event.target.value
        })
      }
    
    render () {
        return (
            <div id="updateFormStyle" >
            <h2>Update A Widget</h2>
            <form className = 'formDiv'  onSubmit={this.UpdateWidget}>
            
            <label >Original Name</label>
            <input type="text" name="originalName" onChange={this.handleChange} defaultValue='--- Enter Original Widget Name. Ensure Spelling Correct! ---' />

            <label > New Name</label>
            <input type="text" name="newName" onChange={this.handleChange} />


{/* Trying to get updat button to auto-populate form */}
            {/* defaultValue={widgetToUpdate} */}
    
            <label >Price</label>
            <input type="text" name="price" onChange={this.handleChange}/>
    
            <label >MFG</label>
            <input type="text" name="mfg" onChange={this.handleChange} />
    
            <label >Remaining Stock</label>
            <input type="text" name="inStock" onChange={this.handleChange} />
    
            <label >Rating</label>
            <input type="text" name="rating" onChange={this.handleChange}/>
    
            <input type="submit" name="submit"/>
    
          </form>
          </div>
        )
    } 
    
}

export default UpdateWidget