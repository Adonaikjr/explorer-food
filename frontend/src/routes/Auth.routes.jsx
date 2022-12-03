import { Routes, Route } from 'react-router-dom'
import {Create} from '../pages/create'
import { Login } from '../pages/login'
import { Signup } from '../pages/SignUp'

export function AuthRoutes(){ 
    return(
    <Routes>
            <Route path='/' element={<Signup />}/>
        <Route path='/login' element={<Login/>}/>
    </Routes>
    )
};