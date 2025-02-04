import React from 'react'
import './dashboard.css'
import navbar from '../../../components/common/navbar'
export default function  dashboard() {
  return (
    <div>
        {/* วิดีโอพื้นหลัง  */}
    <video className="background-video" autoPlay muted loop>
        <source src="พื้นหลัง2.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
    </video>

    <div className="header">
        <div className="title">
            <img src="logo.png" alt="Logo"/>
            <div>
                SPORTS AUTHORITY OF THAILAND
                <div className="sub-title">Computer Equipment Management System</div>
            </div>
        </div>
        <div className="datetime">
            <div id="date" className="date"></div>
            <div id="time" className="time"></div>
        </div>
    </div>
    < nav></nav>
    <div className="content">
        <div className="box-container">
            <div className="icon">
                &#128100;
            </div>
            <div className="text">
                ฝ่ายสำนัก
            </div>
        </div>
    </div>
    </div>
  )
}
