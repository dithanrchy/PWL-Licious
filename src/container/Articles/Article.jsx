import React from 'react';
import './Article.css';
import IsiArticle from './IsiArticle';
import arimg from '../../component/Pictures/arimg.png';
import Header from '../../component/Header/header';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/footer';
 
// function setTampilTema(props) {
//     // const tampiltema = [];
//     if(props=="MOOD"){
//         tampiltema: "Mood Disorder";
//     }
//     return props.tampiltema;
// }
const Article = (props) => {
    props = {
        tema: window.location.pathname.split('/')[1],
        tampiltema: window.location.pathname.split('/')[2]
    }
        return(
            <div>
            <Header/>
            <Navbar/>
            <br/> <br/>
            <table className="artab" align="center" valign="center">
                <tr>
                    <td colspan="2"> 
                    <img src={arimg} className="arlist" /> 
                    <p className="arkind"> ARTICLE ON {props.tampiltema} </p> 
                    </td>
                </tr>
            </table>
            <br/> <br/>
            
            <IsiArticle tema={props.tema} tampiltema={props.tampiltema}/>
            
            <br/> <br/>
            <br/> <br/>
            <Footer/>
            </div>
        )
}

export default Article;