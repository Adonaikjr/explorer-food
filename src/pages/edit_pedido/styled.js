import styled from 'styled-components';

export const Container = styled.div`
  color:white;
  height: 100vh;
  input{
    background-color: transparent;
    border: solid 1px white;
    color: ${({theme}) => theme.COLORS.WHITE};
  }

`


export const Form = styled.form`

`
export const BoxA = styled.div`
  display:flex;
  //border: solid;
  justify-content: space-around;
  flex-wrap: wrap;
  input{
    height:3.5rem;
  }
  p{
    border:solid 1px white;
    display: flex;
    align-items: center;
    border-radius: 5px;
  }
  margin-bottom: 1rem;
`

export const BoxB = styled.div`
  //border: solid;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  input{
    height: 3.5rem;
  }
  margin-bottom: 1rem;
`
export const BoxC = styled.div`
  //border: solid;
  display: flex;
align-items: center;
justify-content: center;
  flex-wrap: wrap;
  input{
    height: 12.25rem;
  }
  margin-bottom: 1rem;
`