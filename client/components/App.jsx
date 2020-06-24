import React from 'react'
import { getWidgets } from "../api"
import Widget from "./Widget"
import Add from "./Add"
import request from 'superagent'

class App extends React.Component {
  state = {
    Widgets: [],
    editmode: false
  }

  componentDidMount() {
    console.log("mounted")
    getWidgets().then(data => {
      console.log("got Widgets")
      this.setState({
        Widgets: data,
        quote: "none"
      })
    })

  }
  edit = () => {
    this.setState({
      editmode: !this.state.editmode
    })
  }
  externalApi = () => {
    request
    .get('https://api.kanye.rest')
    .then(res => {
        this.setState({
          quote: res.body.quote
        })
      })
  }
  componentDidMount() {
    this.externalApi()
  }
  render() {
    console.log(this.state.Widgets)
   
    console.log("renderd")
    return (
      <div>
        <h1>Widgets FTW!</h1>
        <ul>
        { 
         
        this.state.Widgets.map((elem, i) => {return <Widget 
          key={i} name={elem.name} price={elem.price} mfg={elem.mfg} instock={elem.inStock} id={elem.id}
          />})
        }
           <button onClick={this.edit}>Edit page</button>
           {
          this.state.editmode && <Add/> 
        }
<br></br>

        {
          this.state.quote
        }
        </ul>
      </div>
    )
  }
}

export default App
