import { Button } from "../Button";
import { Container, Content} from "./styled";
import menos from '../../img/menos.svg'
import mais from '../../img/mais.svg'

export function Card({title, img, p, cash, value, temp, tempone, temptwo, temptre, tempfor }){
    return(
        <Container>
           <div>{img}</div> 
            <h1>{title}</h1>
            <p>{p}</p>
            <span>
            {temp}
            {tempone}
            {temptwo}
            {temptre}
            {tempfor}
            </span>
            <h1>{cash}</h1>
            <Content>   
                <img src={menos}/>
                    <p>{value}</p>
                <img src={mais}/>
                <Button title='incluir'/>  
            </Content>
        </Container>
    )
}