import React from 'react'
import { getWidgets } from "../api"
import Widgets from './Widgets'
import AddWidget from './Add'

class App extends React.Component {
  state = {
    widgets: []
  }

  componentDidMount() {
    console.log('component did mount')
    getWidgets()
      .then(widget => {
        this.setState({
          widgets: widget,
        })
      })
  }

  addWidget = widget => {
    const widgets = this.state.widgets
    widgets.push(widget)
    this.setState({widgets})
  }

  updateWidget = () => {
    getWidgets()
      .then(widget => {
        this.setState({
          widgets: widget,
        })
      })
  }

  removeWidget = widget => {
    deleteWidget(widget)
    .then(widgets => 
    this.setState({widgets}))
  }
  
  render () {
    console.log('render')
    return (
    <div>
      <h1>Widgets FTW!</h1>
      {this.state.widgets.map(widget => {
        return <Widget key={widget.id} data={widget} removeWidget={this.removeWidget} updateWidget={this.updateWidget}/>
      })}
      <Form addWidget={this.addWidget}/>
    </div>
    )
  }
}


// class App extends React.Component {
//   state = {
//     Widgets: []

//   }

//   componentDidMount() {
//     console.log("mounted")
//     getWidgets().then(data => {
//       console.log("got the Widgets!!!!!")
//       this.setState({
//         Widgets: data,
//         addWidgetVisible: false
//       })

//     })
//   }

//   showAddWidget() {
//     this.setState({
//       addWidgetVisible: true
//     })
//   }

//   render() {
//     console.log(this.state.Widgets)
//     this.state.Widgets.map(element => { console.log(element) })
//     console.log("rendered!!!!!!")
//     return (
//       <div>
//         <h1> Widgets ftw</h1>
//           <WidgetList
//             Widgets={this.state.widgets}
//           />
//         <p>
//           widgets:{this.state.Widgets}
//         </p>

//       </div> )}}

export default App


// // function saveWidget(widget, db = connection) {
// //   return db('widgets')
// //     .insert({
// //       name: widget.name,
// //       price: widget.price,
// //       mfg: widget.mfg,
// //       inStock: widget.inStock
// //   })
// // }
// // *