import React from 'react'

import AddWidget from './AddWidget'
import EditWidget from './EditWidget'
import WidgetList from './WidgetList'
import WidgetDetails from './WidgetDetails'
import ErrorMessage from './ErrorMessage'

import {getWidgets, deleteWidget, updateWidget} from '../api'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      error: null,
      widgets: [],
      activeWidget: null,
      detailsVisible: false,
      addWidgetVisible: false,
      updateFormVisible: false
    }

    this.refreshList = this.refreshList.bind(this)
    this.showDetails = this.showDetails.bind(this)
    this.hideDetails = this.hideDetails.bind(this)
    this.renderWidgets = this.renderWidgets.bind(this)
    this.showAddWidget = this.showAddWidget.bind(this)
    this.deleteWidget = this.deleteWidget.bind(this)
    this.editWidget = this.editWidget.bind(this)
  }

  componentDidMount () {
    this.refreshList()
  }

  renderWidgets (err, widgets) {
    this.setState({
      error: err,
      widgets: widgets || []
    })
  }

  refreshList (err) {
    this.setState({
      error: err,
      addWidgetVisible: false
    })
    getWidgets(this.renderWidgets)
  }

  showAddWidget () {
    this.setState({
      addWidgetVisible: true
    })
  }

  showDetails (widget) {
    this.setState({
      activeWidget: widget,
      detailsVisible: true,
      addWidgetVisible: false,
      updateFormVisible: false
    })
  }

  hideDetails () {
    this.setState({
      detailsVisible: false
    })
  }

  deleteWidget (widget) {
    this.setState({
      activeWidget: null,
      detailsVisible: false
    })
    deleteWidget(widget, this.refreshList)
  }

  editWidget (widget) {
    this.setState({
      activeWidget: widget,
      detailsVisible: false,
      addWidgetVisible: false,
      updateFormVisible: true
    })
    updateWidget(widget, this.refreshList)
  }

  render () {
    return (
      <div>
        <ErrorMessage error={this.state.error} />

        <h1>Widgets FTW!</h1>

        <WidgetList
          widgets={this.state.widgets}
          showDetails={this.showDetails}
          editWidget={this.editWidget}
          deleteWidget={this.deleteWidget}
        />

        <p>
          <a id='show-widget-link' href='#'
            onClick={this.showAddWidget}>Add widget</a>
        </p>

        <p>
          <a id='refresh-widget-link' href='#'
            onClick={this.refreshList}>Refresh list</a>
        </p>

        {this.state.addWidgetVisible && <AddWidget
          finishAdd={this.refreshList} />}

        {this.state.updateFormVisible && <EditWidget
          widget={this.state.activeWidget}
          editWidget={this.editWidget}
          showDetails={this.showDetails}
          finishAdd={this.refreshList} />}

        {this.state.detailsVisible && <WidgetDetails
          widget={this.state.activeWidget}
          isVisible={this.state.detailsVisible}
          hideDetails={this.hideDetails}
        />}
      </div>
    )
  }
}
