import { Routes, Route } from 'react-router-dom'
import {Create} from '../pages/create'
import {Login} from '../pages/login'

export function AuthRoutes(){ 
    return(
    <Routes>
        <Route path='/' element={<Create/>}/>
        <Route path='/login' element={<Login/>}/>
    </Routes>
    )
};