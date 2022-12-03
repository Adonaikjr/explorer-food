import { Container } from './styled';

export function NewInput({ icon:Icon, title,children, ...rest }){
    return(
        <Container>
              { Icon && <Icon size={20}/> }
                <input {...rest}/>
        </Container>
    )
}