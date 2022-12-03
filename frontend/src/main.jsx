import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App'
//adicionados a baixo
import GlobalStyles from './global'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import { Routes } from './routes'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
          <Routes />
      </ThemeProvider>
  </React.StrictMode>
)
