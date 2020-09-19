import React,{useState} from "react";
import "./style.css";
import loginImg from "../../component/Pictures/logolicious_1.png";
import firebase from '../../config/firebase_config';
import { useAuthState } from 'react-firebase-hooks/auth';
import Home from '../Home/Home';
import {Redirect,Route} from 'react-router-dom';
import Swal from 'sweetalert2';
import { useDocument } from 'react-firebase-hooks/firestore';

const CurrentUser = (props) => {
  const [user, initialising, error] = useAuthState(firebase.auth());
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const login = () => {
    Swal.fire({
      title: 'Are you sure?',
      // text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, I want to log in!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Logged In!',
          '',
          'success'
        )
        firebase.auth().signInWithEmailAndPassword(email,password);
      }
      // else{
      //   const [value, loading, error] = useDocument (
      //         firebase.firestore().collection('users').where("Email", "==", `${email}`),("Password", "==", `${password}`),
      //         {
      //           snapshotListenOptions: { includeMetadataChanges: true },
      //         }
      //     );
      //     if(value!=null){
      //       Swal.fire(
      //         'SEPPPP!',
      //         '',
      //         'success'
      //       )
      //     }}
    })
};
// const logout = () => {
//   firebase.auth().signOut();
// };

if (initialising) {
  return (
    <div>
      <p>Initialising User...</p>
    </div>
  );
}
if (error) {
  return (
    <div>
      <p>Error: {error}</p>
    </div>
  );
}
if (user) {
  return (
    <div>
      <p>Current User: {user.email}</p>
      <Route path="/" exact component={Home} />
      <Redirect to={'/'}/>
    </div>
  );
}
console.log(email)
console.log(password)
return (
  <div className="base-container" ref={props.containerRef}>
  <div className="header">Login</div>
  <div className="content">
    <div className="image">
      <img src={loginImg} />
    </div>
    <div className="form">
      <div className="form-group">
        <label email="email">Email</label>
        <input onChange={e=>setEmail(e.currentTarget.value)} value={email} type="email" name="email" placeholder="email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input onChange={e=>setPassword(e.currentTarget.value)} value={password} type="password" name="password" placeholder="password" />
      </div>
    </div>
  </div>
  <div className="footer">
    <button type="submit" onClick={login}  className="btn">
      Login
    </button>
  </div>
</div>
)
};

export class Login extends React.Component {
    constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

 

      
  render() {
    return (
      <CurrentUser/>
    );
  }
}

export default Login;
