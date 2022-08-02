import { Container } from './styled';

export function Input({ icon:Icon, title,children, ...rest }){
    return(
        <Container>
             <h4>{title}</h4>
             {children}
              { Icon && <Icon size={20}/> }
                <input {...rest}/>
                
        </Container>
    )
}