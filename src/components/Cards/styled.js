import styled from 'styled-components';

export const Container = styled.div`
  width: 18.75rem;
  margin: 0 auto;
  background: ${({theme}) => theme.COLORS.BACKGROUND_MENU};
  border: 1px solid ${({theme}) => theme.COLORS.BORDER_CARD};
  border-radius: 8px;
  height: 33rem;
  border:solid 1px #53a7ea;
  
  :hover
{

        -webkit-transform: scale(1.5);
        -ms-transform: scale(1.5);
        transform: scale(1.030);
}

box-shadow:
                1px 1px #53a7ea,
                2px 2px #53a7ea,
                3px 3px #53a7ea;
        -webkit-transform: translateX(-3px);
        transform: translateX(-3px);
        

  img{
    position:relative;
    width: 15.40rem;
    height: 15.40rem;
    margin: 23px;
  }
  h1{
    font-family: Poppins;
font-size: 24px;
font-weight: 700;
line-height: 34px;
letter-spacing: 0em;
text-align: center;
color: ${({theme}) => theme.COLORS.WHITE};
  }
  p{
    font-family: Roboto;
font-size: 14px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: center;
color: ${({theme}) => theme.COLORS.GRAY_99};
text-align: center;
margin: 10px;
  }

  button{
    width: 92px;
    height: 48px;
  }

  span{
    display: flex;
    >img{
      width: 120px;
      height: 120px;
    }
    justify-content: center;
  }
  
`;


export const Content = styled.div`
display: flex;
align-items: center;
justify-content: center;
>img{
  width: 18px;
  height: 15px;

}
margin: 12px;
>p{
  font-family: Roboto;
font-size: 32px;
font-weight: 400;
line-height: 51px;
letter-spacing: 0em;
text-align: center;
color: ${({theme}) => theme.COLORS.THYFANY};
}

`
