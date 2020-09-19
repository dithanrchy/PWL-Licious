import React, { useState } from 'react';
import './Admin.css';
import Header from '../../component/Header/header';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/footer';
import fconfig from '../../config/firebase_config';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { withFormik } from 'formik';
import { Select, Typography, Form, Input, Button } from 'antd';
import { useDocument } from 'react-firebase-hooks/firestore';
import firebase from 'firebase';
import EditArticleForm from './EditArticleForm'
import Swal from 'sweetalert2';
const EditArticles = (props) => {
    const [value, loading, error] = useDocument(
        firebase.firestore().doc(`article/${props.id}`),
        {
          snapshotListenOptions: { includeMetadataChanges: true },
        }
    );
    const isiart = []
    // console.log(isiart.map(doc=>doc.Judul));
    function loadData() {
        if (value != null) {
          return (
            <div>
            <EditArticleForm jenis={props.id} id={isiart.map(doc=>doc.key)} judul={isiart.map(doc=>doc.Judul)} isi={isiart.map(doc=>doc.IsiArtikel)}/>
            </div>
          )
        }
      }
    return(
        <div>
            <p style={{display:'none'}}>
            {error && <strong>Error: {JSON.stringify(error)}</strong>}
            {loading && <span>Document: Loading...</span>}
            {value && <span>Document: {isiart.push(value.data())}</span>}
            </p>
            {loadData()}
        </div>
    )
}
export default EditArticles