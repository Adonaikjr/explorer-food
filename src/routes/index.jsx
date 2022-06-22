import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './App.routes'
import {AuthRoutes} from './Auth.routes'

export function Routes(){
    return(
        <BrowserRouter>
            <AuthRoutes/>
            <AppRoutes/>
        </BrowserRouter>           
    )
}

