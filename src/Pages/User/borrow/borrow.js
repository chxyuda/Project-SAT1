import React, { useState } from 'react';
import Navbar from "../../../components/common/navbar/navbar";
import { Calendar } from 'lucide-react';
import "./borrow.css";
import Header from '../../../components/Header';
import Bgclip from '../../../assets/background.mp4'

const BorrowEquipment = () => {
    const [formData, setFormData] = useState({
        borrowerName: '',
        department: '',
        phoneExt: '',
        email: '',
        typeId: '',
        equipmentId: '',
        quantity: '1',
        note: '',
        borrowDate: new Date().toISOString().split('T')[0],
        returnDate: ''
    });

    const [selectedEquipment, setSelectedEquipment] = useState({
        brand: '',
        availableQuantity: 0
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Simulate equipment selection (replace with actual data later)
        if (name === 'equipmentId' && value) {
            setSelectedEquipment({
                brand: 'Sample Brand',
                availableQuantity: 10
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic will be added later
        console.log('Form submitted:', formData);
    };

    return (
        <div className="borrow-container">

            <Header />

            <Navbar />

            <main className="content">
                <form className="form-container" onSubmit={handleSubmit}>
                    <h2>รายละเอียดการยืม-คืน วัสดุ</h2>

                    <div className="form-group">
                        <label htmlFor="borrowerName">ชื่อผู้ยืม:</label>
                        <input
                            type="text"
                            id="borrowerName"
                            name="borrowerName"
                            value={formData.borrowerName}
                            onChange={handleInputChange}
                            placeholder="กรอกชื่อผู้ยืม"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="department">ฝ่ายสำนัก:</label>
                        <input
                            type="text"
                            id="department"
                            name="department"
                            value={formData.department}
                            onChange={handleInputChange}
                            placeholder="กรอกฝ่ายสำนัก"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phoneExt">เบอร์โทรภายใน:</label>
                        <input
                            type="tel"
                            id="phoneExt"
                            name="phoneExt"
                            value={formData.phoneExt}
                            onChange={handleInputChange}
                            placeholder="กรอกเบอร์โทรภายใน"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">E-mail:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="กรอกอีเมล"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="typeId">ประเภท:</label>
                        <select
                            id="typeId"
                            name="typeId"
                            value={formData.typeId}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">เลือกประเภท</option>
                            <option value="1">ประเภท 1</option>
                            <option value="2">ประเภท 2</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="equipmentId">อุปกรณ์:</label>
                        <select
                            id="equipmentId"
                            name="equipmentId"
                            value={formData.equipmentId}
                            onChange={handleInputChange}
                            required
                            disabled={!formData.typeId}
                        >
                            <option value="">เลือกอุปกรณ์</option>
                            <option value="1">อุปกรณ์ 1</option>
                            <option value="2">อุปกรณ์ 2</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="brand">ยี่ห้อ:</label>
                        <input
                            type="text"
                            id="brand"
                            value={selectedEquipment.brand}
                            className="readonly-input"
                            readOnly
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="availableQuantity">จำนวนคงเหลือ:</label>
                        <input
                            type="number"
                            id="availableQuantity"
                            value={selectedEquipment.availableQuantity}
                            className="readonly-input"
                            readOnly
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="quantity">จำนวน:</label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleInputChange}
                            placeholder="ระบุจำนวนที่ต้องการยืม"
                            min="1"
                            max={selectedEquipment.availableQuantity}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="note">หมายเหตุ:</label>
                        <input
                            type="text"
                            id="note"
                            name="note"
                            value={formData.note}
                            onChange={handleInputChange}
                            placeholder="ระบุหมายเหตุ"
                        />
                    </div>

                    <div class="form-group">
                        <label for="start-date">วันที่ยืม:</label>
                        <input type="date"
                            id="borrowDate"
                            name="borrowDate"
                            value={formData.borrowDate}
                            onChange={handleInputChange}
                            min={new Date().toISOString().split('T')[0]}
                            required
                        />
                    </div>
                    <div class="form-group">
                        <label for="end-date">วันที่คืน:</label>
                        <input
                            type="date"
                            id="returnDate"
                            name="returnDate"
                            value={formData.returnDate}
                            onChange={handleInputChange}
                            min={formData.borrowDate}
                            required
                        />
                    </div>

                    <div className="buttons">
                        <button type="submit" className="submit-button">
                            ยืนยันการยืม
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
};

export default BorrowEquipment;