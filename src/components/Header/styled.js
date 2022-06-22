import styled from 'styled-components';

export const Container = styled.header`
margin: 0 auto;
padding: 0 auto;
  max-width: 85.5rem;
  height: 6.5rem;
  padding: 10px;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${({theme}) =>theme.COLORS.BACKGROUND_INP_HEADER};
  border-radius: 8px;
  margin-top: 8px;

  input{
    padding-left: 12px;
    width: 21.5rem;
    height: 3rem;
    border: 1px solid ${({theme}) =>theme.COLORS.BORDER_INPUT};
    background-color: ${({theme}) =>theme.COLORS.BACKGROUND_INP_HEADER};
    border-radius: 8px;
    color:  ${({theme}) =>theme.COLORS.BORDER_INPUT};
  }
button{
    width: 13.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    img{
        margin-right: 12px;
    }
}

h2{
    font-family: Roboto;
font-size: 25px;
font-weight: 700;
line-height: 29px;
letter-spacing: 0em;
text-align: left;

    display: flex;
    justify-content: center;
    align-items: center;
     img{
        margin-right: 16px;
     }
}

font-family: Roboto;
font-size: 16px;
font-weight: 400;
line-height: 26px;

text-align: center;
label{
    display: flex;
    flex-direction: row;
    align-items: center;
    >img{
      margin-left:50px;
      border: solid ${({theme}) =>theme.COLORS.BACKGROUND_INP_HEADER};
      padding: 11px;
      border-radius: 0px 1px 1px 8px;
      margin-right: -5px;
    }
    
}
`;
