import { Container, Section, Form, Content, Article, Fieldset } from "./styled";
import polygon from '../../img/Polygon.svg';
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";

export function Create(){
    return(
        <Container>
            <Content>
                <Article>
            <Section>
                <img src={polygon}/>
                <h1>Food explorer</h1>
            </Section>
            </Article>
                <Form>
                <h1>Crie sua conta</h1>
                    <Fieldset>
                       <h4>Seu nome</h4>
                        <Input type='text' placeholder='Exemplo: Joao Pedro'/>
                        <h4>E-mail</h4>
                        <Input type='email' title='E-mail' placeholder='Exemple@exemple.com'/>
                        <h4>Senha</h4>
                        <Input type='password' title='Senha' placeholder='Minimo 6 carácteres'/>

                    </Fieldset>
                    <Button title='Criar Conta'>
                        <Link to='/home'/>
                    </Button>

                    <p>
                        <Link to='/login'>Já tenho uma conta</Link>
                    </p>
                </Form>
                
            </Content>
        </Container>
    )
} 