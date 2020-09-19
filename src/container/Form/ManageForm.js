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

const ManageForm = (props) => {
    const [value, loading, error] = useCollection(
        firebase.firestore().collection('form'),
        {
          snapshotListenOptions: { includeMetadataChanges: true },
        }
    );
    const getActionMenus = object => {
        return (
          <Menu>
            <Menu.Item key="1">
              <p onClick={e => fconfig.firestore().collection('form').doc(object.key).delete()}>Delete</p>
            </Menu.Item>
            
          </Menu>
        );
      };
    const columns = [
        {
          title: 'Nama',
          dataIndex: 'nama',
          key: 'nama',
        },
        
        {
            title: 'Action',
            key: 'Action',
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
              <p  className="h5kecil"> All Licious Forms  </p>
              </td>
              </table>
              <div className="divTabelArtikel">
                <Table columns={columns} dataSource={isiart}></Table>
              </div>
              <Footer/>
        </div>
  );
}


ManageForm.defaultProps = {
    number: 1,
    id_article: 'dgdgfh',
    judul: 'dgdghfh',
    topik: 'gfgfh',
}

export default ManageForm;

