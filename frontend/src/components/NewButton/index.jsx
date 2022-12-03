import { Container } from "./styled";

export function NewButton({title, children}){
    return(
        <Container>
        {title}
        {children}
        </Container>
    )
}