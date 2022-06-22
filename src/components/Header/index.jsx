import { Container } from "./styled";
import polygon from '../../img/Polygon.svg'
import { Button } from "../Button";
import vectorped from '../../img/vectorped.svg'
import resumo from '../../img/resumo.svg'
import lupa from '../../img/lupa.svg'
export function Header(){
    return(
        <Container>
                <h2><img src={polygon}/> Food explorer</h2>
                <label>Meus favoritos
                <img src={lupa}/>
                <input type="text"/>
                </label>
            <Button title='Meu pedido'>  
            <img src={vectorped}/>
            </Button>
            <img src={resumo} alt='ir' width={22} height={22}/>
            
        </Container>
    )
}