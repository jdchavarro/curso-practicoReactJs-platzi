import React from 'react'
/**
 * Este sera un componente padre 
 * contendra diferentes componentes que le pasaremos al llamarlo
 * en este caso lo estamos llamando en App.jsx
 *  */ 

const Layout = ({ children }) => {
  return (
    <div className='Layout'>
        {children}
    </div>
  )
}

export default Layout