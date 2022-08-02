import styled from 'styled-components';

export const Container = styled.div`
h1{
    font-family: Poppins;
font-size: 32px;
font-weight: 500;
line-height: 24px;
letter-spacing: 0em;
text-align: center;

}


  button{
    margin-top: 32px;
  }
`;

export const Content = styled.div`
height: 100vh;

display: flex;
justify-content: space-around;
align-items: center;
flex-wrap:wrap;
`
export const Article = styled.div`
  

`
export const Main = styled.div`

height:37.5rem;
`

export const Section = styled.section`
    display: flex;
    align-items: center;
    img{
        margin-right: 19.01px;
    }
`

export const Form = styled.form`
    border-radius: 16px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content:space-between;
    
    height:37.5rem;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_CREATE};
    >h1{
      text-align: center;
      width:100%;
      margin-top: 4rem;
      
    }

    h4{
      margin-bottom:8px;
      margin-left:4rem;
      font-family: Roboto;
      font-size: 16px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0em;
      text-align: left;
      margin-bottom: 8px;
    }

    input{
      margin-right: 4rem;
        margin-left:4rem;
        width: 21.75rem;
        height: 3rem;
        border: 1px solid ${({theme})=>theme.COLORS.BORDER_INPUT};
        border-radius: 5px;
        background: transparent;
        padding-left: 8px;
        color: ${({theme}) => theme.COLORS.WHITE};
        font-family: Roboto;
        font-size: 16px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: left;

    }

    button{
      margin-left:4rem;
      margin-right:4rem;
      font-family: Poppins;
      font-size: 14px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: center;
    }

    >p{
      width:100%;
 
      text-align: center;
     margin-bottom: 4rem;
     >a{
      text-decoration: none;
      color: ${({theme}) => theme.COLORS.WHITE} ;
      font-family: Poppins;
      font-size: 14px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: center;
     }
    }

`
