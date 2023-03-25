import React, { useRef } from "react";
import "@styles/Login.scss";

import logo from "@logos/logo_yard_sale.svg";

const Login = () => {
  const form = useRef(null);

  // Vamos a manejar los datos llenados en el formulario
  const handleSubmit = (event) => {
	event.preventDefault();
    // haciendo referencia al useRef creado,
    // usamos FormData que es propio de JavaScript
    // para tomar la informacion
    const formData = new FormData(form.current);
    // personalizamos la informacion que enviaremos
    const data = {
      // get nos permite tomar la informacion de los elementos
      // con la etiqueta name
      username: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(data);
  };

  return (
    <div className="Login">
      <div className="Login-container">
        <img src={logo} alt="logo" className="logo" />
        <form action="/" className="form" ref={form}>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="platzi@example.cm"
            className="input input-email"
          />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="*********"
            className="input input-password"
          />
          <button
            type="submit"
            className="primary-button login-button"
            onClick={handleSubmit}
          >
            Log in
          </button>
          <a href="/">Forgot my password</a>
        </form>
        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>
  );
};

export default Login;
