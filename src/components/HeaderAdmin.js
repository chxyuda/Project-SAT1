import React from "react";
import logo from "../assets/Logo.png";
import "./HeaderAmin.css";

const HeaderAdmin = ({ currentTime, currentDate }) => {
    return (
        <header className="header-admin">
            <div className="header-container-admin">
                <div className="logo-container-admin">
                    <img src={logo} alt="SAT Logo" className="logo-admin" />
                    <div className="title-container-admin">
                        <div className="title-admin">SPORTS AUTHORITY OF THAILAND</div>
                        <div className="subtitle-admin">Computer Equipment Management System</div>
                    </div>
                </div>
                <div className="header-right-admin">
                    <div className="current-date-admin">{currentDate}</div>
                    <div className="current-time-admin">{currentTime}</div>
                </div>
            </div>
        </header>
    );
};

export default HeaderAdmin;