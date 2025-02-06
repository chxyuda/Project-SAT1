import React, { useEffect, useState } from "react";
import "./Items.css";
import Logo from "../../../assets/Logo.png"
import HeaderApprover from "../../../components/common/HeaderApprover";

function Items() {
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

            <div className="content">
                <div className="section-title">จำนวนวัสดุอุปกรณ์ทั้งหมด</div>
                <div id="totalItems" style={{ marginBottom: "20px", fontSize: "18px", color: "#555" }}>จำนวนวัสดุทั้งหมด: 0 รายการ</div>
                <div className="search-bar">
                    <input type="text" id="searchInput" placeholder="ค้นหารายการ..." />
                    <button onclick="searchTable()">ค้นหา</button>
                </div>
                <table className="table" id="dataTable">
                    <thead>
                        <tr>
                            <th>รายการ</th>
                            <th>ชื่อวัสดุอุปกรณ์</th>
                            <th>วันที่</th>
                            <th>จำนวน</th>
                            <th>คงเหลือ</th>
                            <th>หมายเหตุ</th>
                        </tr>
                    </thead>
                    <tbody id="tableBody">
                        <tr><td colspan="6">ไม่มีข้อมูล</td></tr>
                    </tbody>
                </table>
                <div className="pagination">
                    <button onclick="goToPage(1)">1</button>
                    <button onclick="goToPage(2)">2</button>
                    <button onclick="goToPage(3)">3</button>
                    <button onclick="goToPage(4)">4</button>
                    <button onclick="goToPage(5)">5</button>
                </div>
                <a href="/approver-page" className="back-button">ย้อนกลับ</a>
            </div>
        </div>
    );
}

export default Items;
