import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";
import userIcon from "./assets/icon.png";
import backgroundVideo from "./assets/background.mp4";
import Mylogo from "./assets/Logo.png"

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // ✅ ฟังก์ชันเข้าสู่ระบบ
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("🔍 กำลังส่งข้อมูลเข้าสู่ระบบ...");

    try {
      const response = await axios.post("http://localhost:5001/api/login", { username, password });
      console.log("✅ Response:", response.data);

      const { success, user } = response.data;
      if (success) {
        alert("🎉 เข้าสู่ระบบสำเร็จ!");
        localStorage.setItem("user", JSON.stringify(user));

        // ✅ เช็ค role แล้ว navigate ไปหน้าเหมาะสม
        if (user.role === "IT") navigate("/it-dashboard");
        else if (user.role === "Approver") navigate("/approver-dashboard");
        else if (user.role === "User") navigate("/user-dashboard");
        else alert("⚠️ บทบาทของคุณไม่ถูกต้อง");
      } else {
        alert("❌ ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
      }
    } catch (error) {
      console.error("❌ Login Error:", error);
      alert(error.response?.data?.message || "เกิดข้อผิดพลาดในการเข้าสู่ระบบ");
    }
  };


  return (
    <>

      <video autoPlay muted loop id="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div class="container">
        <div class="left-section">
          <h1>ระบบบริหารการจัดการวัสดุ<br />คอมพิวเตอร์ของ กกท.</h1>
          <div class="logo">
            <img src={Mylogo} alt="โลโก้ กกท" />
          </div>
        </div>
        <div class="right-section">
          <form onSubmit={handleLogin} className="login-form">
            <div class="icon">👤</div>
            <input
              type="text"
              placeholder="login"
              className="login-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <a href="/forgot-password">forgot password?</a>
            <a href="/signup" class="signup">Sign up</a>
            <button class="Login" type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
