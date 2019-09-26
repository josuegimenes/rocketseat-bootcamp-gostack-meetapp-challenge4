// Importar o React toda vez que possuir sintaxe html no arquivo.
import React from 'react';

// Importando e aplicando o CSS.
import './App.css'

// import logo from './assets/facebook.jpg';

import Header from './components/Header';

function App() {
  // return <img src={logo} alt="Facebook" width="121" />
  return <Header />
}

export default App;