import { Container } from "./styled";

export function Button({title, children}){
    return(
        <Container>
        {title}
        {children}
        </Container>
    )
}