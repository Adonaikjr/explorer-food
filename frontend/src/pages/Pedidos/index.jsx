import { Container } from "./styled";
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Status_request, User_request } from "../../components/user_request";

import ballred from '../../img/ballred.svg'
import ballgreen from '../../img/ballgreen.svg'
import ballyellow from '../../img/ballyellow.svg'
import styled from "styled-components";


export function Pedidos(){
const Title = styled.h1`
    margin: 2rem 0rem 1rem 2rem;

`

    return(
        <Container>
            <Header/>
            <Title>Pedidos</Title>
            <User_request status={<img src={ballred} width={10}/>} title='Pendente' code='000002' details='1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá' timeday='20/05 às 18h00' />
            <Footer/>
        </Container>
    )
};

export function Pedidos_status(){
    return(
        <Container>
        <Header/>
            <Status_request code='00001' details='1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá' timeday='20/05 às 18h00'/>
        <Footer/>
    </Container>
    )
}