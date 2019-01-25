import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, mount } from 'enzyme'
import Icon, { Icons } from './Icon'

it('render correctly Icon component', () => {
  const iconComponent = renderer.create(
    <Icon
      color={'#000'}
      type={Icons.calendar}
    />).toJSON();
  expect(iconComponent).toMatchSnapshot();
});

