import styled from 'styled-components';
import lock from '../assets/lock-alt-open.svg';

interface MyProps{
  lock?: boolean
}

export const TextInput = styled.input<MyProps>`
  width: 421px;
  height: 40px;
  left: 509px;
  top: 304px;

  
  background: ${ p => p.lock ? `url(${lock}) no-repeat, #FFFFFF` : p.theme.background }  ;

  background-position: right;
  /* background-position-x: 50px; */
  
  /* padding-left:30px; */


  border: ${p => `1px solid ${p.theme.border}`}; 
  box-sizing: border-box;
  border-radius: 10px;
`;

TextInput.defaultProps = {
  lock: false
};

// default 