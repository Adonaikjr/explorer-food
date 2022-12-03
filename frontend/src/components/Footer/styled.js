import styled from 'styled-components';

export const Container = styled.footer`
margin: 0 auto;
padding: 0 auto;
margin-top: 100px;
  width:100%;
  //border: solid;
  height: 6.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
`;
export const Title = styled.h2`
//border: solid;
    font-family: Roboto;
font-size: 25px;
font-weight: 700;
line-height: 29px;

    display: flex;
    justify-content: center;
    align-items: center;
     img{
        margin-right: 16px;
     }
`

export const Text = styled.p`
font-family: Roboto;
font-size: 16px;
font-weight: 400;
line-height: 26px;

//border: solid;
text-align: center;
`