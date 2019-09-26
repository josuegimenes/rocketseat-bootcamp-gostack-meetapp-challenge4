import React from 'react';

/**
 * render - Função responsável pela renderização dos componentes do react 
 * dentro do conteúdo dos htmls.
 */
import { render } from 'react-dom'

import App from './App';

render(<App />, document.getElementById('app'));