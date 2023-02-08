import React from 'react'
import { useLocation } from 'react-router-dom'
import { Toast, ToastBody, ToastHeader } from 'reactstrap'

const CardDetalhes = () => {
  const location = useLocation()
  const first_name = location.state.first_name
  const gender = location.state.gender
  const email = location.state.email
  const ip_address = location.state.ip_address

  return (
    <div className='container'>
      <h3>Detalhes</h3>
      <Toast>
        <ToastHeader icon="primary"> {first_name} </ToastHeader>
        <ToastBody>
          <div>Sexo: {gender}</div>
          <div>Email: {email}</div>
          <div>IP: {ip_address}</div>
        </ToastBody>
      </Toast>
      
    </div>
  )
}

export default CardDetalhes