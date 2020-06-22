import React from 'react'

import App from '../../client/components/App'
import { shallow } from 'enzyme'

App.prototype.componentDidMount = () => {}

test('Shows heading', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('h1').text()).toBe('Widgets FTW!')
})

// Some tests have already been written for you.
// See if you can get your components passing them...

/*
test('Renders widget list', () => {
  const wrapper = mount(<App />)
  expect(wrapper.find('.widget-list').exists()).toBeTruthy()
})
*/

/*
test('Renders add form when clicked', () => {
  const wrapper = mount(<App />)
  expect(wrapper.find('.add-widget').exists()).toBeFalsy()
  wrapper.find('#show-widget-link').simulate('click')
  expect(wrapper.find('.add-widget').exists()).toBeTruthy()
})
*/


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
