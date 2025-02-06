import React, { useState, useEffect } from 'react';
import { Clock, Users, Settings, FileText, LogOut } from 'lucide-react';
import Navbar from '../../../components/common/navbar/navbar';
import './index.css';
import Bgclip from '../../../assets/background.mp4'
import Header from "../../../components/Header";

const Index = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();

            // Format date: DD/MM/YYYY
            const formattedDate = now.toLocaleDateString('th-TH', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            });

            // Format time: HH:MM:SS
            const formattedTime = now.toLocaleTimeString('th-TH', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            });

            setDate(formattedDate);
            setTime(formattedTime);
        };

        updateDateTime();
        const timer = setInterval(updateDateTime, 1000);

        return () => clearInterval(timer);
    }, []);

    const menuItems = [
        {
            icon: <Users size={40} />,
            text: 'แก้ไขโปรไฟล์',
            link: '/edit-profile',
            color: '#3498db'
        },
        {
            icon: <Settings size={40} />,
            text: 'เปลี่ยนรหัสผ่าน',
            link: '/change-password',
            color: '#2ecc71'
        },
        {
            icon: <FileText size={40} />,
            text: 'ยืม-คืน อุปกรณ์',
            link: '/borrow',
            color: '#e74c3c'
        },
        {
            icon: <LogOut size={40} />,
            text: 'ออกจากระบบ',
            link: '/logout',
            color: '#95a5a6'
        }
    ];

    const handleLogout = (e) => {
        if (e.preventDefault) e.preventDefault();
        // Add logout logic here
        window.location.href = '/login';
    };

    return (
        <>
            <video className="background-video" autoPlay muted loop playsInline>
                <source src={Bgclip} type="video/mp4" />
                Your browser does not support the video tag.
            </video>


            <Header />
            <Navbar />

            <div class="content-idx">
                <div class="box-container-idx">
                    <div class="icon-idx">
                        &#128100;
                    </div>
                    <div class="text-idx">
                        ฝ่ายสำนัก
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;