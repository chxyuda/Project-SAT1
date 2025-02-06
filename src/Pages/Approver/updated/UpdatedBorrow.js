import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import NavbarApprover from '../../../components/common/navbarapprover';
import './UpdatedBorrow.css';
import HeaderApprover from '../../../components/common/HeaderApprover';


const UpdatedBorrow = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    // Sample data
    const data = [
        [
            {
                id: 1,
                department: "ฝ่ายไอที",
                recipient: "สมชาย",
                requestDate: "01/01/2025",
                returnDate: "02/01/2025",
                note: "ด่วน",
                details: "รายละเอียดการยืมคืน.html",
            },
        ],
        [], // Page 2 empty
        [], // Page 3 empty
    ];

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

            const formattedDate = `${weekday}ที่ ${day} ${month} พ.ศ. ${thaiYear}`;
            const formattedTime = now.toLocaleTimeString('th-TH');

            setDate(formattedDate);
            setTime(formattedTime);
        };

        updateDateTime();
        const timer = setInterval(updateDateTime, 1000);
        return () => clearInterval(timer);
    }, []);

    const goToPage = (page) => {
        setCurrentPage(page);
    };

    const renderTableData = () => {
        const pageData = data[currentPage - 1];

        if (!pageData || pageData.length === 0) {
            return (
                <tr>
                    <td colSpan="7" style={{ textAlign: 'center' }}>ไม่มีข้อมูล</td>
                </tr>
            );
        }

        return pageData.map((row) => (
            <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.department}</td>
                <td>{row.recipient}</td>
                <td>{row.requestDate}</td>
                <td>{row.returnDate}</td>
                <td>{row.note}</td>
                <td>
                    <button className="btn-detail" onClick={() => window.location.href = row.details}>
                        รายละเอียด
                    </button>
                </td>
            </tr>
        ));
    };

    return (
        <div className="dashboard">
            <HeaderApprover />
            <NavbarApprover />

            <div className="content">
                <div className="section-title">สถานะการยืม-คืน</div>

                <table className="table">
                    <thead>
                        <tr>
                            <th>ลำดับ</th>
                            <th>ฝ่ายสำนัก</th>
                            <th>ชื่อผู้ยืม</th>
                            <th>วันทียืม</th>
                            <th>วันที่คืน</th>
                            <th>หมายเหตุการยืม-คืน</th>
                            <th>รายละเอียด</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTableData()}
                    </tbody>
                </table>

                <div className="pagination">
                    {[1, 2, 3].map((page) => (
                        <button
                            key={page}
                            onClick={() => goToPage(page)}
                            className={currentPage === page ? 'active' : ''}
                        >
                            {page}
                        </button>
                    ))}
                </div>

                <button
                    className="back-button"
                    onClick={() => window.location.href = '#approver'}
                >
                    ย้อนกลับ
                </button>
            </div>
        </div>
    );
};

export default UpdatedBorrow;