import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from "./styled";

export function Edit_pedido(){
    return(
        <Container>
            <Header/>
            <h1>Editar prato</h1>
            <form>
                <div>
                    <p>selecione a imagem</p>
                <label>Nome
                <input type='text'/>
                </label>
                </div>
                <section>
                <label>Ingredientes
                <input type='text' placeholder="adicionar component do react trocar "/>
                </label>
                <label>Descrição
                <input type='text'/>
                </label>
                </section>
                <Button title='Adicionar pedido'/>
           </form>
           <Footer/>
        </Container>
    )
};