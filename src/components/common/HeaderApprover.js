import React, { useEffect, useState } from 'react';
import Mylogo from '../../assets/Logo.png'
import "./HeaderApprover.css"

const HeaderApprover = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            const dateOptions = {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                timeZone: "Asia/Bangkok",
            };
            const timeOptions = {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                timeZone: "Asia/Bangkok",
            };
            setDate(now.toLocaleDateString("th-TH", dateOptions));
            setTime(now.toLocaleTimeString("th-TH", timeOptions));
        };

        updateDateTime();
        const interval = setInterval(updateDateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (

        <header>
            <div className="header-left">
                <img src={Mylogo} alt="Sports Authority of Thailand" className="logo" />
                <div className='text'>
                    <h1>SPORTS AUTHORITY OF THAILAND</h1>
                    <h2>Computer Equipment Management System</h2>
                </div>
            </div>
            <div className="date-time">
                <div className="date">{date}</div>
                <div className="time">{time}</div>
            </div>
        </header>

    );
};

export default HeaderApprover;

