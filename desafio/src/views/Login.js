import { Button, Form, FormFeedback, FormGroup, FormText, Input, Label } from "reactstrap";


const Login = () => {
 const MASTER = {
   usuario: "Master",
   senha: 1
 }

 const validarUsuario = () =>{

 }

 return (
  <div className="container">
    <Form>
      <FormGroup>
        <Label for="email">
          Email
        </Label>
        <Input type="email" placeholder="Escreva aqui seu email" valid />
        <FormFeedback valid>
          Legal! o seu email é valido
        </FormFeedback>
        <FormText>
          Escreva o seu melhor email.
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label for="senha">
          Senha
        </Label>
        <Input type="password" placeholder="Escreva aqui sua senha" invalid />
        <FormFeedback>
          Essa senha é fraca 
        </FormFeedback>
        <FormText>
          Escreva uma senha com no mínimo 6 caracteres.
        </FormText>
      </FormGroup>
      <Button className="btn-lg btn-dark btn-block">Log in</Button>
    </Form>
    <FormText>
      <small> Ainda não é cadastrado clique aqui </small>
    </FormText>
  </div>
 )
}

export default Login