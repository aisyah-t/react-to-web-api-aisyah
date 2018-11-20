import React from 'react'

import AddWidget from './AddWidget'
import WidgetList from './WidgetList'
import WidgetDetails from './WidgetDetails'
import ErrorMessage from './ErrorMessage'

import { getWidgets } from '../api'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      error: null,
      widgets: [],
      activeWidget: null,
      detailsVisible: false,
      addWidgetVisible: false
    }

    this.refreshList = this.refreshList.bind(this)
    this.showDetails = this.showDetails.bind(this)
    this.hideDetails = this.hideDetails.bind(this)
    this.showAddWidget = this.showAddWidget.bind(this)
  }

  componentDidMount () {
    this.refreshList()
  }

  refreshList () {
    this.setState({
      addWidgetVisible: false
    })
    getWidgets ()
      .then(widgets => {
        this.setState({
          widgets: widgets || []
        })
      })
    .catch(err => {
      this.setState({
        error: err.message
      })
    })
  }

  showAddWidget () {
    this.setState({
      addWidgetVisible: true
    })
  }

  showDetails (widget) {
    this.setState({
      activeWidget: widget,
      detailsVisible: true
    })
  }

  hideDetails () {
    this.setState({
      detailsVisible: false
    })
  }

  render() {
    return (
      <div>
        <ErrorMessage error={this.state.error} />

        <h1>Widgets FTW!</h1>

        <WidgetList
          showDetails={this.showDetails}
          widgets={this.state.widgets} />

        <p>
          <a id='show-widget-link' href='#'
            onClick={this.showAddWidget}>Add widget</a>
        </p>

        {this.state.addWidgetVisible && <AddWidget
          refreshList={this.refreshList} />}

        {this.state.detailsVisible && <WidgetDetails
          isVisible={this.state.detailsVisible}
          hideDetails={this.hideDetails}
          widget={this.state.activeWidget} />}
      </div>
    )
  }
}
