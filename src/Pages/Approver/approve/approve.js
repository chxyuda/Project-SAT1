import React, { useState, useEffect } from 'react';
import { Clock, UserCircle } from 'lucide-react';
import Navbar from '../common/navbar/navbar';
import './approve.css';

const Approve = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            const thaiYear = now.getFullYear() + 543;
            const thaiMonths = [
                "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
                "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
            ];

            const day = now.getDate();
            const month = thaiMonths[now.getMonth()];
            const weekday = now.toLocaleDateString('th-TH', { weekday: 'long' });

            const formattedDate = `วัน${weekday}ที่ ${day} ${month} พ.ศ. ${thaiYear}`;
            const formattedTime = now.toLocaleTimeString('th-TH');

            setDate(formattedDate);
            setTime(formattedTime);
        };

        updateDateTime();
        const timer = setInterval(updateDateTime, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="approve-container">
            <div className="header">
                <div className="title">
                    <Clock className="logo" size={40} />
                    <div>
                        SPORTS AUTHORITY OF THAILAND
                        <div className="sub-title">Computer Equipment Management System</div>
                    </div>
                </div>
                <div className="datetime">
                    <span className="date">{date}</span>
                    <span className="time">{time}</span>
                </div>
            </div>

            <Navbar />

            <div className="content">
                <div className="box-container">
                    <div className="icon">
                        <UserCircle size={60} />
                    </div>
                    <div className="text">
                        ผู้อนุมัติ
                    </div>
                </div>
            </div>

            <footer className="footer">
                <p>&copy; 2024 ระบบบริหารการจัดการวัสดุคอมพิวเตอร์</p>
            </footer>
        </div>
    );
};

export default Approve;