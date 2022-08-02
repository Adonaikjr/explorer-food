import { Container } from './styled';

export function Input({ icon:Icon, title, ...rest }){
    return(
        <Container>
             <h4>{title}</h4>
                <input { ...rest}/>
        </Container>
    )
}