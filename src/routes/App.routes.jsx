import { Routes, Route } from 'react-router-dom'
import { Edit_pedido } from '../pages/edit_pedido'
import { Home } from '../pages/Home'
import { MenuOne, MenuTwo } from '../pages/Menu'
import { Pedidos, Pedidos_status } from '../pages/Pedidos'

export function AppRoutes(){
    return(
        <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/menuone' element={<MenuOne/>}/>
            <Route path='/menutwo' element={<MenuTwo/>}/>
            <Route path='/pedidos' element={<Pedidos/>}/>
            <Route path='/pedidos_status' element={<Pedidos_status/>}/>
            <Route path='/edit_pedido' element={<Edit_pedido/>}/>
        </Routes>
    )
}