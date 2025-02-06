import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Clock } from 'lucide-react';
import NavbarApprover from '../../../components/common/navbarapprover';
import './ReqBorrow.css';
import HeaderApprover from '../../../components/common/HeaderApprover';

const ReqBorrow = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [dateTime, setDateTime] = useState({ date: "", time: "" });

    const data = [[], [], [], []]; // ข้อมูลแบ่งเป็นหน้า ๆ

    useEffect(() => {
        updateDateTime();
        const interval = setInterval(updateDateTime, 1000); // อัปเดตเวลาทุก 1 วินาที
        return () => clearInterval(interval);
    }, []);

    const updateDateTime = () => {
        const now = new Date();
        const thaiYear = now.getFullYear() + 543;
        const thaiMonths = [
            "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
            "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
        ];
        const formattedDate = `${now.toLocaleDateString("th-TH", {
            weekday: "long",
        })}ที่ ${now.getDate()} ${thaiMonths[now.getMonth()]} พ.ศ. ${thaiYear}`;
        setDateTime({ date: formattedDate, time: now.toLocaleTimeString("th-TH") });
    };

    const goToPage = (page) => {
        setCurrentPage(page);
    };

    const goBack = () => {
        navigate("/approver-page");
    };

    return (
        <div className="req-borrow-history-container">

            <HeaderApprover />

            <div className="content">
                <h2 className="section-title">ประวัติการยืม-คืน</h2>
                <p>หน้าที่ {currentPage} จากทั้งหมด {data.length} หน้า</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ลำดับ</th>
                            <th>ชื่อยืม-คืน</th>
                            <th>ฝ่ายสำนัก</th>
                            <th>อุปกรณ์</th>
                            <th>วันที่ยืม-คืน</th>
                            <th>วันที่อนุมัติ</th>
                            <th>สถานะ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data[currentPage - 1].length > 0 ? (
                            data[currentPage - 1].map((row, index) => (
                                <tr key={index}>
                                    <td>{row.id}</td>
                                    <td>{row.name}</td>
                                    <td>{row.department}</td>
                                    <td>{row.equipment}</td>
                                    <td>{row.requestDate}</td>
                                    <td>{row.approveDate}</td>
                                    <td>{row.status}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" style={{ textAlign: "center" }}>ไม่มีข้อมูล</td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <div className="pagination">
                    {data.map((_, index) => (
                        <button
                            key={index}
                            className={currentPage === index + 1 ? "active" : ""}
                            onClick={() => goToPage(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>

                <button className="back-button" onClick={goBack}>
                    ย้อนกลับ
                </button>
            </div>
        </div>
    );
};

export default ReqBorrow;