import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    body{

        height: 100%;
        background: ${({theme}) => theme.COLORS.BACKGROUND};
        color:${({theme}) => theme.COLORS.WHITE};
        
    }
`