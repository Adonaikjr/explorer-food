import { Container, Content } from "./styled";

export function User_request({status, code, details, timeday, title}){ 
    return(
        <Container>

                <table>
                    <tr>
                        <th> {status} {title} </th>
                        <th> {code} </th>
                        <th> {details} </th>
                        <th> {timeday} </th>
                    </tr>
                </table>
        </Container>
    )
};