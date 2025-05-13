// Importa bibliotecas React e o componente principal App
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'; // Estilos globais

// Cria a raiz da aplicação e renderiza o componente App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
