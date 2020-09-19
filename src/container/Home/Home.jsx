import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../component/Navbar/Navbar';
import Header from '../../component/Header/header';
import Footer from '../../component/Footer/footer';
import 'antd/dist/antd.less'; 
import './Home.css';
import { Carousel } from 'antd';
import hm1 from '../../component/Pictures/hm1.jpg';
import hm2 from '../../component/Pictures/hm2.jpg';
import hm3 from '../../component/Pictures/hm3.jpg';
import aboutus from '../../component/Pictures/aboutus.png';
import faq from '../../component/Pictures/faq.png';
import 'antd/dist/antd.css'; 


class SlideShow extends React.Component{
  render(){
      return(
          <Carousel autoplay>
          <div>
            <div>
              <img alt="" className="slide-img" src={hm1}></img>
            </div>
          </div>
          <div>
            <div>
              <img alt="" className="slide-img" src={hm2}></img>
            </div>
          </div>
          <div>
            <div>
              <img alt="" className="slide-img" src={hm3}></img>
            </div>
          </div>
          </Carousel>
      );
  }
}

class HomeBox extends React.Component{
  render(){
    return(
      <div>
      <table align="center" className="thome"> 
        <tr>
            <td className="tdhome" bgcolor="#F2D5C9" > 
                <div>
                  <img alt="contact icon" className="ikonhome" src={faq} /> <br/> <br/>
                </div>
                <Link to="FAQ"><a className="b1"> FAQ </a></Link> 
                </td>
            <td className="tdhome" bgcolor="#4DCCBD" >  
                <div>
                  <img  alt="about-us icon" className="ikonhome" src={aboutus} /> <br/> <br/>
                </div>
                <Link to="AboutUs"><a className="b2"> ABOUT US </a></Link> </td>
        </tr>
    </table>
    </div>
    )
  }
}


class Home extends Component{
    render(){
        return(
            <div>
              <Header />
              <Navbar/>
              <SlideShow />
              <br></br> <br></br>
              <HomeBox/>
              <br/>
              <Footer/>
            </div>
        )
    }
}

export default Home;