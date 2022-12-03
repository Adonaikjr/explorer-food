import Select from 'react-select'
import { Container } from './styled'

import ballred from '../../img/ballred.svg'
import ballgreen from '../../img/ballgreen.svg'
import ballyellow from '../../img/ballyellow.svg'

const options = [
    {value: '1', label:'Entregue'},
    {value: '2', label: 'Pendente'},
    {value: '3', label: 'Preparando'}
]

export function Pedido_status(){
   
    return(
        <Container>
        <Select options={options} />
        </Container>
    )
}