import React from 'react';
import { FileText, Package, Activity, History, Lock, User, LogOut } from 'lucide-react';
import './navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-links">
          <a href="/borrow" className="nav-link">
            <Package className="nav-icon" size={20} />
            <span>ยืมวัสดุ</span>
          </a>
          <a href="/request-History" className="nav-link">
            <FileText className="nav-icon" size={20} />
            <span>เบิกวัสดุ</span>
          </a>
          <a href="/track" className="nav-link">
            <Activity className="nav-icon" size={20} />
            <span>ติดตามสถานะคำขอ</span>
          </a>
          <a href="/withdrawalHistory" className="nav-link">
            <History className="nav-icon" size={20} />
            <span>ประวัติการเบิกคืน</span>
          </a>
          <a href="/change-password" className="nav-link">
            <Lock className="nav-icon" size={20} />
            <span>แก้ไขรหัสผ่าน</span>
          </a>
          <a href="/edit-profile" className="nav-link">
            <User className="nav-icon" size={20} />
            <span>แก้ไขโปรไฟล์</span>
          </a>
        </div>
        <a href="/login" className="nav-link logout">
          <LogOut className="nav-icon" size={20} />
          <span>ออกจากระบบ</span>
        </a>
      </div>
    </nav>
  );
}