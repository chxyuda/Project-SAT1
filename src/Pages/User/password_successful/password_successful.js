import React from "react";
import "./password_successful.css"; // นำเข้าไฟล์ CSS เพื่อแยกสไตล์ออกจากโค้ดหลัก

const PasswordSuccessful = () => {
    return (
        <div className="password-success-container">
            {/* วิดีโอพื้นหลัง */}
            <video className="background-video" autoPlay muted loop>
                <source src="background2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* ไอคอนย้อนกลับ */}
            <a href="#" className="back-icon">
                &#8592;
            </a>

            {/* คอนเทนเนอร์ข้อความ */}
            <div className="container">
                <div className="icon">&#10003;</div>
                <h1>Successful</h1>
                <p>Congratulations! Your password has been changed. Click continue to login.</p>
                <button className="button">Continue</button>
            </div>
        </div>
    );
};

export default PasswordSuccessful;
