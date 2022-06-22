import { Container, Section, Form } from "./styled";
import polygon from '../../img/Polygon.svg';
import { Button } from "../../components/Button";

export function Create(){
    return(
        <Container>
            <Section>
                <img src={polygon}/>
                <h1>Food explorer</h1>
            </Section>
            <div>
                <h1>Crie sua conta</h1>
                <Form>
                    <label>Seu nome</label>
                    <input type="text" name='' id='' placeholder="Exemplo: Maria da Silva"/>
                    <label>Email</label>
                    <input type="email" name="" id="" placeholder="Exemplo: exemplo@exemplo.com"/>
                    <label>Senha</label>
                    <input type="password" name="" id="" placeholder="no minímo 6 caracteres" />
                    <Button title='Criar Conta'/>
                </Form>
                <p>Já tenho uma conta</p>
            </div>
        </Container>
    )
}