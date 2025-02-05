import React, { useState, useEffect } from 'react';
import { Clock, FileText, ClipboardList } from 'lucide-react';
import Navbar from "../../../components/common/navbar/navbar";
import './withdrawal-history.css';

const WithdrawalHistory = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();

            const formattedDate = now.toLocaleDateString('th-TH', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            });

            const formattedTime = now.toLocaleTimeString('th-TH', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            });

            setDate(formattedDate);
            setTime(formattedTime);
        };

        updateDateTime();
        const timer = setInterval(updateDateTime, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="withdrawal-history-container">
            <video className="background-video" autoPlay muted loop playsInline>
                <source src="พื้นหลัง2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <header className="header">
                <div className="title">
                    <img src="/logo.png" alt="SAT Logo" className="logo" />
                    <div className="title-text">
                        <h1>SPORTS AUTHORITY OF THAILAND</h1>
                        <div className="sub-title">Computer Equipment Management System</div>
                    </div>
                </div>
                <div className="datetime">
                    <div className="date">{date}</div>
                    <div className="time">
                        <Clock className="clock-icon" size={18} />
                        {time}
                    </div>
                </div>
            </header>

            <Navbar />

            <main className="content">
                <div className="menu-container">
                    <h2>ประวัติการเบิก-การยืม-คืน</h2>
                    <div className="menu-grid">
                        <a href="/RequestHistory" className="menu-item">
                            <div className="menu-icon request-icon">
                                <FileText size={40} />
                            </div>
                            <span className="menu-text">ประวัติการเบิก</span>
                        </a>
                        <a href="/BorrowHistory" className="menu-item">
                            <div className="menu-icon borrow-icon">
                                <ClipboardList size={40} />
                            </div>
                            <span className="menu-text">ประวัติการยืม-คืน</span>
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default WithdrawalHistory;