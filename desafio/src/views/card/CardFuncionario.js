import React, { useState } from 'react'
import { Button, Card, CardBody, CardTitle} from "reactstrap";
import { useNavigate } from 'react-router'
import { cardData } from '../../data/cardData'
import NavbarComponent from '../component/NavbarComponent';

const CardFuncionario = () => {
  let URL_Navigate = useNavigate()
  const [mostraDetalhes, setMostraDetalhes] = useState()

  if(mostraDetalhes){
    URL_Navigate('/card-detalhes',
      {
        state:{
          first_name: mostraDetalhes.first_name,
          gender: mostraDetalhes.gender,
          email: mostraDetalhes.email,
          ip_address: mostraDetalhes.ip_address
        }
    })
  }

  return (
    <div className='container'>
      <NavbarComponent
        caminhoA={'/'} nomeA={'Home'} 
        caminhoB={'/Login'} nomeB={'Login'}
        caminhoC={''} nomeC={''}
      />
      <h2>Lista de funcionários</h2>
      {
        cardData.map(pessoa =>  (    
          <Card style={{ width: '18rem' }} key={pessoa.id}>
            <img alt="Pessoa" src="https://cdn.onlinewebfonts.com/svg/img_405941.png" />
            <CardBody>
              <CardTitle tag="h5"> 
                {`Nome: ${pessoa.first_name} ${pessoa.last_name}`}
              </CardTitle>
              <Button 
                className='btn-lg btn-dark btn-block' 
                type='submit' 
                onClick={
                  ()=>{
                    setMostraDetalhes(
                      {
                        first_name: pessoa.first_name,
                        gender: pessoa.gender,
                        email: pessoa.email,
                        ip_address: pessoa.ip_address
                      }
                )}}
              >Detalhes
              </Button>
            </CardBody>
          </Card>
        ))
      }
    </div>
  )
}

export default CardFuncionario