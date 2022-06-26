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
                        <th><h1>Status</h1></th>
                        <th><h2>Codigo</h2></th>
                        <th><h3>Detalhamento</h3></th>
                        <th><h4>Data e hora</h4></th>
                    </tr>
                        <tr>
                            <td><h1>{status}{title}</h1></td>
                            <td><h2>{code}</h2></td>
                            <td><h3>{details}</h3></td>
                            <td><h4>{timeday}</h4></td>
                        </tr>

                        <tr>
                            <td><h1>{status}{title}</h1></td>
                            <td><h2>{code}</h2></td>
                            <td><h3>{details}</h3></td>
                            <td><h4>{timeday}</h4></td>
                        </tr>
                        
                        <tr>
                            <td><h1>{status}{title}</h1></td>
                            <td><h2>{code}</h2></td>
                            <td><h3>{details}</h3></td>
                            <td><h4>{timeday}</h4></td>
                        </tr>
                        <tr>
                            <td><h1>{status}{title}</h1></td>
                            <td><h2>{code}</h2></td>
                            <td><h3>{details}</h3></td>
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
                <th><h1>Status</h1></th>
                <th><h2>Codigo</h2></th>
                <th><h3>Detalhamento</h3></th>
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