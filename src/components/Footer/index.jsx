import { Container } from "./styled";
import footpolygon from '../../img/footPolygon 1.svg'
export function Footer(){
    return(
        <Container>
                <h2><img src={footpolygon}/> Food explorer</h2>
                <p>© 2022 - Todos os direitos reservados.</p>
        </Container>
    )
}