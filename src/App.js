import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login";
import SignUp from "./SignUp";
import Header from "./Header";
import SuccessModal from "./SuccessModal";
import ForgotPassword from "./Pages/ForgotPassword";
import VerifyCode from "./Pages/VerifyCode"; // สร้างไฟล์นี้ใหม่
import SetNewPassword from "./Pages/SetNewPassword";
import ITDashboard from "./Pages/ITDashboard";
import Inventory from "./Pages/Inventory";
import Settings from "./Pages/Settings";
import Personnel from "./Pages/Personnel";
import BorrowReturn from "./Pages/BorrowReturn";
import Request from "./Pages/Request";
import Dashboard from "./Pages/Dashboard";
import StaffProfile from "./Pages/StaffProfile";
import UserDashboard from "./Pages/User/Dashboard";
import EditProfile from "./Pages/User/edit_profile/edit_profile";
import ChangePassword from "./Pages/User/change_password/change_password";
import Borrow from "./Pages/User/borrow/borrow";
import PasswordReset from "./Pages/User/password_reset/password_reset";
import PasswordSuccessful from "./Pages/User/password_successful/password_successful";
import RequestForm from "./Pages/User/RequestForm/RequestForm";
import Track from "./Pages/User/track/track";
import RequestHistory from "./Pages/User/Request_History/Request History"; //อย่าใช้ ชืือไฟล์แบบมีช่องว่างน
import WithdrawalHistory from "./Pages/User/withdrawalHistory/withdrawalHistory";
import ReturningHistory from "./Pages/User/returningHistory/returningHistory";
import RequestStatus from "./Pages/User/request status/request status";
import BorrowStatus from "./Pages/User/borrow-status/borrow-status";

function App() {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      // อัปเดตเวลา
      setCurrentTime(now.toLocaleTimeString("th-TH", { hour12: false }));

      // แปลงวันที่
      const dayNames = [
        "วันอาทิตย์",
        "วันจันทร์",
        "วันอังคาร",
        "วันพุธ",
        "วันพฤหัสบดี",
        "วันศุกร์",
        "วันเสาร์",
      ];
      const monthNames = [
        "มกราคม",
        "กุมภาพันธ์",
        "มีนาคม",
        "เมษายน",
        "พฤษภาคม",
        "มิถุนายน",
        "กรกฎาคม",
        "สิงหาคม",
        "กันยายน",
        "ตุลาคม",
        "พฤศจิกายน",
        "ธันวาคม",
      ];

      const dayName = dayNames[now.getDay()];
      const day = now.getDate();
      const month = monthNames[now.getMonth()];
      const year = now.getFullYear() + 543; // แปลงเป็น พ.ศ.

      setCurrentDate(`${dayName}ที่ ${day} ${month} ${year}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <Header currentTime={currentTime} currentDate={currentDate} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/success" element={<SuccessModal />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify-code" element={<VerifyCode />} />
          <Route path="/set-new-password" element={<SetNewPassword />} />
          <Route path="/ITDashboard" element={<ITDashboard />} />
          <Route path="/it-dashboard" element={<ITDashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/personnel" element={<Personnel />} />
          <Route path="/borrow-return" element={<BorrowReturn />} />
          <Route path="/request" element={<Request />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/staff-profile" element={<StaffProfile />} />
          <Route path="/user-dashboard" element={<UserDashboard/>} />
          <Route path="/edit-profile" element={<EditProfile/>} />
          <Route path="/change-password" element={<ChangePassword/>} />
          <Route path="/borrow" element={<Borrow/>} />
          <Route path="/password-reset" element={<PasswordReset/>} />
          <Route path="/password-successful" element={<PasswordSuccessful/>} />
          <Route path="/requestform" element={<RequestForm/>} />
          <Route path="/track" element={<Track/>} />
          <Route path="/request-History" element={<RequestHistory/>} />
          <Route path="/withdrawalHistory" element={<WithdrawalHistory/>} />
          <Route path="/returningHistory" element={<ReturningHistory/>} /> ถ้าจะให้กดไปหน้าไหน ให้แก้ จาก .html 
          <Route path="/request-status" element={<RequestStatus/>} />
          <Route path="/borrow-status" element={<BorrowStatus/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
