import React from 'react';
import { useState, useEffect } from "react";
import navbar from '../../../components/common/navbar';
import './request status.css';

    return (
        <div>
            <div className="header bg-blue-700 text-white p-4 flex justify-between items-center shadow-md">
                <div className="title flex items-center">
                    <img src="logo.png" alt="Logo" className="w-10 h-10 mr-2" />
                    <div>
                        <div className="font-bold text-lg">SPORTS AUTHORITY OF THAILAND</div>
                        <div className="text-sm">Computer Equipment Management System</div>
                    </div>
                </div>
                <div className="datetime text-right">
                    <div className="date text-sm">{date}</div>
                    <div className="time text-lg font-bold">{time}</div>
                </div>
            </div>

            < nav></nav>

            <div className="content p-5">
                <h2 className="text-center text-2xl font-bold mb-5">สถานะคำขอเบิก</h2>
                <div className="table-container max-w-4xl mx-auto bg-white rounded-lg p-5 shadow-md">
                    <table className="w-full border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border px-4 py-2">ลำดับ</th>
                                <th className="border px-4 py-2">ชื่อผู้เบิก</th>
                                <th className="border px-4 py-2">ชื่อฝ่ายสำนัก</th>
                                <th className="border px-4 py-2">อุปกรณ์</th>
                                <th className="border px-4 py-2">วันที่ขอเบิก</th>
                                <th className="border px-4 py-2">สถานะ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[...Array(5)].map((_, index) => (
                                <tr key={index}>
                                    <td className="border px-4 py-2"></td>
                                    <td className="border px-4 py-2"></td>
                                    <td className="border px-4 py-2"></td>
                                    <td className="border px-4 py-2"></td>
                                    <td className="border px-4 py-2"></td>
                                    <td className="border px-4 py-2"></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="pagination text-center mt-4">
                        {[...Array(10)].map((_, index) => (
                            <button key={index} className="px-3 py-1 mx-1 border border-gray-300 rounded hover:bg-blue-700 hover:text-white">
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="back-button text-center mt-5">
                    <a href="/Track" className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">ย้อนกลับ</a>
                </div>
            </div>
        </div>
    );

export default RequestStatus;
