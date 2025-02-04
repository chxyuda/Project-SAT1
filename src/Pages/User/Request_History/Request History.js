import React, { useEffect, useState } from "react";
import navbar from "../../../components/common/navbar";
import "./Request History.css";


const RequestHistory = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
            setDate(now.toLocaleDateString("th-TH", options));
            setTime(now.toLocaleTimeString("th-TH", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <header className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
                <div className="flex items-center">
                    <img src="logo.png" alt="Logo" className="w-10 h-10 mr-2" />
                    <div>
                        <div className="font-bold">SPORTS AUTHORITY OF THAILAND</div>
                        <div className="text-sm">Computer Equipment Management System</div>
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-sm">{date}</div>
                    <div className="text-lg font-bold">{time}</div>
                </div>
            </header>

        < nav></nav>
            <main className="p-6">
                <h2 className="text-center text-2xl font-bold mb-6">ประวัติการเบิก</h2>
                <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 p-2">ลำดับ</th>
                                <th className="border border-gray-300 p-2">ชื่อผู้เบิก</th>
                                <th className="border border-gray-300 p-2">ชื่อฝ่ายสำนัก</th>
                                <th className="border border-gray-300 p-2">อุปกรณ์</th>
                                <th className="border border-gray-300 p-2">วันที่ขอเบิก</th>
                                <th className="border border-gray-300 p-2">สถานะ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[...Array(5)].map((_, index) => (
                                <tr key={index}>
                                    <td className="border border-gray-300 p-2 text-center">{index + 1}</td>
                                    <td className="border border-gray-300 p-2"></td>
                                    <td className="border border-gray-300 p-2"></td>
                                    <td className="border border-gray-300 p-2"></td>
                                    <td className="border border-gray-300 p-2"></td>
                                    <td className="border border-gray-300 p-2"></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="text-center mt-4">
                        {[...Array(10)].map((_, index) => (
                            <button
                                key={index}
                                className="border border-gray-300 p-2 mx-1 rounded hover:bg-blue-600 hover:text-white"
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="text-center mt-6">
                    <a href="ประวัติการเบิกยืม.html" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">ย้อนกลับ</a>
                </div>
            </main>
        </div>
    );
};

export default RequestHistory;
