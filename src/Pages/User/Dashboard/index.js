// Dashboard.js
import React, { useEffect, useState } from "react";
import "./styles.css";

const Dashboard = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
            setDate(now.toLocaleDateString("th-TH", options));
            setTime(now.toLocaleTimeString("th-TH", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            {/* วิดีโอพื้นหลัง */}
            <video className="background-video" autoPlay muted loop>
                <source src="พื้นหลัง2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Header */}
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

            {/* Navigation */}
            <div className="nav">
                <a href="borrow.html">ยืมวัสดุ</a>
                <a href="returnเบิก.html">เบิกวัสดุ</a>
                <a href="track.html">ติดตามสถานะคำขอ</a>
                <a href="ประวัติการเบิกยืม.html">ประวัติการเบิกคืน</a>
                <a href="change_password.html">แก้ไขรหัสผ่าน</a>
                <a href="edit_profile.html">แก้ไขโปรไฟล์</a>
                <a href="LoginPage.html" className="logout">➡ Log out</a>
            </div>

            {/* Content */}
            <div className="content">
                <div className="box-container">
                    <div className="icon">👤</div>
                    <div className="text">ฝ่ายสำนัก</div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
