import React, { useState } from 'react';
import './Admin.css';
import { useCollection } from 'react-firebase-hooks/firestore';
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
import Swal from 'sweetalert2';


const EditArticleForm = ({ values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue
  }) => {
    const [value, loading, error] = useCollection(
      firebase.firestore().collection('article'),
      {
        snapshotListenOptions: { includeMetadataChanges: true },
      }
  );
  const isiart = []

    return (
      <div>
        <p style={{display:'none'}}>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Collection: Loading...</span>}
        {value && (
          <span>
            Collection:{' '}
            {value.docs.map(doc => (
              <React.Fragment key={doc.id}>
                {isiart.push(doc.data())},{' '}
              </React.Fragment>
            ))}
          </span>
        )}
      </p>
        <Typography>
          <br/><br/><br/><br/>
          <div className="divedit">
          <Form onSubmit={handleSubmit} labelCol={{ span: 4 }} wrapperCol={{ span: 20 }} style={{ margin: "0px 0px 0px" }}>
            <table className="tableedit">
              <tr>
                <td style={{ width: "25%" }}>
                {/* <Form.Item label="Judul Artikel" style={{width:"7px"}}>
                </Form.Item> */}
                <label for="Judul">Judul Artikel : </label>
                </td>
                <td>
                <Input
                name="Judul"
                type="text"
                placeholder="Judul Artikel..."
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Judul}
                />
                {errors.Judul && touched.Judul && <div>{errors.Judul}</div>}
            {/* </Form.Item> */}
                </td>
              </tr>
              <tr>
                <td>
                <label for="Isi Artikel">Isi Artikel : </label>
                </td>
                <td>
                <Input
                name="IsiArtikel"
                type="text"
                placeholder="Tuliskan artikel di sini..."
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.IsiArtikel}
                style={{ height:"200px" }}
                />
                {errors.IsiArtikel && touched.IsiArtikel && <div>{errors.IsiArtikel}</div>}
                </td>
              </tr>
              <tr>
                <td>
                <br/>
                <Link to="/ManageArticle"><Button htmlType='button' style={{ float: "left"}}>Back to Articles</Button></Link>
                </td>
                <td>
                <br/>
                <Button htmlType="submit" style={{ float: "right"}}>Update Article</Button>
                </td>
              </tr>
            </table>
              <div style={{ paddingTop: 20 }}>
                
                
              </div>
          </Form>
          </div>
        </Typography>
      </div>
    )
  }

export default withFormik({
    mapPropsToValues: (props) => {
      if (props !== []) {
        console.log(props)
        const Judul = props.judul.toString()
        const Jenis = props.jenis.toString()
        const IsiArtikel = props.isi.toString()
        return {
          Judul:Judul||'',
          Jenis:Jenis.split('0')[0]||'',
          key:Jenis||'',
          IsiArtikel: IsiArtikel||'',
        }
      }
    },
    validationSchema: () => {
      const message = "Harus di isi"
      return Yup.object().shape({
        Judul: Yup.string().required(message),
        Jenis: Yup.string().required(message),
        key: Yup.string().required(message),
        IsiArtikel: Yup.string().required(message),
      })
    },
    handleSubmit: (values, { setSubmitting, props }) => {
  
      setTimeout(() => {
        try {
          if (props !== []) {

          
          console.log(props)
          // console.log(values.key)
          // const doc = fconfig.firestore().collection('pinjam').doc()
          // const hasil = doc.set({ peminjam, kegiatan, key_k, tgl_pinjam: sdate[0], tgl_kembali: edate[1], key: doc.id })
          const editgan = fconfig.firestore().collection('article').doc(props.jenis).set(values)
          // // console.log(editgan)
          if (editgan != null) {
            Swal.fire(
              'Article Updated.',
              ' ',
              'success'
            )
          }
        }
            // fconfig.firestore().collection('article').doc(values.key).get().then(doc => {
            //   const data = doc.data()
            // //   if (data.key === values.key_k) {
            // //     console.log(data.key)
            //     fconfig.firestore().collection('article').doc(values.key).set({ key: values.key, judul: data.judul, jenis: data.jenis})
            //     // if (values.key_k !== props.key_kk) {
            //     //   fconfig.firestore().collection('article').doc(props.key.toString()).set({ key: props.key.toString(), judul: data.judul, jenis: data.jenis" })
            //     // }
            // //   }
            // })
          // }
        } catch (e) {
          setSubmitting(false);
        }
      }, 500);
    },
  })(EditArticleForm)

// export default EditArticleForm;