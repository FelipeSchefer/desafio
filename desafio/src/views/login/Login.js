import { Button, Form, FormFeedback, FormGroup, FormText, Input, Label } from "reactstrap";
import { loginValidationEmail, loginValidationSenha } from "../../validations/LoginValidation";
import { useState } from "react";
import { useNavigate } from 'react-router'
import './login.css'
import NavbarComponent from "../component/NavbarComponent";

const Login = (props) => {
 let URL_Navigate = useNavigate()
 
 const [emailValido, setEmailValido] = useState()
 const [emailInvalido, setEmailInvalido] = useState()
 const [senhaValido, setSenhaValido] = useState()
 const [senhaInvalido, setSenhaInvalido] = useState()
 const [logar, setLogar] = useState()


 const MASTER = {
   email: "master@gmail.com",
   senha: '123456789'
 }

 const validarInputsFrom = async (event) =>{
  event.preventDefault()
  let email = {email: event.target[0].value}
  let senha = {senha: event.target[1].value}

  const isEmailValid = await loginValidationEmail.isValid(email)
  const isSenhaValid = await loginValidationSenha.isValid(senha)
  
  if(isEmailValid) setEmailValido(true)
  else setEmailInvalido(true)

  if(!isEmailValid) setEmailValido(false)
  else setEmailInvalido(false)
  
  if(isSenhaValid) setSenhaValido(true)
  else setSenhaInvalido(true)

  if(!isSenhaValid) setSenhaValido(false)
  else setSenhaInvalido(false)
  
  if(isEmailValid && isSenhaValid){
   verificarLogin()
  } 
 }

 const verificarLogin = () => {
   let emailInput = document.getElementById('email').value
   let senhaInput = document.getElementById('senha').value

   setLogar(true)
   if(emailInput.trim() === MASTER.email && senhaInput.trim() === MASTER.senha){
    props.autenticacao(true)
    URL_Navigate('/cards',{replace: true})
   }
 }

 return (
  <div className="container">
    <NavbarComponent 
      caminhoA={'/home'} nomeA={'Home'} 
      caminhoB={''} nomeB={''}
      caminhoC={''} nomeC={''}
    />
    <Form className="form" onSubmit={validarInputsFrom}>
      <FormGroup>
        <Label for="email">
          Email
        </Label>
        <Input type="email" placeholder="Escreva aqui seu email" 
         valid={emailValido} 
         invalid={emailInvalido}
         id="email" 
        />
        <FormFeedback valid={emailValido}>
          {emailValido ? "Legal! o seu email é valido" : "Email invalido verifique se há @ e .com"}
        </FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="senha">
          Senha
        </Label>
        <Input type="password" placeholder="Escreva aqui sua senha" 
         valid={senhaValido} 
         invalid={senhaInvalido} 
         id="senha"
        />
        <FormFeedback 
         valid={senhaValido}>
          {senhaValido ? "Senha valida!" : "Senha incorreta deve conter entre 6 e 20 caracteres"}          
        </FormFeedback>
      </FormGroup>
      {
       logar &&
       <div>
        <small id="alert">
         O seu login não foi encontrado, caso queira cadastrar-se clique no link abaixo
        </small>
       </div>
      }
      <Button className="btn-lg btn-dark btn-block">Log in</Button>
    </Form>
    <FormText>
      <small> Ainda não é cadastrado clique aqui </small>
    </FormText>
  </div>
 )
}

export default Login