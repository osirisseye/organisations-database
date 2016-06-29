import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import searchBar from '../../components/search_bar'

function setup() {
  const props = [
    {
      id: 1,
      name: 'Javascript 101',
      selected: false
    },
    {
      id: 2,
      name: 'CodeHub Bristol',
      selected: false
    }
  ]
  const component = shallow(
    <searchBar organisations={props} />
  )

  return {
    component: component,
  }
}



