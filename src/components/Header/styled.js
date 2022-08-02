import styled from 'styled-components';

export const Container = styled.header`
margin: 0 auto;
padding: 0 auto;
  max-width: 100%;
  height: 100%;
  padding: 10px;
  background-color: ${({theme}) =>theme.COLORS.BACKGROUND_INP_HEADER};
  display: flex;
 justify-content: space-around;
 flex-wrap: wrap;
 align-items: center;
 >svg{
  height:2rem;
  width:3rem;
 
}
gap:12px;

button{
    width: 13.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    img{
        margin-right: 12px;
    }
    >svg{
      margin-left: 5px;
      width:2rem;
      height:3rem;
    }
}
font-family: Roboto;
font-size: 16px;
font-weight: 400;
line-height: 26px;

text-align: center;
`;

export const Logo = styled.div`

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

`
export const Label = styled.div`
display:flex;

flex-direction: row;

  input{
    padding-left: 12px;
    width: 21.5rem;
    height: 3rem;
    border: 1px solid ${({theme}) =>theme.COLORS.BORDER_INPUT};
    background-color: ${({theme}) =>theme.COLORS.BACKGROUND_INP_HEADER};
    border-radius: 8px;
    color:  ${({theme}) =>theme.COLORS.BORDER_INPUT};
    display:flex;
  
  }

`

export const User = styled.div`
display: flex;


`
export const Favorites = styled.div`

display:flex;
align-items: center;
`