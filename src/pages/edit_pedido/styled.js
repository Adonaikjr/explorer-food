import styled from 'styled-components';

export const Container = styled.div`
  color:white;
  height: 100vh;
  div{
    border: solid;
    display:flex;
    justify-content: space-between;
    >label{
        display: flex;
        flex-direction:column;
        >input{
            width: 831px;
        }
    }
  }
  
  form{
    height:70vh;
    display: flex;
    flex-direction: column;

  }
`;
