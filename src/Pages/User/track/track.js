import React, { useState, useEffect } from 'react';
import { Clock, FileText, ClipboardList } from 'lucide-react';
import Navbar from "../../../components/common/navbar/navbar";
import './track.css';
import Bgclip from '../../../assets/background.mp4'
import Header from "../../../components/Header";

const Track = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();

            const formattedDate = now.toLocaleDateString('th-TH', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            });

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

    return (
        <>
            <video autoPlay muted loop id="background-video">
                <source src={Bgclip} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <Header />
            <Navbar />
            <div class="content-track">
                <div class="box-container-track">
                    <h2>ติดตามสถานะคำขอ</h2>
                    <div class="card-container-track">
                        <a href="/request-status" class="card-track card-issue-track">สถานะการขอเบิก</a>
                        <a href="/borrow-status" class="card-track card-borrow-track">สถานะการยืม-คืน</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Track;