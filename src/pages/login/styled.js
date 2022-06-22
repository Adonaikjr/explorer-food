import styled from 'styled-components';

export const Container = styled.div`

height: 98vh;
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
h1{
    font-family: Poppins;
font-size: 32px;
font-weight: 500;
line-height: 24px;
letter-spacing: 0em;
text-align: center;

}
form{
    display: flex;
    flex-direction: column;
    gap: 14px;
    input{
        width: 21.75rem;
        height: 3rem;
        border: 1px solid ${({theme})=>theme.COLORS.BORDER_INPUT};
        border-radius: 5px;
        background: transparent;
        padding-left: 8px;
        color: ${({theme}) => theme.COLORS.WHITE};
    }
}
  div{
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    border-radius: 1rem;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_CREATE};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 29.75rem;
    height: 37.5rem;
    
  }
  section{
    display: flex;
    align-items: center;
    img{
        margin-right: 19.01px;
    }
  }
  button{
    margin-top: 32px;
  }
`;
