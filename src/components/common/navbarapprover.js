import React from 'react';
import { FileText, Package, Activity, History, Lock, User, LogOut } from 'lucide-react';
import "./navbarapprover.css"

export default function navbarapprover() {
    return (

        <div class="nav-approver">
            <div>
                <a href="updated_ขอเบิก.html">สถานะการขอเบิก</a>
                <a href="updated_ขอยืมคืน.html">สถานะการยืม-คืน</a>
                <a href="ประวัติการเบิกยืม.html">ประวัติการเบิก-การยืม-คืน</a>
                <a href="dashboard.html">Dashboard</a>
            </div>
            <div>
                <a href="/" class="logout-approver">&#10140; Log out</a>
                <a href="/approver-page">ผู้อนุมัติ</a>
            </div>
        </div>

    );
}