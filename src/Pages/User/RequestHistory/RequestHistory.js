import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import Navbar from "../../../components/common/navbar/navbar";
import './RequestHistory.css';

const RequestHistory = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [requests, setRequests] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 5;

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            
            const formattedDate = now.toLocaleDateString('th-TH', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            });
            
            const formattedTime = now.toLocaleTimeString('th-TH', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            });

            setDate(formattedDate);
            setTime(formattedTime);
        };

        updateDateTime();
        const timer = setInterval(updateDateTime, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/borrowings');
                const data = await response.json();
                
                // Calculate total pages
                setTotalPages(Math.ceil(data.length / itemsPerPage));
                
                // Get current page items
                const startIndex = (currentPage - 1) * itemsPerPage;
                const endIndex = startIndex + itemsPerPage;
                setRequests(data.slice(startIndex, endIndex));
            } catch (error) {
                console.error('Error fetching requests:', error);
            }
        };

        fetchRequests();
    }, [currentPage]);

    const getStatusBadgeClass = (status) => {
        switch (status) {
            case 'pending':
                return 'status-badge status-pending';
            case 'approved':
                return 'status-badge status-approved';
            case 'returned':
                return 'status-badge status-returned';
            default:
                return 'status-badge';
        }
    };

    const getStatusText = (status) => {
        switch (status) {
            case 'pending':
                return 'รอดำเนินการ';
            case 'approved':
                return 'อนุมัติแล้ว';
            case 'returned':
                return 'คืนแล้ว';
            default:
                return status;
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('th-TH', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
    };

    return (
        <div className="request-history-container">
            <video className="background-video" autoPlay muted loop playsInline>
                <source src="พื้นหลัง2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

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
                <div className="table-container">
                    <h2>ประวัติการเบิก</h2>

                    <table>
                        <thead>
                            <tr>
                                <th>ลำดับ</th>
                                <th>ชื่อผู้เบิก</th>
                                <th>ชื่อฝ่ายสำนัก</th>
                                <th>อุปกรณ์</th>
                                <th>วันที่ขอเบิก</th>
                                <th>สถานะ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requests.length > 0 ? (
                                requests.map((request, index) => (
                                    <tr key={request.id}>
                                        <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                                        <td>{request.borrower_name}</td>
                                        <td>{request.department}</td>
                                        <td>{request.equipment?.name}</td>
                                        <td>{formatDate(request.borrow_date)}</td>
                                        <td>
                                            <span className={getStatusBadgeClass(request.status)}>
                                                {getStatusText(request.status)}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="no-data">ไม่พบข้อมูลการเบิก</td>
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

                    <div className="back-button">
                        <a href="/dashboard" className="back-link">
                            ย้อนกลับ
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default RequestHistory;