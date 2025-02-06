import React, { useEffect, useState } from 'react';
import Mylogo from '../assets/Logo.png'

const Header = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const updateTime = () => {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setDate(now.toLocaleDateString('th-TH', options));
    setTime(now.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
  };

  useEffect(() => {
    updateTime();
    const intervalId = setInterval(updateTime, 1000); // อัปเดตเวลาอัตโนมัติทุกวินาที
    return () => clearInterval(intervalId); // ทำความสะอาดเมื่อคอมโพเนนต์ถูกลบ
  }, []);

  return (
    <div className="header">
      <div className="title">
        <img src={Mylogo} alt="Logo" />
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
  );
};

export default Header;

