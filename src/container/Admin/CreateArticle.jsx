import React, { useState } from 'react';
import './Admin.css';
import Header from '../../component/Header/header';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/footer';
import fconfig from '../../config/firebase_config';
import { Formik } from 'formik';
import { Select } from 'antd';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const CreateArticle = (props) => {
    const [judul, setJudul] = useState('');
    const [jenis, setJenis] = useState('');
    const [isi, setIsi] = useState('');
    console.log(judul);
    console.log(jenis);
    console.log(isi);
    function onSubmit(e) {
        e.preventDefault()
        if (judul !== '' && jenis !== '' && isi !== '') {
          const doc = fconfig.firestore().collection('article').doc(jenis)
          const hasil = doc.set({ judul, jenis, isi}).then(() => {
            setJudul('')
            setJenis('')
            setIsi('')
          })
        props.push('/')
        } else {
          alert('gagal')
        }
      }
    return(
        <div>
            <Header/>
            <Navbar/>
            <br/><br/><br/>
            <Formik
      initialValues={{ judul: '', jenis: '',isi:'' }}
      onSubmit={(values, { setSubmitting }) => {
        fconfig.firestore().collection('article').doc(values.jenis).set({ Judul: values.judul, key: values.jenis, IsiArtikel: values.isi, Jenis: values.jenis.split('0')[0]||'' })
          Swal.fire(
            'New article submitted succesfully!',
            ' ',
            'success'
          )
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        setFieldValue,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
            <div className="divCreate"> 
                <div className="row">
                    <div className="col-25">
                        <label className="lebel">Judul Artikel</label>
                    </div>
                    <div className="col-75">
                        <input 
                            className="list" 
                            type="text" 
                            id="fname" 
                            name="judul" 
                            placeholder="Tuliskan judul disini..."       
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.judul}
                        />
                        {errors.judul && touched.judul && <div>{errors.judul}</div>}
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label className="lebel"> Jenis Artikel </label>
                    </div>
                    <div className="col-75">
                        <Select 
                            className="list" 
                            id="country" 
                            name="jenis"
                            onChange={e=>setFieldValue('jenis',e)} 
                            defaultValue={values.jenis}
                            value={values.jenis}
                        >
                        <Select.Option value={"MOOD"+'0'+Math.floor(Math.random()*100)} key="MOOD"> Mood Disorders </Select.Option>
                        <Select.Option value={"ANX"+'0'+Math.floor(Math.random()*100)} key="ANX"> Anxiety Disorders </Select.Option>
                        <Select.Option value={"TRA"+'0'+Math.floor(Math.random()*100)} key="TRA"> Trauma-related Disorders </Select.Option>
                        <Select.Option value={"PRSN"+'0'+Math.floor(Math.random()*100)} key="PRSN"> Personality </Select.Option>
                        <Select.Option value={"DCTV"+'0'+Math.floor(Math.random()*100)} key="DCTV"> Dissociative Disorders </Select.Option>
                        <Select.Option value={"PSKP"+'0'+Math.floor(Math.random()*100)} key="PSKP"> Psychotic Disorders </Select.Option>
                        <Select.Option value={"EATI"+'0'+Math.floor(Math.random()*100)} key="EATI"> Eating Disorders </Select.Option>
                        <Select.Option value={"SXL"+'0'+Math.floor(Math.random()*100)} key="SXL"> Sexual Disorders </Select.Option>
                        <Select.Option value={"ADD"+'0'+Math.floor(Math.random()*100)} key="ADD"> Addiction </Select.Option>
                        <Select.Option value={"BLY"+'0'+Math.floor(Math.random()*100)} key="BLY"> About Bullying </Select.Option>
                        </Select>
                    </div>
                </div>
                <br/>
                <div className="col-25">
                  <label className="lebel"> Isi Artikel </label>
                </div>
                <textarea 
                    placeholder="Artikel ini membahas tentang...."
                    name="isi"
                    className="jawab1"
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    value={values.isi}
                ></textarea>
                {errors.isi && touched.isi && <div>{errors.isi}</div>}

                <br/><br/>
                <div className="row">
                    <button type="submit" className="btnCreate"> WRITE </button>
                    <Link to="/ManageArticle"><button className="btnBack"> BACK </button></Link>
                </div>
                <br/>
            </div>
            </form>
      )}
    </Formik>
            
            <br/><br/><br/><br/><br/><br/><br/>
            <Footer/>
        </div>
    )
}

export default CreateArticle;