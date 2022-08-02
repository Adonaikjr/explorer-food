import styled from 'styled-components';

export const Container = styled.div`




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
  border:solid green;
  max-width: 100%;
  margin-top:163px;
  height: 16.25rem;
  border-radius: 8px;
  animation:downtop 1s;
  display: flex;
  justify-content: space-around;
  
`



export const BoxA = styled.div`
  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
  border: solid blue;
  width: 70%;
  height: 100%;
  display:flex;
  flex-wrap: wrap;
  
  /*img{
    opacity: 0.8;
    transform: matrix(-1, 0, 0, 1, 0, 0);
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
*/

`
export const ContentBoxA = styled.div`
  border:solid;
  width: 100px;
  height:100px;
`
