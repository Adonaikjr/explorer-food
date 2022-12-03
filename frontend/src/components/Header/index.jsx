import { Container, Logo, Label, User, Favorites } from "./styled";
import polygon from '../../img/Polygon.svg'
import { Button } from "../Button";
import vectorped from '../../img/vectorped.svg'
import resumo from '../../img/resumo.svg'
import lupa from '../../img/lupa.svg'
import { Input } from "../Input";
import { BsSearch} from "react-icons/bs";
import {IoExitOutline, MdOutlineRequestPage } from "react-icons/all";
import { Link } from "react-router-dom";
export function Header(){
    return(
        <Container>
            <Link to='/home'>
                <Logo>
                    <img src={polygon}/> Food explorer
                </Logo>
            </Link>
            <Favorites>
                <>
                Meus Favoritos
                </>
            </Favorites>
            <Label>
                <Input  placeholder='Pratos do dia?🔍' icon={BsSearch}/>
            </Label>
            <User>
                <Link to='/pedidos'>
                    <Button title='Meu pedido'>  
                        <MdOutlineRequestPage/>
                    </Button>
                </Link>
            </User>
            <Link to='/'>
                <IoExitOutline size={30}/>
            </Link>
        </Container>
    )
}