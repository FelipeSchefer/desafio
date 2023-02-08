import React, { useState } from 'react'
import { Button} from "reactstrap";
import { useNavigate } from 'react-router'
import { cartData } from '../data/cartData'

const Cart = () => {
 let URL_Navigate = useNavigate()
const [mostraDetalhes, setMostraDetalhes] = useState()

 if(mostraDetalhes){
  URL_Navigate('/detalhes',/*{state:{data: nomeAula}}*/)
 }

  return (
    <div className='container'>
     {
      cartData.map(item => (
       <div className='cart' key={item.id}>
         <div>
          <img alt={item.nome} src='../../public/Dev.jpg'></img>
         </div>
         <div>priço: ${item.preco} </div>
         <div>data: {item.data}</div>
         <span>
          <Button 
            className='btn-lg btn-dark btn-block' 
            type='submit' 
            onClick={
              ()=>{
                setMostraDetalhes(
                  {
                    nome: item.nome,
                    data: item.data
                  }
                  )}}
          > Mais detalhes
          </Button>
         </span>
        <hr/>
       </div>
      ))
     }
    </div>
  )
}

export default Cart