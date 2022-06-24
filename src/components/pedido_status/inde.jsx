import Select from 'react-select'

const options = [
    {value: 'produto 01', label: 'produto 01'},
    {value: 'produto 02', label: 'produto 02'},
    {value: 'produto 03', label: 'produto 03'},
    {value: 'produto 04', label: 'produto 04'}
]

export function Pedido_status(){
    return(
        <Select options={options}/>
    )
}