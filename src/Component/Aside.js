

import React from 'react'
import { FaHome, FaRegCompass, FaChromecast, FaMedapps } from "react-icons/fa";

export default function Aside() {
    return (
        <div className="aside"  style={{padding:"10px 10px"}}>
            <div className="home" style={{marginTop:30}}>
                  <FaHome style={{fontSize:20}}/>
                  <p style={{fontSize:12}}>Home</p>
            </div>
            <div className="explorer" style={{marginTop:30}}>
                  <FaRegCompass style={{fontSize:20}}/>
                  <p style={{fontSize:12}}>Explorer</p>
            </div>
            <div className="abonnements" style={{marginTop:30}}>
                  <FaMedapps style={{fontSize:20}}/>
                  <p style={{fontSize:12}}>Abonnement</p>
            </div>
            <div className="bib" style={{marginTop:30}}>
                  <FaChromecast style={{fontSize:20}}/>
                  <p style={{fontSize:12}}>Bibliotheque</p>
            </div>
            
        </div>
    )
}
