import React from 'react';
import FaqContent from './faqcontent';
import Header from '../../component/Header/header';
import Footer from '../../component/Footer/footer';
import Navbar from '../../component/Navbar/Navbar';

class FAQ extends React.Component{
    render(){
        return(
            <div>
                <Header/> 
                <Navbar/><br/>
                <p class="h5baru">FAQ Section</p>
                <FaqContent que="Apa itu website psikologi Licious?"
                 ans="Licious adalah sebuah website psikologi yang dibuat berdasarkan kasus-kasus yang 
                 sedang marak terjadi akhir-akhir ini dengan tujuan untuk membantu para pengunjung yang 
                 memiliki masalah psikologi atau kasus traumatis yang ingin menemukan solusi serta 
                 bantuan untuk menghadapi masalah mereka. Website ini menyediakan beberapa fitur seperti 
                 fitur QnA yang berguna untuk menampung pertanyaan pengunjung yang akan dijawab langsung 
                 oleh para konsultan. Selain itu juga terdapat menu article yang dapat diakses oleh 
                 pengunjung tanpa harus melakukan login terlebih dahulu yang berisikan artikel-artikel 
                 beserta berita yang telah dikategorikan sesuai dengan masalah psikologi masing-masing." />
                 <FaqContent que="Mengapa pengunjung perlu melakukan login untuk mengakses fitur QnA?"
                 ans="Pengunjung harus melakukan login terlebih dahulu untuk mengakses fitur QnA 
                 dikarenakan di dalam fitur QnA berisi profil konsultan yang berisikan informasi 
                 pribadi dari konsultan yang tidak dapat diakses oleh sembarang orang agar tidak 
                 disalahgunakan oleh pihak-pihak yang kurang bertanggung jawab yang bisa jadi menyalahgunakan 
                 fitur dari web Licious, maka dari itu untuk mengakses fitur ini harus dilakukan login 
                 terlebih dahulu agar informasi dari pengunjung dapat diketahui apabila terjadi hal-hal 
                 yang tidak diinginkan." />
                <Footer/>
            </div>
        )
    }
}

export default FAQ;