import React from 'react';
import './AboutUs.css';
import { Tabs } from "antd";
// import { Tabs } from 'antd';
import han from '../../component/Pictures/hanipah.jpg';
import andika from '../../component/Pictures/Andikaa.jpeg';
import fifin from '../../component/Pictures/Fifin.jpeg';
import bunga from '../../component/Pictures/Bunga.jpg';
import ditha from '../../component/Pictures/ditha.png';
import yuda from '../../component/Pictures/Yuda2.jpg';
import firda from '../../component/Pictures/Firda.jpg';

function callback(key) {
    console.log(key);
  }

//   const { Tabs } = antd;

  const { TabPane } = Tabs;
const Person = () => {
    return(
        <div>
            <div className="timsection">
            <h2>Founder</h2>
            <span className="brdrr"></span>
            <Tabs defaultActiveKey="2" onChange={callback}>
            <TabPane tab="Andika" key="1">
                <div className="pss">
                <a><img src={andika}/></a>
                </div>
                <p  className="isifaq"> Andika Ferdiansyah <br/> 
                                     Tanggal Lahir : 23 Januari 1999 <br/> 
                                     NIM: F1D017006  </p>
            </TabPane>
    <TabPane tab="Hanifah" key="2">
    <div className="pss">
                <a><img src={han}/></a>
                </div>
                <p className="isifaq"> Nama : Hanifah BN <br/> 
                                Tanggal Lahir : 09 Mei 2001 <br/> 
                                NIM : F1D017024 </p>
    </TabPane>
    <TabPane tab="Fifin" key="3">
    <div className="pss">
                <a><img src={fifin}/></a>
                </div>
                <p className="isifaq"> Nama : Fifin Fajriani <br/> 
                                    Tanggal Lahir : 15 Februari 1999<br/> 
                                    NIM : F1D017022  </p>
    </TabPane>
  </Tabs>
  </div>
            <div className="timsection">
            <h2>Developer</h2>
            <span className="brdrr"></span>
            <Tabs defaultActiveKey="2" onChange={callback}>
            <TabPane tab="Bunga" key="1">
                <div className="pss">
                <a><img src={bunga}/></a>
                </div>
                <p  class="isifaq"> Nama: Bunga Ambarwati <br/> 
                                    Tanggal Lahir : 27 November 1998  <br/> 
                                     NIM: F1D017012 <br/> </p>
            </TabPane>
    <TabPane tab="Ditha" key="2">
    <div className="pss">
                <a><img src={ditha}/></a>
                </div>
                <p class="isifaq"> Nama : Ditha <br/> 
                                Tanggal Lahir : 18 Mei 1999 <br/> 
                                NIM : F1D017016 <br/> </p>
    </TabPane>
    <TabPane tab="Yuda" key="3">
    <div className="pss">
                <a><img src={yuda}/></a>
                </div>
                <p class="isifaq"> Nama : I Putu Pranata Kusuma Yuda <br/> 
                                    Tanggal Lahir : 3 Januari 2000<br/> 
                                    NIM : F1D017032 <br/> </p>
    </TabPane>
    <TabPane tab="Firda" key="4">
    <div className="pss">
                <a><img src={firda}/></a>
                </div>
                <p class="isifaq"> Nama : Nurmayani Firdaus <br/> 
                                    Tanggal Lahir : 10 Juli 1999<br/> 
                                    NIM : F1D017068 <br/> </p>
    </TabPane>
  </Tabs>
  </div>
       
        {/* <div class="timsection"><br/>
            <h2>Developer</h2>
            <span class="brdrr"></span>
            <div class="pss">
                <a href="#p4"><img src={bunga}/></a>
                <a href="#p5"><img src={ditha}/></a>
                <a href="#p6"><img src={yuda}/></a>
                <a href="#p7"><img src={firda}/></a>
            </div>
            <div class="sectionnn" id="p4">
                <span class="namename">Bunga</span>
                <span class="brdrr"></span>
                <p  class="isifaq"> Nama: Bunga Ambarwati <br/> 
                                    Tanggal Lahir : 27 November 1998  <br/> 
                                     NIM: F1D017012 <br/> </p>
            </div>
            <div class="sectionnn" id="p5">
                <span class="namename">Ditha</span>
                <span class="brdrr"></span>
                <p class="isifaq"> Nama : Ditha <br/> 
                                Tanggal Lahir : 18 Mei 1999 <br/> 
                                NIM : F1D017016 <br/> </p>
            </div>
            <div class="sectionnn" id="p6">
                <span class="namename"> Yuda </span>
                <span class="brdrr"></span>
                <p class="isifaq"> Nama : I Putu Pranata Kusuma Yuda <br/> 
                                    Tanggal Lahir : 3 Januari 2000<br/> 
                                    NIM : F1D017032 <br/> </p>
            </div>
            <div class="sectionnn" id="p7">
                <span class="namename"> Firda </span>
                <span class="brdrr"></span>
                <p class="isifaq"> Nama : Nurmayani Firdaus <br/> 
                                    Tanggal Lahir : 10 Juli 1999<br/> 
                                    NIM : F1D017068 <br/> </p>
            </div>
        </div>  */}
        </div>
    )
}

export default Person;