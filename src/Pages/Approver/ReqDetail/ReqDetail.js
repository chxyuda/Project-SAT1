import React, { useEffect, useState } from "react";
import "./ReqDetail.css";
import Logo from "../../../assets/Logo.png"
import HeaderApprover from "../../../components/common/HeaderApprover";

const requestDetails = {
    name: "สมชาย ใจดี",
    department: "ฝ่ายไอที",
    phone: "1234",
    email: "somchai@example.com",
    type: "คอมพิวเตอร์",
    itemName: "โน้ตบุ๊ก",
    brand: "Dell",
    assetNumber: "123456",
    note: "ใช้สำหรับการประชุม",
    amount: "2",
    requestDate: "01/01/2025",
};

function ReqDetail() {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            const dateOptions = {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                timeZone: "Asia/Bangkok",
            };
            const timeOptions = {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                timeZone: "Asia/Bangkok",
            };
            setDate(now.toLocaleDateString("th-TH", dateOptions));
            setTime(now.toLocaleTimeString("th-TH", timeOptions));
        };

        updateDateTime();
        const interval = setInterval(updateDateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <HeaderApprover />

            <div className="container">
                <div className="details">
                    <h3>รายละเอียดการยืม-คืน</h3>
                    <p><strong>ชื่อผู้ยืม-คืน:</strong> {requestDetails.name}</p>
                    <p><strong>ฝ่ายสำนัก:</strong> {requestDetails.department}</p>
                    <p><strong>เบอร์ภายใน:</strong> {requestDetails.phone}</p>
                    <p><strong>E-mail:</strong> {requestDetails.email}</p>
                    <p><strong>ประเภท:</strong> {requestDetails.type}</p>
                    <p><strong>ชื่อวัสดุ:</strong> {requestDetails.itemName}</p>
                    <p><strong>ยี่ห้อ:</strong> {requestDetails.brand}</p>
                    <p><strong>หมายเลขครุภัณฑ์:</strong> {requestDetails.assetNumber}</p>
                    <p><strong>หมายเหตุการยืม-คืน:</strong> {requestDetails.note}</p>
                    <p><strong>จำนวน:</strong> {requestDetails.amount}</p>
                    <p><strong>วันที่ยืม:</strong> {requestDetails.requestDate}</p>
                    <p><strong>วันที่คืน:</strong> {requestDetails.requestDate}</p>

                </div>

                <div className="control">
                    <h3>จำนวนคงเหลือ</h3>
                    <input type="number" id="remaining" placeholder="ระบุจำนวนคงเหลือ" readOnly value="0" />
                    <h3>รายละเอียด</h3>
                    <input type="text" id="details" placeholder="รายละเอียด" readOnly value="-" />
                    <h3>การอนุมัติ</h3>
                    <select id="status">
                        <option>อนุมัติ</option>
                        <option>ไม่อนุมัติ</option>
                    </select>
                    <label htmlFor="reason">เหตุผล:</label>
                    <textarea id="reason" rows="5"></textarea>
                    <button>ตกลง</button>
                </div>
            </div>

            <div className="footer">
                <a href="/approver-page" className="back-button">ย้อนกลับ</a>
            </div>
        </div>
    );
}

export default ReqDetail;
