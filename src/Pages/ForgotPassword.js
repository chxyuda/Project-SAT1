import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // ใช้สำหรับเชื่อมต่อ API
import "./ForgotPassword.css";
import userIcon from "../assets/icon.png"; // Path ของไอคอน
import BGclip from '../assets/background.mp4'


const ForgotPassword = () => {
  const [email, setEmail] = useState(""); // เก็บอีเมลที่ผู้ใช้กรอก
  const [message, setMessage] = useState(""); // เก็บข้อความแจ้งเตือน
  const navigate = useNavigate();

  const handleResetPassword = async () => {
    if (!email) {
      setMessage("Please enter your email.");
      return;
    }

    try {
      // เรียก API สำหรับส่ง OTP ไปยังอีเมล
      const response = await axios.post("http://localhost:5001/api/send-otp", { email });
      console.log(response.data); // ตรวจสอบ response จากเซิร์ฟเวอร์

      setMessage("OTP sent successfully. Please check your email.");
      // ไปยังหน้าตรวจสอบโค้ด และส่งอีเมลไปให้หน้าถัดไป
      navigate("/verify-code", { state: { email } });
    } catch (error) {
      console.error("Error sending OTP:", error);
      setMessage("Failed to send OTP. Please try again.");
    }
  };

  return (
    <>

      <video id="background-video-fpass" autoplay muted loop>
        <source src={BGclip} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <a href="/" class="back-icon-fpass">&#8592;</a>
      <div class="container-fpass">
        <div class="icon-fpass">&#128100;</div>
        <h1>Forgot Password?</h1>
        <p>Please enter your email to reset password</p>
        <div class="input-container-fpass">
          <input
            type="email"
            placeholder="Enter your email"
            className="forgot-password-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // อัปเดตค่า email
          />
        </div>
        <button className="forgot-password-button-fpass" onClick={handleResetPassword}>
          Reset Password
        </button>
        {message && <p className="forgot-password-message">{message}</p>} {/* แสดงข้อความแจ้งเตือน */}
      </div>
    </>
  );
};

export default ForgotPassword;
