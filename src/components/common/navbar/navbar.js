import React from 'react';
import { FileText, Package, Activity, History, Lock, User, LogOut } from 'lucide-react';
import "./navbar.css"

export default function Navbar() {
  return (

    <div class="nav">
      <a href="/borrow">ยืมวัสดุ</a>
      <a href="/request-form">เบิกวัสดุ</a>
      <a href="/track">ติดตามสถานะคำขอ</a>
      <a href="/withdrawal-history">ประวัติการเบิก-การยืม-คืน</a>
      <a href="/change-password">แก้ไขรหัสผ่าน</a>
      <a href="/edit-profile">แก้ไขโปรไฟล์</a>
      <a href="/" class="logout">&#10140; Log out</a>
      <a href="">ฝ่ายสำนัก</a>
    </div>


  );
}