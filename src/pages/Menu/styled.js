import styled from 'styled-components';

export const Container = styled.div`
height: 100vh;
background-color: ${({theme}) => theme.COLORS.BACKGROUND};
img{
    margin: 16px;
}
>div{
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
    border:none;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.header{
    margin: 0 auto;
    padding: 0 auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    width: 80rem;
    margin-top:150px;
    background-color:${({theme}) => theme.COLORS.BACKGROUND};
    
    >div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;
        height: 90%;
        border: none;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND};
        border:solid 1px #53a7ea;
        
    }
}

`;
