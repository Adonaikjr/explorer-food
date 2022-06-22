import styled from 'styled-components';

export const Container = styled.button`
  background: ${({theme}) => theme.COLORS.BTN};
  border-radius: 3px;
  border: none;
  color: ${({theme}) => theme.COLORS.WHITE};
  width: 21.75rem;
  height: 3rem;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;

`;
