
import resumo from '../../img/resumo.svg'
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container, Form, BoxA, BoxB, BoxC } from "./styled";
import styled from 'styled-components';
import { Input } from '../../components/Input'



export function Edit_pedido(){

    const Title = styled.h1`
margin: 2rem;
    `   
const JustifyBtn = styled.div`
display: flex;
justify-content: end;
margin-right: 8rem;
margin-top: 3rem;
`
    return(
        <Container>
            <Header/>
            <Form>
            <strong> &lt; Voltar </strong>
            <Title>Editar prato</Title>
                <BoxA>
                    <p className='select-img'><img src={resumo}/>selecione a imagem</p>  
                    <label>Nome
                        <Input size={100} />
                    </label>
                </BoxA>
                    <BoxB>
                        <label>Ingredientes
                            <Input type='text' size={100} />
                        </label>
                        <label>Preço
                            <Input type="number" name="" id="" placeholder='R$ 00,00'/>
                        </label>
                    </BoxB>
                    <BoxC>
                        <label>Descrição
                            <Input size={150}  type='text' placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'/>
                        </label>
                    </BoxC>
                    <JustifyBtn>
                <Button title='Adicionar pedido'/>
                </JustifyBtn>
           </Form>
           <Footer/>
        </Container>
    )
};