import React, { Component } from "react";
import { CgInstagram } from "react-icons/cg";
import { BsTwitter } from "react-icons/bs";
import { BsReddit } from "react-icons/bs";

class  Naslovna extends Component{

    render() {
        const myStyle={

            height:'0vx',
            fontSize:'20px',
            marginTop:'200px',
            backgroundSize: "cover",
            backgroundRepeat: 'no-repeat',
            AnimationEffect: 'pop 0.4s',
            textDecoration: 'underline',       

        };
    
 
    return(
        <div>
        
        <div style={myStyle}>
        <h1>Dobrodošli na sajt organizacije turnira!
            <br></br>
            Ukoliko želite da se prijavite na turnir, ukucajte rutu prijava!
            <br></br>
            Ukoliko želite da proverite status vase prijave, ukucajte rutu provera!
        </h1>
        </div>
            <button className="btn1">
          <CgInstagram />
        </button>

        <button className="btn2">
          <BsTwitter />
        </button>
        <button className="btn3">
          <BsReddit />
        </button>
        
        
    </div>
    );
    }
    
 }
export default Naslovna;