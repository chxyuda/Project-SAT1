// ChangePassword.js
import React, { useState, useEffect } from "react";
import "./change_password.css";

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("เปลี่ยนรหัสผ่านสำเร็จ!");
    };

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

            <div className="content">
                <div className="form-container">
                    <h2>แก้ไขรหัสผ่าน</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="current-username">Username:</label>
                            <input type="text" id="current-username" value="JohnDoe" readOnly />
                        </div>
                        <div className="form-group">
                            <label htmlFor="new-password">รหัสผ่านใหม่:</label>
                            <input type="password" id="new-password" placeholder="รหัสผ่านใหม่" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirm-password">ยืนยันรหัสผ่านใหม่:</label>
                            <input type="password" id="confirm-password" placeholder="ยืนยันรหัสผ่านใหม่" required />
                        </div>
                        <div className="buttons">
                            <a href="/dashboard">ย้อนกลับ</a>
                            <button type="submit">บันทึก</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
export default ChangePassword;
