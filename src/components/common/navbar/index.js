import React from 'react'

export default function navbar() {
  return (
    <div className="nav">
    <a href="/borrow">ยืมวัสดุ</a>
    <a href="/request-History">เบิกวัสดุ</a>
    <a href="/track">ติดตามสถานะคำขอ</a>
    <a href="/withdrawalHistory">ประวัติการเบิกคืน</a>
    <a href="/change-password">แก้ไขรหัสผ่าน</a>
    <a href="/edit-profile">แก้ไขโปรไฟล์</a>
    <a href="/login" className="logout">➡ Log out</a>
</div>
  )
}
