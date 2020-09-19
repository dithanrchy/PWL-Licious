import React from 'react';
import './Profile.css';
import Header from '../../component/Header/header';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/footer';

const Profile = (props) => {
    return(
        <div>
        <Header/>
        <Navbar/>
        <br/><br/>
        {/* </form> */}
            <div className="divprof">
                <span className="border"></span>
                <h2 className="pmenu"> DATA PERSONAL </h2> 
                <span className="border"></span>
                <div className= "row">
                    <div className="col-25">
                    <label className="label" for="fname">Name</label>
                    </div>
                    <div className="col-75">
                        <div className="isidata">{props.name}
                        </div>
                    </div>
                </div>
                <div class = "row">
                    <div class="col-25">
                    <label class ="label" for="fname">Username</label>
                    </div>
                    <div class="col-75">
                        <div class="isidata">{props.username}
                    </div>
                    </div>
                </div>
                <div class = "row">
                    <div class="col-25">
                    <label class ="label" for="fname">Gender</label>
                    </div>
                    <div class="col-75">
                        <div class="isidata">{props.jk}
                        </div>
                    </div>
                </div>
                <br/>
                <span class="border"></span>
                <p class = "pmenu"> CONTACT </p>
                <span class="border"></span>
                <div class = "row">
                    <div class="col-25">
                        <label class ="label" for="fname">Email</label>
                    </div>
                    <div class="col-75">
                        <div class="isidata">{props.email}
                        </div>
                    </div>
                </div>
                <div class = "row">
                    <div class="col-25">
                    <label class ="label" for="fname">Phone</label>
                    </div>
                    <div class="col-75">
                        <div class="isidata">{props.phone}
                        </div>
                    </div>
                </div>
                {/* </form> */}
            </div>
            <br/><br/>
            <Footer/>
        </div>
    )
}

Profile.defaultProps = {
    name: 'Saya adalah Aku',
    username: '@siapayasaya',
    jk: 'Female',
    email: 'sayasiapa@gmail.com',
    phone: '000000000000'
}

export default Profile;
