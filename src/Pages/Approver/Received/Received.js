import React, { useEffect, useState } from "react";
import "./Received.css";
import HeaderApprover from "../../../components/common/HeaderApprover";

function Received() {

    return (
        <div>
            <HeaderApprover />

            <div class="content">
                <div class="section-title">ข้อมูลการเบิก</div>
                <div id="totalItems" style={{ marginBottom: "20px", fontSize: "18px", color: "#555" }}>จำนวนการรับของ: 0 รายการ</div>
                <div class="button-container">
                    <button onclick="location.href='รอรับของ.html'">รอรับของ</button>
                    <button onclick="location.href='รับของแล้ว.html'">รับของแล้ว</button>
                </div>
                <div class="search-bar">
                    <input type="date" id="searchDate" placeholder="ค้นหาด้วยวันที่" />
                    <button onclick="searchByDate()">ค้นหา</button>
                </div>
                <table class="table" id="dataTable">
                    <thead>
                        <tr>
                            <th>ลำดับ</th>
                            <th>ชื่อผู้เบิก</th>
                            <th>ฝ่ายสำนัก</th>
                            <th>ชื่อวัสดุอุปกรณ์</th>
                            <th>วันที่ขอเบิก</th>
                            <th>จำนวน</th>
                            <th>คงเหลือ</th>
                            <th>หมายเหตุ</th>
                        </tr>
                    </thead>
                    <tbody id="tableBody">
                        <tr><td colspan="6">ไม่มีข้อมูล</td></tr>
                    </tbody>
                </table>
                <div class="pagination">
                    <button onclick="alert('ฟังก์ชันแบ่งหน้ายังไม่ทำงาน')">1</button>
                    <button onclick="alert('ฟังก์ชันแบ่งหน้ายังไม่ทำงาน')">2</button>
                    <button onclick="alert('ฟังก์ชันแบ่งหน้ายังไม่ทำงาน')">3</button>
                    <button onclick="alert('ฟังก์ชันแบ่งหน้ายังไม่ทำงาน')">4</button>
                    <button onclick="alert('ฟังก์ชันแบ่งหน้ายังไม่ทำงาน')">5</button>
                </div>
                <a href="/approver-page" class="back-button">ย้อนกลับ</a>
            </div>
        </div>
    );
}

export default Received;
