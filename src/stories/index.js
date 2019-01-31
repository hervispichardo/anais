import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, object } from '@storybook/addon-knobs'

import Icon from '../components/Icon'
import Loading from '../components/Loading'


storiesOf('Icon', module)
  .addDecorator(withKnobs({ escapeHTML: false }))
  .add('With Props', () =>
    <Icon
      size={number('Size (em): ', 3, {}, 'Type')}
      ripple={boolean('Ripple effect on press: ', true, 'Type')}
      color={text('Color', '#000', 'Colors')}
      type={text('Type icon', 'calendar', 'Type')}
      badgeColor={text('Badge color', '#08798c', 'Colors')}
      badge={number('Number Badge: ', 3, {}, 'Type')}/>)

storiesOf('Loading', module)
  .addDecorator(withKnobs({ escapeHTML: false }))
  .add('With Props', () =>
    <Loading
      color={text('Color', '#08798c')}
      length={number('Dots: ', 5, {})}/>)

