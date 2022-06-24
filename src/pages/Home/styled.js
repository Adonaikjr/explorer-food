import styled from 'styled-components';

export const Container = styled.div`

section{
  >img{
    position: absolute;
    opacity: 0.8;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    top: 126px;
    margin-left: -40rem;

    animation:topdown 1s;
    @keyframes topdown {
    0%{
        opacity:0;
        transform:translateY(0);
    }
    
    100%{
        opacity:1;
        transform: translateY(90);
    }
}




  }
  max-width: 85.5rem;
  margin: 0 auto;
  margin-top:163px;
  padding: 0 auto;
  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
  border-radius: 8px;
  height: 16.25rem;
border-radius: 8px;
text-align: right;
display: flex;
justify-content: end;

>div{
h1{
  font-family: Poppins;
font-size: 40px;
font-weight: 500;
line-height: 56px;
letter-spacing: 0em;
text-align: left;

}
p{
  font-family: Poppins;
font-size: 16px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: left;

}
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100%;
  justify-content: center;
  animation:downtop 1s;
}
}

@keyframes downtop {

0%{
    opacity:0;
    transform:translateX(200px);
}

100%{
    opacity:1;
    transform: translateX(0);
}
}
`;

export const Content = styled.div`
margin-top: 16px;
  
  display: flex;
  flex-direction: column;
  >h1{
    margin-top: 16px;
    margin-bottom: 16px;
    font-family: Poppins;
font-size: 32px;
font-weight: 500;
line-height: 45px;
letter-spacing: 0em;
text-align: center;
color: ${({theme}) => theme.COLORS.GRAY_80};

  }

`

export const Items = styled.div`
display: flex;
  gap: 27px;
  margin-top:42px;
  height: 34rem;


`
