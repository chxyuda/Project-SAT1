import React, { useEffect, useState } from "react";
import "./withdrawalHistory.css";

const WithdrawalHistory = () => {
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

            <nav className="nav">
                <a href="borrow.html">ยืมวัสดุ</a>
                <a href="returnเบิก.html">เบิกวัสดุ</a>
                <a href="track.html">ติดตามสถานะคำขอ</a>
                <a href="ประวัติการเบิกยืม.html">ประวัติการเบิก-การยืม-คืน</a>
                <a href="change_password.html">แก้ไขรหัสผ่าน</a>
                <a href="edit_profile.html">แก้ไขโปรไฟล์</a>
                <a href="LoginPage.html" className="logout">&#10140; Log out</a>
                <a href="dashboard.html">ฝ่ายสำนัก</a>
            </nav>

            <div className="content">
                <div className="box-container">
                    <h2>ประวัติการเบิก-การยืม-คืน</h2>
                    <div className="card-container">
                        <a href="ประวัติการขอเบิก.html" className="card card-issue">ประวัติการขอเบิก</a>
                        <a href="ประวัติการยืมคืน.html" className="card card-borrow">ประวัติการยืม-คืน</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WithdrawalHistory;
