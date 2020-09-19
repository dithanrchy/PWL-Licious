import React from 'react';
import './Article.css';
import * as firebase from 'firebase';
import fconfig from '../../config/firebase_config'
import { useCollection } from 'react-firebase-hooks/firestore';
import { useDocument } from 'react-firebase-hooks/firestore';
import { Link } from 'react-router-dom';

const IsiArticle = (props) => {
    const [value, loading, error] = useDocument (
        firebase.firestore().collection('article').where("Jenis", "==", `${props.tema}`),
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
        {/* {value && <span>Document: {isiart.push(values.data())}</span>} */}
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
          {isiart.map(doc => 
              <table className="artab" align="center" valign="center">
              <tr align="left">
                   <td colspan="2">
                   <p className="artitle"> {doc.Judul} </p>
                   </td>
               </tr>
               <tr>
                   <td align="center">
                       <p className="arisi"> {(doc.IsiArtikel).substring(0,500)} </p><br/>
                       <Link to={`/${ doc.key }/${ props.tampiltema }/ShowArticle`}><a className="armore"> Read More... </a></Link>
                   </td>
               </tr>
               <br/>
           </table>
          )}
      </div>
  );
}


export default IsiArticle;