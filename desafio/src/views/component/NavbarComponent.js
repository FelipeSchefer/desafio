import React from 'react'

const NavbarComponent = (props) => {
  const caminhoA = props.caminhoA
  const caminhoB = props.caminhoB
  const caminhoC = props.caminhoC
  
  const nomeA = props.nomeA
  const nomeB = props.nomeB
  const nomeC = props.nomeC

  let escondeA = false
  let escondeB = false
  let escondeC = false

  if(caminhoA !== '') escondeA = true
  if(caminhoB !== '') escondeB = true 
  if(caminhoC !== '') escondeC = true 

  return (
   <nav className="navbar navbar-expand-lg navbar-light bg-primary">
    <div className="container-fluid">
      <a className="navbar-brand" href='/'>Desafio</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {
            escondeA &&
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href={caminhoA}>{nomeA}</a>
              </li>
          }
          {
            escondeB &&
              <li className="nav-item">
                <a className="nav-link" href={caminhoB}>{nomeB}</a>
              </li>
          }
          {
            escondeC &&
              <li className="nav-item">
                <a className="nav-link" href={caminhoC}>{nomeC}</a>
              </li>
          }
         </ul> 
      </div>
    </div>
   </nav>
  )
}
export default NavbarComponent