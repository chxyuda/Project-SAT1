import React from "react";
import "./password_reset.css"; // ลิงก์ไฟล์ CSS
const PasswordReset = () => {
    return (
        <div className="flex justify-center items-center h-screen overflow-hidden relative">
            {/* วิดีโอพื้นหลัง */}
            <video className="absolute top-0 left-0 w-full h-full object-cover -z-10" autoPlay muted loop>
                <source src="พื้นหลัง2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* ไอคอนย้อนกลับ */}
            <a href="#" className="absolute top-5 left-5 text-2xl text-blue-500 cursor-pointer hover:text-blue-700">
                &#8592;
            </a>

            {/* คอนเทนเนอร์ */}
            <div className="text-center bg-white p-10 rounded-lg shadow-lg w-96 z-10 animate-fadeIn">
                <div className="text-6xl text-blue-500 mb-5">&#128100;</div>
                <h1 className="text-2xl text-gray-800 font-semibold mb-3">Password Reset</h1>
                <p className="text-sm text-gray-600 mb-6">Your password has been successfully reset. Click confirm to set a new password.</p>
                <button className="w-full py-3 text-white bg-blue-500 rounded-md font-semibold shadow-md transition duration-300 hover:bg-blue-700 active:scale-95">
                    Confirm
                </button>
            </div>
        </div>
    );
};

export default PasswordReset;
