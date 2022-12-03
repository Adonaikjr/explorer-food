import { Pedido_status } from "../pedido_status";
import { Container, Content } from "./styled";

import ballred from '../../img/ballred.svg'
import ballgreen from '../../img/ballgreen.svg'
import ballyellow from '../../img/ballyellow.svg'

export function User_request({status, code, details, timeday, title}){ 
    return(
        <Container>
                <table border='1' width='100%'>
                    <tr>
                        <th><h4>Status</h4></th>
                        <th><h4>Codigo</h4></th>
                        <th><h4>Detalhame4to</h4></th>
                        <th><h4>Data e hora</h4></th>
                    </tr>
                        <tr>
                            <td><h4>{status}{title}</h4></td>
                            <td><h4>{code}</h4></td>
                            <td><h4>{details}</h4></td>
                            <td><h4>{timeday}</h4></td>
                        </tr>

                        <tr>
                            <td><h4>{status}{title}</h4></td>
                            <td><h4>{code}</h4></td>
                            <td><h4>{details}</h4></td>
                            <td><h4>{timeday}</h4></td>
                        </tr>
                        
                        <tr>
                            <td><h4>{status}{title}</h4></td>
                            <td><h4>{code}</h4></td>
                            <td><h4>{details}</h4></td>
                            <td><h4>{timeday}</h4></td>
                        </tr>

                </table>
        </Container>
    )
};


export function Status_request({code, details, timeday}){
    return(
        <Content>
            <table border='1' width='100%'> 
            <tr>
                <th><h4>Status</h4></th>
                <th><h4>Codigo</h4></th>
                <th><h4>Detalhame4to</h4></th>
                <th><h4>Data e hora</h4></th>
            </tr>

            <tr>
                <td><Pedido_status/></td>
                <td>{code}</td>
                <td>{details}</td>
                <td>{timeday}</td>
            </tr>
            <tr>
                <td><Pedido_status/></td>
                <td>{code}</td>
                <td>{details}</td>
                <td>{timeday}</td>
            </tr>
            <tr>
                <td><Pedido_status/></td>
                <td>{code}</td>
                <td>{details}</td>
                <td>{timeday}</td>
            </tr>
            <tr>
                <td><Pedido_status/></td>
                <td>{code}</td>
                <td>{details}</td>
                <td>{timeday}</td>
            </tr>
            </table>
        </Content>
    )
}