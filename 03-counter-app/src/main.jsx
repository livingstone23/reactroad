import React from 'react';
import ReactDOM from 'react-dom/client';
//import { HelloWorldApp } from './FirstApp.jsx'
//import { SecondComponent } from './SecondComponent.jsx'
import { FirstApp } from './FirstApp';
//import { CounterApp } from './CounterApp.jsx'
//import { EventoClicked } from './EventClick.jsx';
//import { EventoClicked } from './UseHooks.jsx';
//import { EventoClicked } from './HandlSustrack.jsx';
import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp title="Hola soy Livingstone"/>
  </React.StrictMode>,
)
