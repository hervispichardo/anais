import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  padding: ${({ button }) => (button ? '4px 0px' : '10px 0px')};
  text-align: center;
  margin: ${({ margin }) => (`${margin}px 0px`)};
`;


const fxDot = keyframes`
  50% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border: 2px solid ${({ dark, color }) => (dark ? '#fff' : color)};
  background: ${({ dark, color }) => (dark ? '#fff' : color)};
  border-radius: 50%;
  float: left;
  margin: 0 5px;
  -webkit-transform: scale(0);
  transform: scale(0);
  -webkit-animation: ${fxDot} 1100ms ease infinite 0ms;
  animation: ${fxDot} 1100ms ease infinite 0ms;

  &:nth-child(1n) {
    -webkit-animation: ${fxDot} 1100ms ease infinite ${({ idx }) => 200 * (idx - 1)}ms;
    animation: ${fxDot} 1100ms ease infinite ${({ idx }) => 200 * (idx - 1)}ms;
  }
`;

const Center = styled.div`
  width: ${({ length }) => length * 28}px;
  display: inline-block;
`;


export {
  Container,
  Center,
  Dot,
}
