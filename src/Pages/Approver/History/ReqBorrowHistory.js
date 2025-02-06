import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { Clock } from 'lucide-react';
import NavbarApprover from '../../../components/common/navbarapprover';
import './ReqBorrowHistory.css';
import HeaderApprover from '../../../components/common/HeaderApprover';

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

  const navigate = useNavigate(); // ใช้สำหรับเปลี่ยนหน้าแบบ React Router

  return (
    <div className="req-borrow-history-container">

      <HeaderApprover />
      <NavbarApprover />

      <div className="content-rqhi">
        <div className="box-container-rqhi">
          <div className="section-title-rqhi">ประวัติการเบิกยืม</div>
          <div className="box-row-rqhi">
            <div
              className="box-rqhi box-request-rqhi"
              onClick={() => navigate("/reqhis-page")}
            >
              ประวัติการเบิก
            </div>
            <div
              className="box-rqhi box-borrow-rqhi"
              onClick={() => navigate("/reqborrow-page")}
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