import { Container } from './styled';

export function Input({ icon:Icon, title,children, ...rest }){
    return(
        <Container>
              { Icon && <Icon size={20}/> }
                <input {...rest}/>
                
        </Container>
    )
}