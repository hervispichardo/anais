import styled from 'styled-components';


const Ripple = styled.div`
  border: 0px !important;
  ${({ ripple }) => ripple && `
    border-radius: 50%;
    cursor: pointer;
    padding: ${ ({ padding }) => padding || '5px'};
    display: inline-block;
    background-position: center;
    transition: background 0.8s;
    &:before {
      border: none !important;
    }
    &:hover {
      background: transparent radial-gradient(circle, transparent 1%, rgba(0, 0, 0, 0.1) 1%) center/15000%;
    }
    &:active {
      background-color: rgba(0, 0, 0, 0.2);
      background-size: 100%;
      transition: background 0s;
      &:after {
        background: #000;
        content: '';
        height: 20px;
        width: 20px;
      }
    }
  `}

`;


export default Ripple

export {
  Ripple
 }