import React, { useState } from 'react';
import { ArrowLeft, Lock } from 'lucide-react';
import "./password_reset.css";

const PasswordReset = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    const handleConfirm = async () => {
        setIsLoading(true);
        setMessage({ type: '', text: '' });

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            setMessage({
                type: 'success',
                text: 'รีเซ็ตรหัสผ่านสำเร็จ กำลังนำคุณไปยังหน้าเปลี่ยนรหัสผ่าน'
            });

            // Redirect after success
            setTimeout(() => {
                window.location.href = '/change-password';
            }, 2000);
        } catch (error) {
            setMessage({
                type: 'error',
                text: 'เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง'
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="password-reset-container">
            {/* Background Video */}
            <video className="background-video" autoPlay muted loop playsInline>
                <source src="พื้นหลัง2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Back Button */}
            <a href="/login" className="back-button">
                <ArrowLeft size={24} />
                <span>ย้อนกลับ</span>
            </a>

            {/* Main Content */}
            <main className="content">
                <div className="reset-card">
                    <div className="icon-container">
                        <Lock size={40} />
                    </div>

                    <h1>รีเซ็ตรหัสผ่าน</h1>
                    
                    <p className="description">
                        ระบบได้ส่งลิงก์สำหรับรีเซ็ตรหัสผ่านไปยังอีเมลของคุณแล้ว
                        กรุณาคลิกยืนยันเพื่อตั้งรหัสผ่านใหม่
                    </p>

                    {message.text && (
                        <div className={`message ${message.type}`}>
                            {message.text}
                        </div>
                    )}

                    <button 
                        className={`confirm-button ${isLoading ? 'loading' : ''}`}
                        onClick={handleConfirm}
                        disabled={isLoading}
                    >
                        {isLoading ? 'กำลังดำเนินการ...' : 'ยืนยัน'}
                    </button>
                </div>
            </main>
        </div>
    );
};

export default PasswordReset;