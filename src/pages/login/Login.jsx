import './Login.css';

import image from './assets/image.png';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar o hook de navegação
import axios from 'axios'; // Importar axios

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Inicializa o useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        if (response.status === 401) {
          setError('Usuário ou Senha incorreta');
        } else if (response.status === 404) {
          setError('Usuário não encontrado');
        } else {
          setError('Erro inesperado');
        }
        return;
      }

      const data = await response.json();
      console.log('Usuário autenticado:', data.id);

      localStorage.setItem('userId', data.id);


      switch (data.tipoUser) {
        case 'CLIENTE':
          navigate('/cliente-perfil'); // Rota para CLIENTE
          break;
        case 'ADMIN':
          navigate('/admin'); // Rota para ADMIN
          break;
        case 'PROJETISTA':
          navigate('/projetista-perfil'); // Rota para FUNCIONARIO
          break;
        default:
          setError('Tipo de usuário desconhecido');
      }
      //navigate('/home');
      // Aqui você pode armazenar os dados do usuário ou redirecionar para outra página
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setError('Erro ao fazer login');
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
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>E-mail:</label>
            <input type="email" placeholder="seuemail@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Senha:</label>
            <input type="password" placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
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
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
        <p className="login-link">Já possui uma conta? <a href="#">Log in</a></p>
      </div>
    </div>
  );
}

export default Login;
