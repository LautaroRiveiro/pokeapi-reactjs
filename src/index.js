import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './normalize.css'
import './index.css'
import {PokemonContextProvider} from './Context'

ReactDOM.render(
  <React.StrictMode>
    <PokemonContextProvider>
      <App />
    </PokemonContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
