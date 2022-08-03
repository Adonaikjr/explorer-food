import styled from 'styled-components';

export const Container = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
max-width:1880px;

margin:0 auto;
padding: 0 auto;


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

export const Section = styled.div`
  
  max-width: 100%;
  margin-top:163px;
  height: auto;
  border-radius: 8px;
  //animation:downtop 1s;
  display: flex;
  justify-content: center;

  
`



export const BoxA = styled.div`
  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
  border-radius: 8px;
  width: 70%;
  height: 100%;
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  


`
export const ContentBoxA = styled.div`

  margin-left: 2rem;
  display:flex;
  justify-content:center;
  align-items: center;
`
export const Title = styled.div`

  display:flex;
  flex-direction: column;
  text-align: center;
 p , h1{
    font-family: Poppins;
font-size: 32px;
font-weight: 500;
line-height: 45px;
letter-spacing: 0em;
text-align: center;
color: ${({theme}) => theme.COLORS.GRAY_80};

  overflow: hidden; 
  border-right: 0.15em solid orange; 
  white-space: nowrap; 
  margin: 0 auto;
  letter-spacing: 0.15em; 
  animation: typing 3s steps(120, end) alternate infinite,
    blink-caret .5s step-end infinite, rotateText 7s ease alternate infinite;


@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}

@keyframes rotateText {
  0% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(10deg) scale(1.5) translateX(10px) skewY(10deg);
  }
  75% {
    transform: rotate(-10deg) scale(0.8) translateX(-10px) skewY(-10deg);
  }
  100% {
    transform: rotate(5deg) scale(1.2) translateX(5px) skewY(5deg);
  }
}
  }
  p{
    font-family: Poppins;
font-size: 16px;
font-weight: 400;
line-height: 22px;


  }
  
`