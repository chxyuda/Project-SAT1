import React, { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';
import Navbar from "../../../components/common/navbar/navbar";
import './borrow-status.css';

const BorrowStatus = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [borrowings, setBorrowings] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Update date and time
    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();

            // Format date: DD/MM/YYYY
            const formattedDate = now.toLocaleDateString('th-TH', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            });

            // Format time: HH:MM:SS
            const formattedTime = now.toLocaleTimeString('th-TH', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            });

            setDate(formattedDate);
            setTime(formattedTime);
        };

        // Update immediately and then every second
        updateDateTime();
        const timer = setInterval(updateDateTime, 1000);

        return () => clearInterval(timer);
    }, []);

    // Fetch borrowing data
    useEffect(() => {
        const fetchBorrowings = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/borrowings');
                const data = await response.json();
                setBorrowings(data);
            } catch (error) {
                console.error('Error fetching borrowings:', error);
            }
        };

        fetchBorrowings();
    }, []);

    // Calculate pagination
    const totalPages = Math.ceil(borrowings.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentBorrowings = borrowings.slice(startIndex, endIndex);

    // Get status badge class
    const getStatusBadgeClass = (status) => {
        switch (status) {
            case 'pending':
                return 'status-pending';
            case 'approved':
                return 'status-approved';
            case 'returned':
                return 'status-returned';
            default:
                return '';
        }
    };

    // Format date range
    const formatDateRange = (borrowDate, returnDate) => {
        const formatDate = (date) => {
            return new Date(date).toLocaleDateString('th-TH', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            });
        };
        return `${formatDate(borrowDate)} - ${formatDate(returnDate)}`;
    };

    return (
        <div className="borrow-status-container">
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
                <div className="content-header">
                    <h2>สถานะการยืม - คืน</h2>
                </div>

                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>ลำดับ</th>
                                <th>ชื่อผู้ยืม</th>
                                <th>ชื่อฝ่ายสำนัก</th>
                                <th>อุปกรณ์</th>
                                <th>วันที่ยืม - วันที่คืน</th>
                                <th>สถานะ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentBorrowings.map((borrowing, index) => (
                                <tr key={borrowing.id}>
                                    <td>{startIndex + index + 1}</td>
                                    <td>{borrowing.borrower_name}</td>
                                    <td>{borrowing.department}</td>
                                    <td>{borrowing.equipment?.name}</td>
                                    <td>{formatDateRange(borrowing.borrow_date, borrowing.return_date)}</td>
                                    <td>
                                        <span className={`status-badge ${getStatusBadgeClass(borrowing.status)}`}>
                                            {borrowing.status === 'pending' && 'รอดำเนินการ'}
                                            {borrowing.status === 'approved' && 'อนุมัติแล้ว'}
                                            {borrowing.status === 'returned' && 'คืนแล้ว'}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                            {currentBorrowings.length === 0 && (
                                <tr>
                                    <td colSpan="6" className="no-data">ไม่พบข้อมูลการยืม</td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                    {totalPages > 1 && (
                        <div className="pagination">
                            {[...Array(totalPages)].map((_, index) => (
                                <button
                                    key={index}
                                    className={currentPage === index + 1 ? 'active' : ''}
                                    onClick={() => setCurrentPage(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <div className="back-button">
                    <a href="/track" className="back-link">
                        ย้อนกลับ
                    </a>
                </div>
            </main>
        </div>
    );
};

export default BorrowStatus;