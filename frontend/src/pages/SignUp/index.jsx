import { Input } from "../../components/Input";
import { Background, ContainerSignup, Form } from "./styled";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Button } from "../../components/NewButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import { api } from "../../service";



export function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp() {
    if ((!name, !email, !password)) {
      return alert("preencha todos os campos");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("usuario cadastrado sucess");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("nao foi possivel cadastrar");
        }
      });
    console.log(handleSignUp);
  }

  return (
    <Container>
      <Content>
        <Article>
          <Section>
            <img src={polygon} />
            <h1>Food explorer</h1>
          </Section>
        </Article>
        <Form>
          <h1>Crie sua conta</h1>
          <Fieldset>
            <h4>Seu Nome</h4>
            <Input
              type='text'
              placeholder='Exemplo: Joao Pedro'
              onChange={e => setName(e.target.value)}
            />
            <h4>E-mail</h4>
            <Input
              type='email' title='E-mail'
              placeholder='Exemple@exemple.com'
              onChange={e => setEmail(e.target.value)} />
            <h4>Senha</h4>
            <Input
              type='password'
              title='Senha'
              placeholder='Minimo 6 carácteres'
              onChange={e => setPassword(e.target.value)
              }
            />

          </Fieldset>

          <Button
            title='Criar Conta'
            onClick={handleCreate} />
        </Form>
        <p>
          <Link
            to='/login'>Já tenho uma conta</Link>
        </p>


      </Content>
    </Container>
  );
}
