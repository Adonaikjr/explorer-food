import { Container, Logo, Label, User, Favorites } from "./styled";
import polygon from '../../img/Polygon.svg'
import { Button } from "../Button";
import vectorped from '../../img/vectorped.svg'
import resumo from '../../img/resumo.svg'
import lupa from '../../img/lupa.svg'
import { Input } from "../Input";
import { BsSearch} from "react-icons/bs";
import {IoExitOutline, MdOutlineRequestPage } from "react-icons/all";
export function Header(){
    return(
        <Container>
            <Logo>
                <img src={polygon}/> Food explorer
            </Logo>
            <Favorites>
                <>
                Meus Favoritos
                </>
            </Favorites>
            <Label>
                <Input  placeholder='Pratos do dia?🔍' >
                    <BsSearch/>
                </Input>
            </Label>
            <User>
                <Button title='Meu pedido'>  
                <MdOutlineRequestPage/>
                </Button>
            </User>
            <IoExitOutline/>
        </Container>
    )
}