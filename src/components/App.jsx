import React from 'react'
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import '../styles/global.css';

const app = () => {
  return (
    /**
     *  Como layout permite tener componentes dentro, abrimos
     * y cerramos de forma clasica como etiqueta html
     * en cambio como Login no recibe elementos dentro de el, cerramos en la
     * misma etiqueta
     *  */
    <Layout>
      <Login />
    </Layout>
  )
}

export default app