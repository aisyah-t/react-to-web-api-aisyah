import React from 'react'
import {updateWidgetApiFunction} from '../api'



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
        console.log(this.props.data)
        updateWidgetApiFunction(this.state)

    }

    handleChange = event => {
    
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    componentWillReceiveProps(nextProps) {
      
      if(nextProps.data !== this.props.data) {

        this.setState({
          originalName: nextProps.data.name,
          price: nextProps.data.price,
          mfg: nextProps.data.mfg,
          inStock: nextProps.data.inStock,
          rating: nextProps.data.rating,
        })
      }
    }

    render () {
      console.log(this.props)
        return (
          
            <div id="updateFormStyle" >
            <h2>Update A Widget</h2>
            <form className = 'formDiv'  onSubmit={this.UpdateWidget}>
            
            <label >Original Name</label>
            <input type="text" name="originalName" onChange={this.handleChange} defaultValue={this.props.data.name}  />

            <label > New Name</label>
            <input type="text" name="newName" onChange={this.handleChange}  />


{/* Trying to get updat button to auto-populate form */}
            {/* defaultValue={widgetToUpdate} */}
    
            <label >Price</label>
            <input type="text" name="price" onChange={this.handleChange} defaultValue={this.props.data.price}/>
    
            <label >MFG</label>
            <input type="text" name="mfg" onChange={this.handleChange} defaultValue={this.props.data.mfg} />
    
            <label >Remaining Stock</label>
            <input type="text" name="inStock" onChange={this.handleChange} defaultValue={this.props.data.inStock} />
    
            <label >Rating</label>
            <input type="text" name="rating" onChange={this.handleChange}/>
    
            <input type="submit" name="submit"/>
    
          </form>
          </div>
        )
    } 
    
}

export default UpdateWidget