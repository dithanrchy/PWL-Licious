import React from 'react';
import './Admin.css';
import { useCollection } from 'react-firebase-hooks/firestore';
import * as firebase from 'firebase';
import { Table, Menu, Dropdown, Button, Card } from 'antd';
import fconfig from '../../config/firebase_config';
import { Link } from 'react-router-dom';
import Navbar from '../../component/Navbar/Navbar';
import Header from '../../component/Header/header';
import Footer from '../../component/Footer/footer';

const ManageArticle = (props) => {
    const [value, loading, error] = useCollection(
        firebase.firestore().collection('article'),
        {
          snapshotListenOptions: { includeMetadataChanges: true },
        }
    );
    const getActionMenus = object => {
        return (
          <Menu style={{ width:'80px', height:'100px' }}>
            <Menu.Item key="1">
              <p className="pAction" onClick={e => fconfig.firestore().collection('article').doc(object.key).delete()}>Delete</p>
            </Menu.Item>
            <Menu.Item key="object-update">
              <Link className="pAction" to={`/${object.key}/edit/EditArticle/`}><p className="pAction"> Edit </p></Link>
            </Menu.Item>
          </Menu>
        );
      };
    const columns = [
        {
          title: 'Judul',
          dataIndex: 'Judul',
          key: 'Judul',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, object) => (
              <Dropdown overlay={getActionMenus(object)} trigger={["click"]}>
                <Button shape="round" icon="more"></Button>
              </Dropdown>
            ),
          },
      ];
    const isiart = []
        return(  
        <div>
        <Header/>
        <Navbar/>
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
              <table className="atasTable">
              <td>
              <p  className="h5kecil"> All Licious Articles  </p>
              </td>
              <td className="tdBuatan">
              <Link to="/CreateArticle"><a className="btn-push"> WRITE NEW </a></Link>
              </td>
            </table>
              <div className="divTabelArtikel">
                <Table columns={columns} dataSource={isiart}></Table>
              </div>
            <Footer/>
            </div>
        )
}

ManageArticle.defaultProps = {
    number: 1,
    id_article: 'dgdgfh',
    judul: 'dgdghfh',
    topik: 'gfgfh',
}

export default ManageArticle;

{/* <table className="table3">
	                <tr>
                        <th>No</th>
                        <th>ID_Artikel</th>
                        <th>Judul</th>
                        <th>Topik Artikel</th>
                        <th>Aksi</th>
	                </tr>
                    <tr>
                        <td>{props.number}</td>
                        <td>{props.id_article}</td>
                        <td>{props.judul}</td>
                        <td>{props.topik}</td>
                        <td>
                            <a>Delete</a>
                        </td>
                    </tr>
	            </table>  */}