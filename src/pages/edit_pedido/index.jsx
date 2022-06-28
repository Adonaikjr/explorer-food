
import resumo from '../../img/resumo.svg'
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from "./styled";



export function Edit_pedido(){


    return(
        <Container>
            <Header/>
            <form>
            <strong> &lt; Voltar </strong>
            <h1>Editar prato</h1>
                <div>
                    <p className='select-img'> <img src={resumo}/>selecione a imagem</p>  
                    <label>Nome
                    <input type='text'  placeholder="Ex: Salada Ceaser"/>
                    </label>
                </div>
                <section>
                    <div>
                        <label>Ingredientes
                        <input type='text'/>
                        </label>

                        <span className='valor'>
                            <label>Preço
                                <input type="number" name="" id="" placeholder='R$ 00,00' />
                            </label>
                        </span>    
                    </div>

                    <label>Descrição
                    <input type='text' placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'/>
                    </label>
                </section>
                <Button title='Adicionar pedido'/>
           </form>
           <Footer/>
        </Container>
    )
};