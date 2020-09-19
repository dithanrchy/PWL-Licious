import React, { useState } from 'react';
import './Form.css';
import Header from '../../component/Header/header';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/footer';
import fconfig from '../../config/firebase_config';
import { Formik } from 'formik';
import { Select } from 'antd';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Form = (props) => {
    const [nama, setNama] = useState('');
    const [curhatan, setCurhatan] = useState('');
    
    console.log(nama);
    console.log(curhatan);
    function onSubmit(e) {
        e.preventDefault()
        if (nama !== '' && curhatan !== '') {
          const doc = fconfig.firestore().collection('form').doc(nama)
          const hasil = doc.set({nama,curhatan}).then(() => {
            setNama('')
            setCurhatan('')
            
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
      initialValues={{ nama: '', curhatan: ''}}
      onSubmit={(values, { setSubmitting }) => {
        var rand=Math.floor(Math.random()*100)
        fconfig.firestore().collection('form').doc(values.nama+rand).set({ nama: values.nama, key: values.nama+rand, curhatan: values.curhatan})
          Swal.fire(
            'New form submitted succesfully!',
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
            <div className="divForm"> 
                <div className="row">
                    <div className="col-50">
                        <label className="lebel">Nama Anda:</label>
                    </div>
                    <div className="col-50">
                        <input 
                            className="list2" 
                            type="text" 
                            id="fname" 
                            name="nama" 
                            placeholder="Tuliskan nama disini..."       
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.nama}
                        />
                        {errors.judul && touched.judul && <div>{errors.judul}</div>}
                    </div>
                </div>
                
                <br/>
                <div className="col-50">
                  <label className="lebel"> Keluhan anda </label>
                </div>
                <textarea 
                    placeholder="Silakan mengeluh dan bercerita disini..."
                    name="curhatan"
                    className="jawab1"
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    value={values.curhatan}
                ></textarea>
                {errors.isi && touched.isi && <div>{errors.isi}</div>}

                <br/><br/>
                <div className="row">
                    <button type="submit" className="btnCreate"> SEND </button>
                    {/* <Link to="/Home"><button className="btnBack"> BACK </button></Link> */}
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

export default Form;