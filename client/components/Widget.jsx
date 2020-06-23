import React from 'react'
import { getWidgets } from "../api"
import { deletewid } from '../api'

class Widget extends React.Component {
    state = {
      test: false
      }
      
      handleclick = () => {
          deletewid(this.props.id)
          .then(() => {
              console.log("done! :)")
          })
          
      }
      
      componentDidMount() {
        console.log("mounted widget peice")
       
      }
      update = () => {
          this.setState({
              test: !this.state.test
          })
      }
      render() {
        return (
        <li>
            {this.props.id} {this.props.name} {this.props.price} {this.props.mfg} {this.props.instock}
         <button>edit</button>
         <button onClick={this.handleclick}>remove</button>
           </li>
           

        )
      }
}

export default Widget