import { useEffect, useState } from "react";
import "./returningHistoryStyles.css";

const returningHistory = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            setDate(now.toLocaleDateString('th-TH', options));
            setTime(now.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="header">
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
            </div>
            <nav className="nav">
                <a href="borrow.html">ยืมวัสดุ</a>
                <a href="returnเบิก.html">เบิกวัสดุ</a>
                <a href="track.html">ติดตามสถานะการเบิก</a>
                <a href="ประวัติการเบิกยืม.html">ประวัติการเบิก-การยืม-คืน</a>
                <a href="change_password.html">แก้ไขรหัสผ่าน</a>
                <a href="edit_profile.html">แก้ไขโปรไฟล์</a>
                <a href="LoginPage.html" className="logout">&#10140; Log out</a>
            </nav>
            <div className="content">
                <h2>ประวัติการยืม - คืน</h2>
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
                    <a href="ประวัติการเบิกยืม.html">ย้อนกลับ</a>
                </div>
            </div>
        </div>
    );
};

export default returningHistory;
