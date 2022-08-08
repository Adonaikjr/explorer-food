import styled from 'styled-components';
import img1 from '../../img/img1.svg';
export const Container = styled.div`
border: solid;
  width: 35rem;
  height: 25.43rem;
 z-index:1;
  opacity:0.8;
  background-image: url(${img1});
  background-repeat: no-repeat ;
  background-position: center;
  display:flex;
  margin-top: -9.37rem;
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

`
