import { Container } from "./styled";
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { User_request } from "../../components/user_request";

import ballred from '../../img/ballred.svg'
import ballgreen from '../../img/ballgreen.svg'
import ballyellow from '../../img/ballyellow.svg'


export function Pedidos(){
    return(
        <Container>
            <div>
            <Header/>
            </div>
            <User_request status={<img src={ballred} width={40}/>} title='Pendente' code='000002' details='1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá' timeday='20/05 às 18h00' />

            <User_request status={<img src={ballyellow} width={30}/>} title='Preparando' code='000002' details='1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá' timeday='20/05 às 18h00' />

            <User_request status={<img src={ballgreen} width={30}/>} title='Entregue' code='000002' details='1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá' timeday='20/05 às 18h00' />

            <User_request status={<img src={ballgreen} width={30}/>} title='Entregue' code='000002' details='1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá' timeday='20/05 às 18h00' />
            <div>
            <Footer/>
            </div>
        </Container>
    )
};

export function Pedidos_status(){
    return(
        <Container>
        <div>
        <Header/>
        </div>
        <User_request status={<img src={ballred} width={40}/>} title='Pendente' code='000002' details='1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá' timeday='20/05 às 18h00' />

        <User_request status={<img src={ballyellow} width={30}/>} title='Preparando' code='000002' details='1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá' timeday='20/05 às 18h00' />

        <User_request status={<img src={ballgreen} width={30}/>} title='Entregue' code='000002' details='1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá' timeday='20/05 às 18h00' />

        <User_request status={<img src={ballgreen} width={30}/>} title='Entregue' code='000002' details='1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá' timeday='20/05 às 18h00' />
        <div>
        <Footer/>
        </div>
    </Container>
    )
}