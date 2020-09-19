import React from 'react';
import './Admin.css';
import Header from '../../component/Header/header';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/footer';
import { Link } from 'react-router-dom';


class Dashboard extends React.Component{
    toggleSidebar(){
        document.getElementById("sidebar").classList.toggle('active');
    }
    render(){
        return(
            <div>
            <Header/>
            <Navbar/>
            <div className="pisah">
            <p className="h5baru">DASHBOARD</p>
            <div className="middle">
                <Link to="ManageArticle"><button className="bttn bttn2">Artikel</button> </Link>
                <Link to="ManageForm"><button className="bttn bttn2">Form</button> </Link>
            </div>
            </div>
            <div>
                <Footer/>
            </div>
            </div>
        )
    }
}

export default Dashboard;