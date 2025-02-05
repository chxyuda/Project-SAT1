import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import userIcon from "./assets/icon1.png";
import axios from 'axios';
import BGclip from './assets/background.mp4'

const SignUp = () => {
    const [departments, setDepartments] = useState([]);
    const [sections, setSections] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [image, setImage] = useState(null); // ✅ เพิ่ม state ที่ขาดหายไป
    const [previewImage, setPreviewImage] = useState(null);
    const [dragging, setDragging] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        fullName: '',
        email: '',
        phone: '',
        department_id: '',
        section_id: '',
        task_id: '',
    });


    const [passwordMatch, setPasswordMatch] = useState(true);
    const navigate = useNavigate();

    // ✅ Fetch departments
    useEffect(() => {
        axios.get('http://localhost:5001/api/departments')
            .then(response => {
                setDepartments(response.data);
                console.log("✅ Departments Loaded:", response.data);
            })
            .catch(error => console.error('❌ Error fetching departments:', error));
    }, []);

    useEffect(() => {
        if (formData.department_id) {
            axios.get(`http://localhost:5001/api/sections/${formData.department_id}`)
                .then(response => {
                    setSections(response.data);
                    console.log("✅ Sections Loaded:", response.data);
                })
                .catch(error => console.error('❌ Error loading sections:', error));
        } else {
            setSections([]);
        }
    }, [formData.department_id]);

    useEffect(() => {
        if (formData.section_id) {
            axios.get(`http://localhost:5001/api/tasks/${formData.section_id}`)
                .then(response => {
                    setTasks(response.data);
                    console.log("✅ Tasks Loaded:", response.data);
                })
                .catch(error => console.error('❌ Error loading tasks:', error));
        } else {
            setTasks([]);
        }
    }, [formData.section_id]);

    useEffect(() => {
        setPasswordMatch(formData.password === formData.confirmPassword);
    }, [formData.password, formData.confirmPassword]);


    // ✅ Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData(prevState => ({
            ...prevState,
            [name]: value,
            ...(name === "department_id" && { section_id: "", task_id: "" }),
            ...(name === "section_id" && { task_id: "" })
        }));

        // ✅ ตรวจสอบว่ารหัสผ่านและยืนยันรหัสผ่านตรงกันแบบเรียลไทม์
        if (name === "confirmPassword") {
            setPasswordMatch(value === formData.password);
        }
    };

    // ✅ อัปโหลดไฟล์รูปภาพ
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData(prev => ({ ...prev, image: file })); // ✅ อัปเดตรูป

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // ✅ Handle form submit
    // ✅ ส่งข้อมูลไป Backend
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!passwordMatch) {
            alert("❌ รหัสผ่านไม่ตรงกัน!");
            return;
        }

        const selectedDepartment = departments.find(d => d.id == formData.department_id);
        const selectedSection = sections.find(s => s.id == formData.section_id);
        const selectedTask = tasks.find(t => t.id == formData.task_id);

        const userData = {
            username: formData.username,
            password: formData.password,
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            department_name: selectedDepartment ? selectedDepartment.name : "",
            section_name: selectedSection ? selectedSection.name : "",
            task_name: selectedTask ? selectedTask.name : "",
            image: formData.image || null // ✅ ถ้าไม่มีรูป ให้ส่งเป็น `null`
        };

        try {
            const response = await axios.post('http://localhost:5001/api/signup', userData, {
                headers: { "Content-Type": "multipart/form-data" }
            });

            if (response.data.success) {
                alert('✅ สมัครสมาชิกสำเร็จ!');
                navigate('/');
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error("❌ Signup Error:", error.response?.data?.message);
            alert(error.response?.data?.message || '❌ เกิดข้อผิดพลาด');
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = () => {
        setDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragging(false);
        const file = e.dataTransfer.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <video class="background-video" autoplay muted loop>
                <source src={BGclip} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <a href="/" class="back-icon">&#8592;</a>
            <div class="container">
                <div class="icon">&#128100;</div>
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div class="input-container">
                        <label for="username">Username</label>
                        <input type="text" name="username" placeholder="Enter your username" onChange={handleInputChange} />
                    </div>
                    <div class="input-container">
                        <label for="password">Password</label>
                        <input type="password" name="password" placeholder="Enter your password" onChange={handleInputChange} />
                    </div>
                    <div class="input-container">
                        <label>Confirm Password</label>
                        <input type="password" name="confirmPassword" placeholder="ยืนยันรหัสผ่าน" onChange={handleInputChange} />
                        {!passwordMatch && <small style={{ color: 'red' }}>รหัสผ่านและยืนยันรหัสผ่านไม่ตรงกัน</small>}
                    </div>
                    <div class="row">
                        <div class="input-container">
                            <label for="email">E-mail</label>
                            <input type="email" name="email" placeholder="example@sat.th" onChange={handleInputChange} />
                        </div>
                        <div class="input-container">
                            <label for="phone">เบอร์โทรภายใน</label>
                            <input type="text" name="phone" placeholder="เบอร์โทร" onChange={handleInputChange} />
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-container">
                            <label for="department">ฝ่าย/สำนัก</label>
                            <select name="department_id" value={formData.department_id} onChange={handleInputChange}>
                                <option value="">เลือก</option>
                                {departments.map(dept => <option key={dept.id} value={dept.id}>{dept.name}</option>)}
                            </select>
                        </div>
                        <div class="input-container">
                            <label for="division">กอง</label>
                            <select name="section_id" value={formData.section_id} onChange={handleInputChange} disabled={!formData.department_id}>
                                <option value="">เลือก</option>
                                {sections.map(section => <option key={section.id} value={section.id}>{section.name}</option>)}
                            </select>
                        </div>
                    </div>
                    <div class="input-container">
                        <label for="job">งาน</label>
                        <select name="task_id" value={formData.task_id} onChange={handleInputChange} disabled={!formData.section_id}>
                            <option value="">เลือก</option>
                            {tasks.map(task => <option key={task.id} value={task.id}>{task.name}</option>)}
                        </select>
                    </div>
                    <button class="button" type="submit">Sign Up</button>
                </form>
            </div>
        </>
    );
};

export default SignUp;
