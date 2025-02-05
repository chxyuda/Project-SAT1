import React, { useState } from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import "./password_successful.css";

const PasswordSuccessful = () => {
    const [isRedirecting, setIsRedirecting] = useState(false);

    const handleContinue = () => {
        setIsRedirecting(true);
        setTimeout(() => {
            window.location.href = '/login';
        }, 500);
    };

    return (
        <div className="password-successful-container">
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
                <div className="success-card">
                    <div className="icon-container">
                        <CheckCircle size={40} />
                    </div>

                    <h1>เปลี่ยนรหัสผ่านสำเร็จ</h1>
                    
                    <p className="description">
                        ยินดีด้วย! คุณได้เปลี่ยนรหัสผ่านเรียบร้อยแล้ว
                        คลิกที่ปุ่มด้านล่างเพื่อเข้าสู่ระบบด้วยรหัสผ่านใหม่
                    </p>

                    <button 
                        className={`continue-button ${isRedirecting ? 'redirecting' : ''}`}
                        onClick={handleContinue}
                        disabled={isRedirecting}
                    >
                        {isRedirecting ? 'กำลังนำคุณไปยังหน้าเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}
                    </button>
                </div>
            </main>
        </div>
    );
};

export default PasswordSuccessful;