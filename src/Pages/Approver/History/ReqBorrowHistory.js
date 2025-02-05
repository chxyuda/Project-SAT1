import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import NavbarApprover from '../common/navbar/navbarapprover';
import './ReqBorrowHistory.css';

const ReqBorrowHistory = () => {
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
    <div className="req-borrow-history-container">
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

      <NavbarApprover />

      <div className="content">
        <div className="box-container">
          <div className="section-title">ประวัติการเบิกยืม</div>
          <div className="box-row">
            <div 
              className="box box-request" 
              onClick={() => window.location.href = '#request-history'}
            >
              ประวัติการเบิก
            </div>
            <div 
              className="box box-borrow" 
              onClick={() => window.location.href = '#borrow-history'}
            >
              ประวัติการยืม - คืน
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReqBorrowHistory;