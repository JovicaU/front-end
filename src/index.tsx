import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
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
import CategoryPage from './components/CategoryPage/CategoryPage';

const menueItems = [
  new MainMenueItem("Home", "/"),
  new MainMenueItem("Contact", "/contact/"),
  new MainMenueItem("Log in", "/user/login/"),

  new MainMenueItem("Category1", "/category/1/"),
  new MainMenueItem("Category12", "/category/12/"),
  new MainMenueItem("Category4", "/category/4/"),
  new MainMenueItem("Category21", "/category/21/"),




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
        <Route  path = "/category/:id " element = {<CategoryPage match={{
          params: {
            id: 0
          }
        }} />}/>

      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
