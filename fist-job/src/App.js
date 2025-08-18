import React, { useState } from 'react';
import './App.css';

function App () {
  const [usuario, setUsuario] = useState('');
  const [usuarios, setUsuarios] = useState(['João', 'Maria', 'José']);
  
  const adcionarUsuario = () => {
    if (usuarios.includes(usuario)) {
      alert('Usuário já existe');
      return;
    }
  
    setUsuarios([...usuarios, usuario]);
    setUsuario('');
  };
  return (
    <div className ="App">
      <h1>Adicionar usuários</h1>
      <input
        type="text"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        placeholder="Digite o nome do usuário"
      /> 
      <button onClick={adcionarUsuario}>Adicionar</button>

      <hr />
      <h2>Lista de usuários</h2>
      <ol>
        {usuarios.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
