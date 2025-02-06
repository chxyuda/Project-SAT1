import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import NavbarApprover from '../../../components/common/navbarapprover';
import HeaderApprover from '../../../components/common/HeaderApprover';
import './BorrowReturn.css';

const BorrowReturn = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [searchDate, setSearchDate] = useState('');

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

    const searchByDate = () => {
        if (!searchDate) {
            alert("กรุณาเลือกวันที่ก่อนทำการค้นหา");
            return;
        }
        // Implement search functionality here
        alert("ไม่พบข้อมูลสำหรับวันที่ที่เลือก");
    };

    const handlePageClick = () => {
        alert('ฟังก์ชันแบ่งหน้ายังไม่ทำงาน');
    };

    return (
        <div className="borrow-return-container">
            <HeaderApprover />

            <div className="content">
                <div className="section-title">ข้อมูลการยืม-คืน</div>
                <div className="total-items">จำนวนการยืม-คืน: 0 รายการ</div>

                <div className="button-container">
                    <button onClick={() => window.location.href = '#borrow'}>ขอยืม</button>
                    <button onClick={() => window.location.href = '#borrow-return'}>ยืม - คืน</button>
                </div>

                <div className="search-bar">
                    <input
                        type="date"
                        value={searchDate}
                        onChange={(e) => setSearchDate(e.target.value)}
                        placeholder="ค้นหาด้วยวันที่"
                    />
                    <button onClick={searchByDate}>ค้นหา</button>
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th>ลำดับ</th>
                            <th>ชื่อผู้ขอยืม-คืน</th>
                            <th>ฝ่ายสำนัก</th>
                            <th>ชื่อวัสดุอุปกรณ์</th>
                            <th>วันที่ยืม</th>
                            <th>วันที่คืน</th>
                            <th>จำนวน</th>
                            <th>คงเหลือ</th>
                            <th>หมายเหตุ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={9} style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                ไม่มีข้อมูล
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="pagination">
                    {[1, 2, 3, 4, 5].map((page) => (
                        <button key={page} onClick={handlePageClick}>
                            {page}
                        </button>
                    ))}
                </div>

                <div className="back-button-container">
                    <a href="/approver-page" className="back-button">ย้อนกลับ</a>
                </div>
            </div>
        </div>
    );
};

export default BorrowReturn;