import './Login.css';

import image from './assets/image.png';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar o hook de navegação
import axios from 'axios'; // Importar axios

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Definir o hook de navegação

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/login', formData);
      // Supondo que a resposta positiva significa login bem-sucedido
      if (response.status === 200) {
        setErrorMessage('');
        navigate('/home'); // Redireciona para outra página (exemplo de dashboard)
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrorMessage('Credenciais inválidas. Por favor, tente novamente.');
      } else {
        setErrorMessage('Ocorreu um erro. Por favor, tente novamente.');
      }
    }
  };

  return (

    <div className="register-container">
      <div className="image-section">
        <img src={image} alt="teste" />
      </div>
      <div className="form-section">
        <h1>Login</h1>
        <p>Já possui uma conta? <a href="#">Entre aqui</a></p>
        <form>
          <div className="input-group">
            <label>E-mail:</label>
            <input type="text" placeholder="seuemail@exemplo.com" />
          </div>
          <div className="input-group">
            <label>Senha:</label>
            <input type="email" placeholder="Digite sua senha" />
          </div>
          <p className="password-hint">
            Escolha uma senha com, no mínimo, 8 caracteres.
          </p>
          <div className="checkbox-group">
            <input type="checkbox" />
            <label>
              Eu aceito os <a href="#">Termos e Condições</a> e entendi a <a href="#">Política de Privacidade</a>
            </label>
          </div>
          <button type="submit" className="submit-btn">Sign in</button>
        </form>
        <p className="login-link">Já possui uma conta? <a href="#">Log in</a></p>
      </div>
    </div>
  );
}

export default Login;
