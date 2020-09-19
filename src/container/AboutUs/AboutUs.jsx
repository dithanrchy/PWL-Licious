import React from 'react';
import './AboutUs.css';
import Person from './Person';
import Header from '../../component/Header/header';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/footer';

class AboutUs extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Navbar/>
                <Person/>
                <Footer/>
            </div>
        )
    }
}

export default AboutUs;