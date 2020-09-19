import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import fconfig from './config/firebase_config';
import Home from './container/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import FAQ from './container/FAQ/faq';
import Profile from './container/Profile/Profile';
import AboutUs from './container/AboutUs/AboutUs';
import Article from './container/Articles/Article';
import Login from './container/login/index';
import Dashboard from './container/Admin/Dashboard';
import ManageArticle from './container/Admin/ManageArticle';
import CreateArticle from './container/Admin/CreateArticle';
import EditArticle from './container/Admin/EditArticle';
import ShowArticle from './container/Articles/ShowArticle';
import Form from './container/Form/Form';
import ManageForm from './container/Form/ManageForm';

function App() {

  console.log(fconfig.firestore().collection('user').doc('user').get());  
  console.log(fconfig.firestore().collection('article').doc('ANX001').get());
  return (
    <div>
        <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/faq" exact component={FAQ} />
          <Route path="/AboutUs" exact component={AboutUs} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/Login" exact component={Login} />
          <Route path="/:tema/:on/Article" exact component={Article} />
          <Route path="/Dashboard" exact component={Dashboard} />
          <Route path="/Form" exact component={Form} />
          <Route path="/ManageArticle" exact component={ManageArticle} />
          <Route path="/CreateArticle" exact component={CreateArticle} />
          <Route path="/ManageForm" exact component={ManageForm} />
          <Route path="/:id/edit/EditArticle" exact children={EditArticle}/>
          <Route path="/:id/:on/ShowArticle" exact component={ShowArticle} />
        </Switch>
      </Router>
    </div>
  );
}




export default App;
