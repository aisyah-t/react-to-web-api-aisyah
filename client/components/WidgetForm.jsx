import React from 'react'

class WidgetForm extends React.Component{
    state = {
        data:{title:"", mfg:"", price:0}
    }
    
    handleSubmit = event => {
        event.preventDefault()
        console.log('submit', this.state)
        this.props.getData(this.state.data)
    }
    handleChange = event => {
        console.log('change!', event.target.name)    
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <fieldset>
                <label>Title </label>
                <input
                type='text'
                name='title'
                onChange={this.handleChange}
                />

                <label>price </label>
                <input
                type='text'
                name='price'
                onChange={this.handleChange}
                />

                <label>mfg </label>
                <input
                type='text'
                name='mfg'
                onChange={this.handleChange}
                />
                
                <input type='submit' />
            </fieldset>
            </form>
        )
    }
}

export default WidgetForm