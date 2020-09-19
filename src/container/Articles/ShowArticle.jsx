import React from 'react';
import './Article.css';
import * as firebase from 'firebase';
import fconfig from '../../config/firebase_config'
import { useCollection } from 'react-firebase-hooks/firestore';
import { useDocument } from 'react-firebase-hooks/firestore';
import { Link } from 'react-router-dom';
import Header from '../../component/Header/header';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/footer';

const ShowArticle = (props) => {
    props = {
        id: window.location.pathname.split('/')[1],
        tampiltema: window.location.pathname.split('/')[2]
    }
    const [value, loading, error] = useDocument (
        firebase.firestore().doc(`article/${props.id}`),
        {
          snapshotListenOptions: { includeMetadataChanges: true },
        }
    );
    const isiart = []
    return (
      <div>
          <p style={{display:'none'}}>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Document: Loading...</span>}
        {value && <span>Document: {isiart.push(value.data())}</span>}
      </p>
        <Header/>
        <Navbar/> 
        <br/><br/>
        <div className="divShow">
        <table className="tdShow">
            <tr>
                {isiart.map(doc=><p className='h5kecilbaru'>{doc.Judul}</p>)}
            </tr>
            <tr>
                {isiart.map(doc=><p className='textArtikel'>{doc.IsiArtikel}</p>)}
            </tr>
            <tr>
                <Link to={`/${ isiart.map(doc=>doc.Jenis) }/${ props.tampiltema }/Article`}><button className="BacktoArt"> Back to Articles </button></Link>
            </tr>
        </table>
        <br/>
        <br/>
        </div>
        <Footer/>
      </div>
  );
}


export default ShowArticle;