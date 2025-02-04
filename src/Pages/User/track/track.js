import React, { useEffect, useState } from "react";
import "./track.css"; // แยก CSS ออกไปเป็นไฟล์เฉพาะ
import navbar from "../../../components/common/navbar";


    return (
        <div>
            <video autoPlay loop muted playsInline id="background-video">
                <source src="พื้นหลัง2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="header">
                <div className="title">
                    <img src="logo.png" alt="Logo" />
                    <div>
                        SPORTS AUTHORITY OF THAILAND
                        <div className="sub-title">Computer Equipment Management System</div>
                    </div>
                </div>
                <div className="datetime">
                    <div className="date">{date}</div>
                    <div className="time">{time}</div>
                </div>
            </div>
            < nav></nav>
            <div className="content">
                <div className="box-container">
                    <h2>ติดตามสถานะคำขอ</h2>
                    <div className="card-container">
                        <a href="/BorrowStatus" className="card card-issue">สถานะการขอเบิก</a>
                        <a href="/RequestStatus" className="card card-borrow">สถานะการยืม-คืน</a>
                    </div>
                </div>
            </div>
        </div>
    );

export default Track;
