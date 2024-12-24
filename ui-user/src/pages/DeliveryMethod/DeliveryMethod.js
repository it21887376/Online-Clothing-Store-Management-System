import React from 'react'
import './DeliveryMethod.css'
import kapuraka from "../../assets/images/Rectangle 28.png";
import dhl from "../../assets/images/Rectangle 29.png";
import delivery from "../../assets/images/Rectangle 60.png"
import { useHistory } from "react-router-dom";

function DeliveryMethod() {

  const history = useHistory();

  function handleClickDevivery() {
    history.push("/delivery");
  }

  return (
    <div>
      <div style={{display: "flex", justifyContent:"space-around", marginBottom:"50px"}}>
        <div>
          <img src={delivery} alt="vehicle"/>
        </div>
        <div>
          <div style={{flex:1, width:"120px", height:"60px", backgroundColor:"#AAAD19", borderRadius:30, borderColor:"#000", marginTop:30, padding:10, paddingTop: 10 , 
          }} onClick={handleClickDevivery}>Add Deliverer</div><br/>
          <div style={{flex:1, width:"120px", height:"60px", backgroundColor:"#AAAD19", borderRadius:30, borderColor:"#000", marginTop:30, padding:10, paddingTop: 10}}>Other Opetions</div>
        </div>
      </div>
      <h1 style={{marginLeft:"100px", padding: "30px"}}>Delivery</h1>
      <div style={{display: "flex", justifyContent:"space-around"}}>
        <div style={{borderWidth:1, borderColor:"#000", display:"flex"}}>
            <div>
              <img src={kapuraka} alt="Kapruka"/>
            </div>
            <div style={{width:"300px"}}>
              Tempor labore irure fugiat ad cupidatat esse sint duis mollit minim dolore nostrud fugiat eu.
            </div>
        </div>
        <div style={{borderWidth:1, borderColor:"#000", display:"flex"}}>
          <div>
            <img src={dhl} alt="DHL"/>
          </div>
          <div style={{width:"300px"}}>
            Tempor labore irure fugiat ad cupidatat esse sint duis mollit minim dolore nostrud fugiat eu.
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeliveryMethod