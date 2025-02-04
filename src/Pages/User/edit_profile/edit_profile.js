import React, { useEffect, useState } from "react";
import "./edit_profile.css";

const EditProfile = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
            setDate(now.toLocaleDateString("th-TH", options));
            setTime(now.toLocaleTimeString("th-TH", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <video className="background-video" autoPlay loop muted playsInline>
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
            <div className="content">
                <div className="form-container">
                    <h2>แก้ไขโปรไฟล์</h2>
                    <div className="image-upload">
                        <label htmlFor="profile-pic">📷</label>
                        <input type="file" id="profile-pic" />
                    </div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">ชื่อ - นามสกุล:</label>
                            <input type="text" id="name" placeholder="" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="division">ฝ่าย/สำนัก:</label>
                            <select id="division">
                                <option value="">เลือกฝ่าย/สำนัก</option>
                                <option value="center1">Center 1</option>
                                <option value="center2">Center 2</option>
                                <option value="center3">Center 3</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="department">กอง:</label>
                            <select id="department">
                                <option value="">เลือกกอง</option>
                                <option value="department1">Department 1</option>
                                <option value="department2">Department 2</option>
                                <option value="department3">Department 3</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="job">งาน:</label>
                            <select id="job">
                                <option value="">เลือกงาน</option>
                                <option value="job1">Job 1</option>
                                <option value="job2">Job 2</option>
                                <option value="job3">Job 3</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">เบอร์โทรภายใน:</label>
                            <input type="text" id="phone" placeholder="xxxx" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">E-mail:</label>
                            <input type="email" id="email" placeholder="xxxxx@sat.th" />
                        </div>
                        <div className="buttons">
                            <a href="/dashboard">ย้อนกลับ</a>
                            <button type="submit">ตกลง</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
