import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/HomePage/HomePage';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.js';
import 'popper.js/dist/popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import { MainMenue, MainMenueItem } from './components/MainMenue/MainMenue';
import {HashRouter, Routes , Route} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import ContactPage from './components/ContactPAge/ContactPage';
import UserLoginPage from './components/UserLoginPage/UserLoginPage';

const menueItems = [
  new MainMenueItem("Home", "/"),
  new MainMenueItem("Contact", "/contact/"),
  new MainMenueItem("Log in", "/user/login/"),


];
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MainMenue items = {menueItems}></MainMenue>
    <HashRouter>
      <Routes>
        <Route  path = "/" element = {<HomePage/>}/>
        <Route  path = "contact" element = {<ContactPage/>}/>
        <Route  path = "/user/login" element = {<UserLoginPage/>}/>


      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
