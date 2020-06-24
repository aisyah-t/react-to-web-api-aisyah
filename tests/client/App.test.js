import React from 'react'

import App from '../../client/components/App'
import { shallow, mount } from 'enzyme'

App.prototype.componentDidMount = () => {}

test('Shows Header', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('h1').text()).toBe('Widgets FTW!')
})

test('Tests NewWidget does not show when unclicked button', () => {
  const wrapper = shallow(<App />)
  wrapper.setState({buttonClicked: false})
  // console.log(wrapper.debug())
  expect(wrapper.find('NewWidget').exists()).toBeFalsy()
})

test('Tests NewWidget does show when button clicked', () => {
  const wrapper = shallow(<App />)
  wrapper.setState({buttonClicked: true})
  // console.log(wrapper.debug())
  expect(wrapper.find('NewWidget').exists()).toBeTruthy()
})

// Some tests have already been written for you.
// See if you can get your components passing them...


test('Renders widget list', () => {
  const wrapper = mount(<App />)
  // console.log(wrapper.debug())
  expect(wrapper.find('.widget-list').exists()).toBeTruthy()
})


test('Renders add form when clicked', () => {
  const wrapper = mount(<App />)
  // console.log(wrapper.debug())
  expect(wrapper.find('.add-widget').exists()).toBeFalsy()
  //  wrapper.setState({buttonClicked: true})
  wrapper.find('#new-widget-link').simulate('click')
  // console.log(wrapper.debug())
  expect(wrapper.find('.add-widget').exists()).toBeTruthy()
})


/*
test('Shows widget details', () => {
  const widgets = [{name: 'red', id: 1}, {name: 'blue', id: 2}]
  const wrapper = mount(<App />)
  wrapper.setState({widgets})
  expect(wrapper.find('.widget-details').exists()).toBeFalsy()

  wrapper.instance().showDetails(widgets[0])
  wrapper.mount()

  expect(wrapper.find('.widget-details').exists()).toBeTruthy()
})
*/
