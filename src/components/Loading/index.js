import React from 'react'
import PropTypes from 'prop-types'
import * as R from 'ramda';
import { Container, Center, Dot } from './style'

const maxLength = (len, max = 5) => ((len > max) ? max : len);

const Loading = ({ color, length, dark, button, margin }) => (
  <Container
    button={button}
    margin={margin}>
    <Center length={length}>
      {
        R.times(dot =>
        <Dot
          dark={dark}
          color={color}
          idx={dot}
          key={dot} />
        )(maxLength(length))
      }
    </Center>
  </Container>
)

Loading.defaultProps = {
  length: 5,
  dark: false,
  button: false,
  margin: 0,
  color: '#08798c'
}

Loading.propTypes = {
  length: PropTypes.number,
  dark: PropTypes.boolean,
  button: PropTypes.boolean,
  margin: PropTypes.number,
  color: PropTypes.string,
};

export default Loading
