import React, { useState, useEffect } from "react";
import { Clock } from 'lucide-react';
import Navbar from "../../../components/common/navbar/navbar";
import "./edit_profile.css";
import Bgclip from '../../../assets/background.mp4'
import Header from "../../../components/Header";

const EditProfile = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        division: "",
        department: "",
        job: "",
        phone: "",
        email: "",
        profilePic: null
    });
    const [previewUrl, setPreviewUrl] = useState(null);
    const [message, setMessage] = useState({ type: '', text: '' });

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

        updateDateTime();
        const timer = setInterval(updateDateTime, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) { // 5MB limit
                setMessage({
                    type: 'error',
                    text: 'ขนาดไฟล์ต้องไม่เกิน 5MB'
                });
                return;
            }

            if (!file.type.startsWith('image/')) {
                setMessage({
                    type: 'error',
                    text: 'กรุณาอัพโหลดไฟล์รูปภาพเท่านั้น'
                });
                return;
            }

            setFormData(prev => ({
                ...prev,
                profilePic: file
            }));

            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Here you would typically make an API call to update the profile
            // For now, we'll simulate a successful update
            await new Promise(resolve => setTimeout(resolve, 1000));

            setMessage({
                type: 'success',
                text: 'อัพเดทโปรไฟล์สำเร็จ'
            });

            // Redirect after successful update
            setTimeout(() => {
                window.location.href = "/dashboard";
            }, 2000);
        } catch (error) {
            setMessage({
                type: 'error',
                text: 'เกิดข้อผิดพลาดในการอัพเดทโปรไฟล์ กรุณาลองใหม่อีกครั้ง'
            });
        }
    };

    return (
        <>


            <Header />
            <Navbar />

            <div class="content-ep">
                <div class="form-container-ep">
                    <h2>แก้ไขโปรไฟล์</h2>
                    <div class="image-upload-ep">
                        <label for="profile-pic">&#128247;</label>
                        <input
                            type="file"
                            id="profile-pic"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden-input"
                        />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div class="form-group-ep">
                            <label for="name">ชื่อ - นามสกุล:</label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="กรุณากรอกชื่อ-นามสกุล"
                                required
                            />
                        </div>
                        <div className="form-group-ep">
                            <label htmlFor="division">ฝ่าย/สำนัก:</label>
                            <select
                                id="division"
                                value={formData.division}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">เลือกฝ่าย/สำนัก</option>
                                <option value="center1">ฝ่ายบริหาร</option>
                                <option value="center2">ฝ่ายการเงิน</option>
                                <option value="center3">ฝ่ายเทคโนโลยีสารสนเทศ</option>
                                <option value="center4">ฝ่ายทรัพยากรบุคคล</option>
                            </select>
                        </div>
                        <div className="form-group-ep">
                            <label htmlFor="department">กอง:</label>
                            <select
                                id="department"
                                value={formData.department}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">เลือกกอง</option>
                                <option value="department1">กองบริหารทั่วไป</option>
                                <option value="department2">กองคลัง</option>
                                <option value="department3">กองสารสนเทศ</option>
                                <option value="department4">กองบุคลากร</option>
                            </select>
                        </div>
                        <div className="form-group-ep">
                            <label htmlFor="job">งาน:</label>
                            <select
                                id="job"
                                value={formData.job}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">เลือกงาน</option>
                                <option value="job1">งานธุรการ</option>
                                <option value="job2">งานพัสดุ</option>
                                <option value="job3">งานพัฒนาระบบ</option>
                                <option value="job4">งานบริหารบุคคล</option>
                            </select>
                        </div>
                        <div class="form-group-ep">
                            <label for="phone">เบอร์โทรภายใน:</label>
                            <input
                                type="tel"
                                id="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="กรุณากรอกเบอร์โทรภายใน"
                                pattern="[0-9]{4}"
                                title="กรุณากรอกเบอร์โทร 4 หลัก"
                                required
                            />
                        </div>
                        <div class="form-group-ep">
                            <label for="email">E-mail:</label>
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

                        <div className="buttons-ep">
                            <a href="/user-dashboard" className="back-button-ep">ย้อนกลับ</a>
                            <button type="submit" className="submit-button-ep">บันทึก</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default EditProfile;