import { Container, Title, Text } from "./styled";
import footpolygon from '../../img/footPolygon 1.svg'
export function Footer(){
    return(
        <Container>
                <Title><img src={footpolygon}/> Food explorer</Title>
                <Text>© 2022 - Todos os direitos reservados.</Text>
        </Container>
    )
}