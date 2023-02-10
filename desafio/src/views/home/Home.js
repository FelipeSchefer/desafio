import React from 'react';
import NavbarComponent from '../component/NavbarComponent';

const Home = () => {
  return (
    <>
      <NavbarComponent
        caminhoA={'/login'} nomeA={"Login"} 
        caminhoB={''} nomeB={''}
        caminhoC={''} nomeC={''}
      />
      <div className='container'>
        <h1>Home Page</h1>
      </div>
    </>
  );
}
export default Home