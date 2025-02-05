import React, { useState, useEffect } from "react";
import { Clock } from 'lucide-react';
import Navbar from "../../../components/common/navbar/navbar";
import "./change_password.css";
import Bgclip from '../../../assets/background.mp4'
import Header from "../../../components/Header";

const ChangePassword = () => {
    const [formData, setFormData] = useState({
        username: "JohnDoe", // This would come from auth context in a real app
        newPassword: "",
        confirmPassword: ""
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

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

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id.replace('-', '')]: value
        }));
        setError(""); // Clear error when user types
    };

    const validatePassword = (password) => {
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumbers = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        if (password.length < minLength) {
            return "รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร";
        }
        if (!hasUpperCase || !hasLowerCase) {
            return "รหัสผ่านต้องประกอบด้วยตัวพิมพ์ใหญ่และตัวพิมพ์เล็ก";
        }
        if (!hasNumbers) {
            return "รหัสผ่านต้องมีตัวเลขอย่างน้อย 1 ตัว";
        }
        if (!hasSpecialChar) {
            return "รหัสผ่านต้องมีอักขระพิเศษอย่างน้อย 1 ตัว";
        }
        return "";
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Reset states
        setError("");
        setSuccess(false);

        // Validate passwords match
        if (formData.newPassword !== formData.confirmPassword) {
            setError("รหัสผ่านไม่ตรงกัน");
            return;
        }

        // Validate password strength
        const passwordError = validatePassword(formData.newPassword);
        if (passwordError) {
            setError(passwordError);
            return;
        }

        try {
            // Here you would typically make an API call to update the password
            // For now, we'll simulate a successful password change
            await new Promise(resolve => setTimeout(resolve, 1000));

            setSuccess(true);
            setFormData(prev => ({
                ...prev,
                newPassword: "",
                confirmPassword: ""
            }));

            // Redirect after successful password change
            setTimeout(() => {
                window.location.href = "/dashboard";
            }, 2000);
        } catch (err) {
            setError("เกิดข้อผิดพลาดในการเปลี่ยนรหัสผ่าน กรุณาลองใหม่อีกครั้ง");
        }
    };

    return (
        <>
            <video autoPlay muted loop id="background-video">
                <source src={Bgclip} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <Header />

            <div class="content-cp">
                <div class="form-container-cp">
                    <h2>แก้ไขรหัสผ่าน</h2>

                    {error && <div className="error-message">{error}</div>}
                    {success && <div className="success-message">เปลี่ยนรหัสผ่านสำเร็จ!</div>}
                    <form>
                        <div class="form-group-cp">
                            <label for="current-username">Username:</label>
                            <input
                                type="text"
                                id="current-username"
                                value={formData.username}
                                className="readonly-input"
                                readOnly
                            />
                        </div>
                        <div class="form-group-cp">
                            <label for="new-password">รหัสผ่านใหม่:</label>
                            <input
                                type="password"
                                id="new-password"
                                value={formData.newPassword}
                                onChange={handleChange}
                                placeholder="รหัสผ่านใหม่"
                                required
                            />
                        </div>
                        <div class="form-group-cp">
                            <label for="confirm-password">ยืนยันรหัสผ่านใหม่:</label>
                            <input
                                type="password"
                                id="confirm-password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="ยืนยันรหัสผ่านใหม่"
                                required
                            />
                        </div>
                        <div className="buttons-cp">
                            <a href="/user-dashboard" className="back-button-cp">ย้อนกลับ</a>
                            <button type="submit" className="submit-button-cp">บันทึก</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
};

export default ChangePassword;