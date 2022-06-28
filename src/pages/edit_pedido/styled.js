import styled from 'styled-components';

export const Container = styled.div`
  color:white;
  height: 100vh;

  strong{
    font-family: Poppins;
font-size: 24px;
font-weight: 500;
line-height: 34px;
letter-spacing: 0em;
text-align: left;

  }

  .select-img{
   
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items:center;
    gap:12px;
    border:solid 1px ${({theme}) => theme.COLORS.WHITE};
    border-radius: 5px;
    width:250px;
    height:48px;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;

  }
  
  div{
    
    display:flex;
    align-items:center;
    justify-content: space-between;
    >label{
        display: flex;
        flex-direction:column;
        >input{
            width: 859px;
            height: 48px;
            border-radius: 5px;
            background:transparent;
            border: solid 1px ${({theme}) => theme.COLORS.WHITE};
        }
    }
  }

  section{
    margin-top: -50px;
    height:30%;
    display:flex;
    flex-direction: column;
    gap:50px;

    >div{
      >label{
        >input{
          width: 50rem;
        }
      }
    }

.valor{
margin-top: 14px;
  input{
    height: 48px;
    border:solid 1px white;
    border-radius:5px;
    background:transparent;
    width:251px;
   padding-left: 12px;
   margin-left: 5px;
   color: ${({theme}) => theme.COLORS.WHITE};

  }
}

    >label{
      display:flex;
      flex-direction:column;

      >input{
        width: 100%;
        height: 172px;
        border-radius: 5px;
        background:transparent;
        border: solid 1px ${({theme}) => theme.COLORS.WHITE};

      }
    }
  }
  
  form{
    height:70vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
input{
  color:${({theme}) => theme.COLORS.WHITE};
  padding:12px;
}
    h1{
      font-family: Poppins;
font-size: 32px;
font-weight: 500;
line-height: 45px;
letter-spacing: 0em;
text-align: left;

    }
  label{
      font-family: Roboto;
      font-size: 16px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0em;
      text-align: left;
  }

  input{
    margin-top: 10px;
  }

  button{
      margin-top: 100px;
      align-self: flex-end;
      background:${({theme}) =>theme.COLORS.BORDER_INPUT};
      border:solid 1px ${({theme}) => theme.COLORS.WHITE};
      background-image: -webkit-linear-gradient(45deg, red 50%, transparent 50%);
      background-image: linear-gradient(45deg, ${({theme}) => theme.COLORS.GRAY_300} 50%, transparent 50%);
      background-position: 100%;
      background-size: 400%;
      -webkit-transition: background 300ms ease-in-out;
      transition: background 300ms ease-in-out;
  } 

}

footer{
  display: flex;
  flex-direction:row;
  justify-content: space-around;
  
}


`;
