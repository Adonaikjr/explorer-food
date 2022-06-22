import { Container } from "./styled";
import polygon from '../../img/Polygon.svg';
import { Button } from "../../components/Button";

export function Login(){
    return(
        <Container>
            <section>
                <img src={polygon}/>
                <h1>Food explorer</h1>
            </section>
            <div>
                <h1>Faça Login</h1>
                <form>
                <label>Email</label>
                <input type="email" name="" id="" placeholder="Exemplo: exemplo@exemplo.com"/>
                <label>Senha</label>
                <input type="password" name="" id="" placeholder="no minímo 6 caracteres" />
                <Button type='submit' title='Entrar'/>
                </form>
                
                <p>Já tenho uma conta</p>
            </div>
        </Container>
    )
}