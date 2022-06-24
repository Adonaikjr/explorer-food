import { Container, Content } from "./styled";

export function User_request({status, code, details, timeday, title}){ 
    return(
        <Container>

                <table>
                    <tr>
                        <th> <h1>{status}{title}</h1> </th>
                        <th><h2>{code}</h2></th>
                        <th><h3>{details}</h3></th>
                        <th><h4>{timeday}</h4></th>
                    </tr>
                </table>
        </Container>
    )
};