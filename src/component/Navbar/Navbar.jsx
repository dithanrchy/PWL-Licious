import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
// import { Affix, Icon } from 'antd';
import './Navbar.css';
import logo from '../Pictures/logolicious.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from '../../config/firebase_config';
import Swal from 'sweetalert2';

const Navbar = () =>{
  const logout = () => {
      Swal.fire({
        title: 'Are you sure?',
        // text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, I want to log out!'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Logged Out!',
            '',
            'success'
          )
          firebase.auth().signOut();
        }
      })
  };
  const [user] = useAuthState(firebase.auth());
  const menulogin = () => {
    if (user) {
      return (
        <div>
          <li><Link to="/" onClick={logout}>Logout</Link></li>
          <li><Link to="/Dashboard">Dashboard</Link></li>
        </div>
      )
    } else {
      return (
      <div>
            <Link to="/Form">Form</Link>
            <Link to="/Login">Login</Link>
            
      </div>
      )
    }
  }
    return (
      <div
        className="scrollable-container"
      >
        <div className="background">
          <div className="divmenu">
          <Link to="/"> <img src={logo} className="logo"/></Link>
        <ul>
            <li>{menulogin()}</li>
            <li className="dropdown">
                <a className="dropbtn">Article</a>
                <div className="dropdown-content">
                  <Link to="/MOOD/MOOD_DISORDERS/Article"  refresh="true"><a>Mood Disorders</a></Link>
                    <Link to="/ANX/ANXIETY_DISORDERS/Article"  refresh="true"><a>Anxiety Disorders</a></Link>
                    <Link to="/TRA/TRAUMA-RELATED_DISORDERS/Article"  refresh="true"><a>Trauma-related Disorders</a></Link>
                    <Link to="/PRSN/PERSONALITY_DISORDERS/Article"  refresh="true"><a>Personality Disorders</a></Link>
                    <Link to="/DCTV/DISSOCIATIVE_DISORDERS/Article"  refresh="true"><a>Dissociative Disorders</a></Link>
                    <Link to="/PSKP/PSYCHOTIC_DISORDERS/Article"  refresh="true"><a>Psychotic Disorders</a></Link>
                    <Link to="/EATI/EATING_DISORDERS/Article"  refresh="true"><a>Eating Disorders</a></Link>
                    <Link to="/SXL/SEXUAL_DISORDERS/Article"  refresh="true"><a>Sexual Disorders</a></Link>
                    <Link to="/ADD/ADDICTION/Article"  refresh="true"><a>Addiction</a></Link>
                    <Link to="/BLY/BULLYING/Article"  refresh="true"><a>About Bullying</a></Link>
                </div>
            </li>
            <li><Link to="/">Home</Link></li>
          </ul>
    </div> 
        </div>
      </div>
    );
}

export default Navbar;