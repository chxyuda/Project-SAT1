import react from "react";
import navbar from "../../../components/common/navbar";
import "./borrow.css";



    return (
        <div>
            <video className="background-video" autoPlay muted loop>
                <source src="พื้นหลัง2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

           < nav></nav>

            {/* Content */}
            <main className="content">
                <div className="form-container">
                    <h2>รายละเอียดการยืม-คืน วัสดุ</h2>
                    <div className="form-group">
                        <label>ชื่อผู้ยืม:</label>
                        <input type="text" placeholder="กรอกชื่อผู้ยืม" />
                    </div>
                    <div className="form-group">
                        <label>ฝ่ายสำนัก:</label>
                        <input type="text" placeholder="กรอกฝ่ายสำนัก" />
                    </div>
                    <div className="form-group">
                        <label>เบอร์โทรภายใน:</label>
                        <input type="text" placeholder="กรอกเบอร์โทรภายใน" />
                    </div>
                    <div className="form-group">
                        <label>E-mail:</label>
                        <input type="email" placeholder="กรอกอีเมล" />
                    </div>
                    <div className="form-group">
                        <label>ประเภท:</label>
                        <select>
                            <option value="">เลือกประเภท</option>
                            <option value="type1">Type 1</option>
                            <option value="type2">Type 2</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>อุปกรณ์:</label>
                        <select>
                            <option value="">เลือกอุปกรณ์</option>
                            <option value="equipment1">Equipment 1</option>
                            <option value="equipment2">Equipment 2</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>ยี่ห้อ:</label>
                        <select>
                            <option value="">เลือกยี่ห้อ</option>
                            <option value="brand1">Brand 1</option>
                            <option value="brand2">Brand 2</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>จำนวนคงเหลือ:</label>
                        <input type="number" placeholder="ระบุจำนวนคงเหลือ" readOnly value="0" />
                    </div>
                    <div className="form-group">
                        <label>จำนวน:</label>
                        <input type="number" placeholder="ระบุจำนวนที่ต้องการยืม" />
                    </div>
                    <div className="form-group">
                        <label>หมายเหตุ:</label>
                        <input type="text" placeholder="ระบุหมายเหตุ" />
                    </div>
                    <div className="form-group">
                        <label>วันที่ยืม:</label>
                        <input type="date" value={borrowDate} />
                    </div>
                    <div className="form-group">
                        <label>วันที่คืน:</label>
                        <input type="date" />
                    </div>
                    <div className="buttons">
                        <button type="submit">ยืนยันการยืม</button>
                    </div>
                </div>
            </main>
        </div>
    );

export default BorrowEquipment;
