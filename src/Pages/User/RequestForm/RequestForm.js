import React, { useState, useEffect } from 'react';
import { Clock, Calendar } from 'lucide-react';
import Navbar from "../../../components/common/navbar/navbar";
import './request-form.css';
import Bgclip from '../../../assets/background.mp4'
import Header from "../../../components/Header";

const RequestForm = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [formData, setFormData] = useState({
        borrowerName: '',
        department: '',
        phoneExt: '',
        email: '',
        typeId: '',
        equipmentId: '',
        quantity: '1',
        note: '',
        requestDate: new Date().toISOString().split('T')[0]
    });
    const [equipmentTypes, setEquipmentTypes] = useState([]);
    const [equipment, setEquipment] = useState([]);
    const [selectedEquipment, setSelectedEquipment] = useState(null);
    const [message, setMessage] = useState({ type: '', text: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

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
        const fetchEquipmentTypes = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/equipment-types');
                const data = await response.json();
                setEquipmentTypes(data);
            } catch (error) {
                console.error('Error fetching equipment types:', error);
                setMessage({
                    type: 'error',
                    text: 'ไม่สามารถโหลดข้อมูลประเภทอุปกรณ์ได้'
                });
            }
        };

        fetchEquipmentTypes();
    }, []);

    useEffect(() => {
        const fetchEquipment = async () => {
            if (!formData.typeId) {
                setEquipment([]);
                return;
            }

            try {
                const response = await fetch('http://localhost:3000/api/equipment');
                const data = await response.json();
                const filteredEquipment = data.filter(item => item.type_id === formData.typeId);
                setEquipment(filteredEquipment);
            } catch (error) {
                console.error('Error fetching equipment:', error);
                setMessage({
                    type: 'error',
                    text: 'ไม่สามารถโหลดข้อมูลอุปกรณ์ได้'
                });
            }
        };

        fetchEquipment();
    }, [formData.typeId]);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));

        if (id === 'equipmentId') {
            const selected = equipment.find(item => item.id === value);
            setSelectedEquipment(selected);
        }

        setMessage({ type: '', text: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage({ type: '', text: '' });

        try {
            const response = await fetch('http://localhost:3000/api/borrowings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    borrowerName: formData.borrowerName,
                    department: formData.department,
                    phoneExt: formData.phoneExt,
                    email: formData.email,
                    equipmentId: formData.equipmentId,
                    quantity: parseInt(formData.quantity),
                    note: formData.note,
                    borrowDate: formData.requestDate,
                    returnDate: formData.requestDate // For materials, borrow and return date are the same
                }),
            });

            if (!response.ok) {
                throw new Error('การเบิกวัสดุไม่สำเร็จ');
            }

            setMessage({
                type: 'success',
                text: 'เบิกวัสดุสำเร็จ'
            });

            // Reset form
            setFormData({
                borrowerName: '',
                department: '',
                phoneExt: '',
                email: '',
                typeId: '',
                equipmentId: '',
                quantity: '1',
                note: '',
                requestDate: new Date().toISOString().split('T')[0]
            });
            setSelectedEquipment(null);

            // Redirect after success
            setTimeout(() => {
                window.location.href = '/dashboard';
            }, 2000);
        } catch (error) {
            setMessage({
                type: 'error',
                text: error.message || 'เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <video autoPlay muted loop id="background-video">
                <source src={Bgclip} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <Header />
            <Navbar />


            <div class="content-rqf">
                <div class="form-container-rqf">
                    <h2>รายละเอียดการเบิกวัสดุ</h2>
                    {message.text && (
                        <div className={`message ${message.type}`}>
                            {message.text}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div class="form-group-rqf">
                            <label htmlFor="borrowerName">ชื่อผู้เบิก:</label>
                            <input
                                type="text"
                                id="borrowerName"
                                value={formData.borrowerName}
                                onChange={handleInputChange}
                                placeholder="กรุณากรอกชื่อผู้เบิก"
                                required
                            />
                        </div>
                        <div class="form-group-rqf">
                            <label htmlFor="department">ฝ่ายสำนัก:</label>
                            <input
                                type="text"
                                id="department"
                                value={formData.department}
                                onChange={handleInputChange}
                                placeholder="กรุณากรอกฝ่ายสำนัก"
                                required
                            />
                        </div>
                        <div class="form-group-rqf">
                            <label htmlFor="phoneExt">เบอร์โทรภายใน:</label>
                            <input
                                type="tel"
                                id="phoneExt"
                                value={formData.phoneExt}
                                onChange={handleInputChange}
                                placeholder="กรุณากรอกเบอร์โทรภายใน"
                                pattern="[0-9]{4}"
                                title="กรุณากรอกเบอร์โทร 4 หลัก"
                                required
                            />
                        </div>
                        <div class="form-group-rqf">
                            <label htmlFor="email">E-mail:</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="example@sat.or.th"
                                pattern=".+@sat\.or\.th"
                                title="กรุณากรอกอีเมล @sat.or.th เท่านั้น"
                                required
                            />
                        </div>
                        <div class="form-group-rqf">
                            <label htmlFor="typeId">ประเภท:</label>
                            <select
                                id="typeId"
                                value={formData.typeId}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">เลือกประเภท</option>
                                {equipmentTypes.map(type => (
                                    <option key={type.id} value={type.id}>
                                        {type.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div class="form-group-rqf">
                            <label htmlFor="equipmentId">อุปกรณ์:</label>
                            <select
                                id="equipmentId"
                                value={formData.equipmentId}
                                onChange={handleInputChange}
                                required
                                disabled={!formData.typeId}
                            >
                                <option value="">เลือกอุปกรณ์</option>
                                {equipment.map(item => (
                                    <option key={item.id} value={item.id}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {selectedEquipment && (
                            <>
                                <div className="form-group-rqf">
                                    <label htmlFor="brand">ยี่ห้อ:</label>
                                    <input
                                        type="text"
                                        id="brand"
                                        value={selectedEquipment.brand}
                                        className="readonly-input"
                                        readOnly
                                    />
                                </div>

                                <div className="form-group-rqf">
                                    <label htmlFor="availableQuantity">จำนวนคงเหลือ:</label>
                                    <input
                                        type="number"
                                        id="availableQuantity"
                                        value={selectedEquipment.available_quantity}
                                        className="readonly-input"
                                        readOnly
                                    />
                                </div>
                            </>
                        )}

                        <div class="form-group-rqf">
                            <label htmlFor="quantity">จำนวน:</label>
                            <input
                                type="number"
                                id="quantity"
                                value={formData.quantity}
                                onChange={handleInputChange}
                                min="1"
                                max={selectedEquipment?.available_quantity || 1}
                                required
                            />
                        </div>
                        <div class="form-group-rqf">
                            <label htmlFor="note">หมายเหตุ:</label>
                            <input
                                type="text"
                                id="note"
                                value={formData.note}
                                onChange={handleInputChange}
                                placeholder="ระบุหมายเหตุ (ถ้ามี)"
                            />
                        </div>
                        <div class="form-group-rqf">
                            <label for="start-date">วันที่เบิกวัสดุ:</label>
                            <input
                                type="date"
                                id="requestDate"
                                value={formData.requestDate}
                                onChange={handleInputChange}
                                min={new Date().toISOString().split('T')[0]}
                                required
                            />
                        </div>
                        <div className="buttons-rqf">
                            <a href="/dashboard" className="back-button-rqf">
                                ย้อนกลับ
                            </a>
                            <button
                                type="submit"
                                className="submit-button-rqf"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'กำลังดำเนินการ...' : 'เบิกวัสดุ'}
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    );
};

export default RequestForm;