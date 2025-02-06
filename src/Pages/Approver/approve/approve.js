import React, { useState, useEffect } from 'react';
import { Clock, UserCircle } from 'lucide-react';
import NavbarApprover from '../../../components/common/navbarapprover';
import './approve.css';
import BGclip from "../../../assets/background.mp4"
import HeaderApprover from "../../../components/common/HeaderApprover";


const Approve = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            const thaiYear = now.getFullYear() + 543;
            const thaiMonths = [
                "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
                "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
            ];

            const day = now.getDate();
            const month = thaiMonths[now.getMonth()];
            const weekday = now.toLocaleDateString('th-TH', { weekday: 'long' });

            const formattedDate = `วัน${weekday}ที่ ${day} ${month} พ.ศ. ${thaiYear}`;
            const formattedTime = now.toLocaleTimeString('th-TH');

            setDate(formattedDate);
            setTime(formattedTime);
        };

        updateDateTime();
        const timer = setInterval(updateDateTime, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="approve-container">

            <HeaderApprover />

            <NavbarApprover />

            <div class="content">
                <div class="box-container">
                    <div class="icon">
                        &#128100;
                    </div>
                    <div class="text">
                        ผู้อนุมัติ
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Approve;