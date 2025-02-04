import React, { useEffect, useState } from 'react';
import navbar from '../../../components/common/navbar';
import './RequestForm.css';

const ReturnEquipment = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [formData, setFormData] = useState({
        borrower: '',
        department: '',
        phone: '',
        email: '',
        type: '',
        equipment: '',
        brand: '',
        remaining: 0,
        quantity: '',
        note: '',
        startDate: ''
    });

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setDate(now.toLocaleDateString('th-TH', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
            setTime(now.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0];
        setFormData(prevState => ({ ...prevState, startDate: formattedDate }));
    }, []);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({ ...prevState, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
    };

    return (
        <div className="return-equipment">
            <video className="background-video" autoPlay muted loop>
                <source src="พื้นหลัง2.mp4" type="video/mp4" />
            </video>

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

            <div className="content">
                <div className="form-container">
                    <h2>รายละเอียดการเบิกวัสดุ</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="borrower">ชื่อผู้เบิก:</label>
                            <input type="text" id="borrower" value={formData.borrower} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="department">ฝ่ายสำนัก:</label>
                            <input type="text" id="department" value={formData.department} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">เบอร์โทรภายใน:</label>
                            <input type="text" id="phone" value={formData.phone} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">E-mail:</label>
                            <input type="email" id="email" value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="type">ประเภท:</label>
                            <select id="type" value={formData.type} onChange={handleChange}>
                                <option value="">เลือกประเภท</option>
                                <option value="type1">Type 1</option>
                                <option value="type2">Type 2</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="equipment">อุปกรณ์:</label>
                            <select id="equipment" value={formData.equipment} onChange={handleChange}>
                                <option value="">เลือกอุปกรณ์</option>
                                <option value="equipment1">Equipment 1</option>
                                <option value="equipment2">Equipment 2</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="brand">ยี่ห้อ:</label>
                            <select id="brand" value={formData.brand} onChange={handleChange}>
                                <option value="">เลือกยี่ห้อ</option>
                                <option value="brand1">Brand 1</option>
                                <option value="brand2">Brand 2</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="remaining">จำนวนคงเหลือ:</label>
                            <input type="number" id="remaining" value={formData.remaining} readOnly />
                        </div>
                        <div className="form-group">
                            <label htmlFor="quantity">จำนวน:</label>
                            <input type="number" id="quantity" value={formData.quantity} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="note">หมายเหตุ:</label>
                            <input type="text" id="note" value={formData.note} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="startDate">วันที่เบิกวัสดุ:</label>
                            <input type="date" id="startDate" value={formData.startDate} onChange={handleChange} />
                        </div>
                        <div className="buttons">
                            <button type="submit">เบิกวัสดุ</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ReturnEquipment;
