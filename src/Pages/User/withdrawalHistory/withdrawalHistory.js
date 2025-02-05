import React, { useState, useEffect } from 'react';
import { Clock, FileText, ClipboardList } from 'lucide-react';
import Navbar from "../../../components/common/navbar/navbar";
import './withdrawal-history.css';
import Bgclip from '../../../assets/background.mp4'
import Header from "../../../components/Header";

const WithdrawalHistory = () => {
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

            <div class="content-wdh">
                <div class="box-container-wdh">
                    <h2>ประวัติการเบิก-การยืม-คืน</h2>
                    <div class="card-container-wdh">
                        <a href="/request-history" class="card-wdh card-issue-wdh">ประวัติการขอเบิก</a>
                        <a href="/returning-history" class="card-wdh card-borrow-wdh">ประวัติการยืม-คืน</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WithdrawalHistory;