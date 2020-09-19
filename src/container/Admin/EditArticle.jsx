import React, { useState } from 'react';
import './Admin.css';
import Header from '../../component/Header/header';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/footer';
import fconfig from '../../config/firebase_config';
import { Formik } from 'formik';
import { Select } from 'antd';
import EditArticleForm from './EditArticleForm';
import EditArticles from './EditArticles';

const EditArticle = () => {
    
    return(
        <div>
            <Header/>
            <Navbar/>
            <EditArticles id={window.location.pathname.split('/')[1]}/>
            <br/><br/><br/><br/><br/><br/><br/>
            <Footer/>
        </div>
    )
}

export default EditArticle;