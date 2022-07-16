import React from 'react';
import { useEffect, useState } from 'react';
import image from '../../images/bankImage.png';
import { Image } from 'react-bootstrap';
import Modal from '../Modal/Modal';

function Home() {
  const [modalShow, setModalShow] = useState(false);

    return (
      <>
      <div  style={{padding:'20px'}}>
        <h1 style={{textAlign: "center", fontSize : '50px'}} >WELCOME TO THE MOHAK SPARK BANK</h1>
        <Image
          img src='https://internship.thesparksfoundation.info/assests/img/logo.png' 
          alt="image"  
          style={{margin :'50px', marginLeft : '270px', marginBottom: '50px', alignContent: "center" }}
          width={500}
          height={300}
        />  
      </div>
    </>
    );
}

export default Home;