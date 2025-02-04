import React, { useEffect, useState } from 'react';
import './borrow-status.css';

    return (
        <div>
            <header className="header">
                <div className="title">
                    <img src="logo.png" alt="Logo" />
                    <div>
                        SPORTS AUTHORITY OF THAILAND
                        <div className="sub-title">Computer Equipment Management System</div>
                    </div>
                </div>
                <div className="datetime">
                    <div className="date">{date}</div>
                    <div className="time">{time}</div>
                </div>
            </header>
            < nav></nav>
            <main className="content">
                <h2>สถานะการยืม - คืน</h2>
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
                            {[...Array(5)].map((_, index) => (
                                <tr key={index}>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="pagination">
                        {[...Array(10)].map((_, index) => (
                            <button key={index}>{index + 1}</button>
                        ))}
                    </div>
                </div>
                <div className="back-button">
                    <a href="/track">ย้อนกลับ</a>
                </div>
            </main>
        </div>
    );

export default BorrowStatus;