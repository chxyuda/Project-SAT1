import React, { useEffect, useState } from "react";
import "./borrow.css";

const BorrowEquipment = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [borrowDate, setBorrowDate] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
            setDate(now.toLocaleDateString("th-TH", options));
            setTime(now.toLocaleTimeString("th-TH", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
        };

        updateTime();
        setInterval(updateTime, 1000);

        const today = new Date().toISOString().split("T")[0];
        setBorrowDate(today);
    }, []);

    return (
        <div>
            <video className="background-video" autoPlay muted loop>
                <source src="พื้นหลัง2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

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

            <div className="nav">
                <a href="#">ยืมวัสดุ</a>
                <a href="#">เบิกวัสดุ</a>
                <a href="#">ติดตามสถานะคำขอ</a>
                <a href="#">ประวัติการเบิก-การยืม-คืน</a>
                <a href="#">แก้ไขรหัสผ่าน</a>
                <a href="#">แก้ไขโปรไฟล์</a>
                <a href="#" className="logout">&#10140; Log out</a>
                <a href="#">ฝ่ายสำนัก</a>
            </div>

            <div className="content">
                <div className="form-container">
                    <h2>รายละเอียดการยืม-คืน วัสดุ</h2>
                    <div className="form-group">
                        <label>ชื่อผู้ยืม:</label>
                        <input type="text" placeholder="" />
                    </div>
                    <div className="form-group">
                        <label>ฝ่ายสำนัก:</label>
                        <input type="text" placeholder="" />
                    </div>
                    <div className="form-group">
                        <label>เบอร์โทรภายใน:</label>
                        <input type="text" placeholder="" />
                    </div>
                    <div className="form-group">
                        <label>E-mail:</label>
                        <input type="email" placeholder="" />
                    </div>
                    <div className="form-group">
                        <label>ประเภท:</label>
                        <select>
                            <option value="">เลือกประเภท</option>
                            <option value="type1">Type 1</option>
                            <option value="type2">Type 2</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>อุปกรณ์:</label>
                        <select>
                            <option value="">เลือกอุปกรณ์</option>
                            <option value="equipment1">Equipment 1</option>
                            <option value="equipment2">Equipment 2</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>ยี่ห้อ:</label>
                        <select>
                            <option value="">เลือกยี่ห้อ</option>
                            <option value="brand1">Brand 1</option>
                            <option value="brand2">Brand 2</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>จำนวนคงเหลือ:</label>
                        <input type="number" placeholder="ระบุจำนวนคงเหลือ" readOnly value="0" />
                    </div>
                    <div className="form-group">
                        <label>จำนวน:</label>
                        <input type="number" placeholder="ระบุจำนวนที่ต้องการยืม" />
                    </div>
                    <div className="form-group">
                        <label>หมายเหตุ:</label>
                        <input type="text" placeholder="หมายเหตุการยืม-คืน" />
                    </div>
                    <div className="form-group">
                        <label>วันที่ยืม:</label>
                        <input type="date" value={borrowDate} />
                    </div>
                    <div className="form-group">
                        <label>วันที่คืน:</label>
                        <input type="date" />
                    </div>
                    <div className="buttons">
                        <button type="submit">ยืนยันการยืม</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BorrowEquipment;
