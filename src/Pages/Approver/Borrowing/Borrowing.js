import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import Navbar from '../../../components/common/navbarapprover';
import './Borrowing.css';
import HeaderApprover from '../../../components/common/HeaderApprover';

const Borrowing = () => {
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

            setDate(`วัน${weekday}ที่ ${day} ${month} พ.ศ. ${thaiYear}`);
            setTime(now.toLocaleTimeString('th-TH'));
        };

        updateDateTime();
        const timer = setInterval(updateDateTime, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <>

            <HeaderApprover />
            <div className="content">
                <div className="section-title">ข้อมูลการขอยืม</div>
                <div id="totalItems" style={{ marginBottom: "20px", fontSize: "18px", color: "#555" }}>
                    จำนวนการขอยืม: 0 รายการ
                </div>
                <div className="button-container">
                    <button onClick={() => window.location.href = 'ขอยืม.html'}>ขอยืม</button>
                    <button onClick={() => window.location.href = 'ยืมคืน.html'}>ยืม - คืน</button>
                </div>
                <div className="search-bar">
                    <input type="date" id="searchDate" placeholder="ค้นหาด้วยวันที่" />
                    <button onClick={() => console.log('Implement search function')}>ค้นหา</button>
                </div>
                <table className="table" id="dataTable">
                    <thead>
                        <tr>
                            <th>ลำดับ</th>
                            <th>ชื่อผู้ขอยืม</th>
                            <th>ฝ่ายสำนัก</th>
                            <th>ชื่อวัสดุอุปกรณ์</th>
                            <th>วันที่ขอยืม</th>
                            <th>จำนวน</th>
                            <th>คงเหลือ</th>
                            <th>หมายเหตุ</th>
                        </tr>
                    </thead>
                    <tbody id="tableBody">
                        <tr>
                            <td colSpan="8" style={{ textAlign: "center", verticalAlign: "middle" }}>
                                ไม่มีข้อมูล
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="back-button-container">
                    <a href="/approver-page" className="back-button">ย้อนกลับ</a>
                </div>
            </div>
        </>
    );
};

export default Borrowing;
