import styled from "styled-components";

export const ContainerSignup = styled.div`
height: 100vh;
display: flex;
align-items: stretch;
flex-direction: row-reverse;

`
export const Form = styled.form`
    padding: 0 136px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    >h1{
        color: ${({theme}) => theme.COLORS.ORANGE};
        font-size:48px;
    }
    >h2{
        font-size: 24px;
        margin-top: 48px;
        margin-bottom:24px;
    }
    >p{
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.GRAY_100};

    }
    >a{
        margin-top:124px;
        color: ${({theme}) => theme.COLORS.ORANGE};

    }
`

export const Background = styled.div`
    flex:1;

    background-size: cover;
`