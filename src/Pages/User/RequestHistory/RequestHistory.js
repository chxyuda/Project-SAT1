import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import Navbar from "../../../components/common/navbar/navbar";
import './RequestHistory.css';
import Header from "../../../components/Header";


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
        <>

            <Header />
            <Navbar />

            <div class="content-hrq">
                <h2>ประวัติการเบิก</h2>
                <div class="table-container-hrq">
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
                                    <td colSpan="6" className="no-data-hrq">ไม่พบข้อมูลการเบิก</td>
                                </tr>
                            )}
                        </tbody>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>

                    </table>
                    {totalPages > 1 && (
                        <div className="pagination-hrq">
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
                <div class="back-button-hrq">
                    <a href="/withdrawal-history">ย้อนกลับ</a>
                </div>
            </div>
        </>
    );
};

export default RequestHistory;