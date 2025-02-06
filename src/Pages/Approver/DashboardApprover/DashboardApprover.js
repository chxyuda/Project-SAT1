import React, { useEffect, useRef, useState } from 'react';
import { Clock } from 'lucide-react';
import Chart from 'chart.js/auto';
import NavbarApprover from '../../../components/common/navbarapprover';
import { chartData } from 'chartData';
import './DashboardApprover.css';

const DashboardApprover = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const borrowReturnChartRef = useRef(null);
  const stockWithdrawalChartRef = useRef(null);
  const [selectedYear, setSelectedYear] = useState(2025);
  const chartsRef = useRef({});

  // Cleanup function to destroy charts
  const destroyCharts = () => {
    if (chartsRef.current.borrowReturn) {
      chartsRef.current.borrowReturn.destroy();
      chartsRef.current.borrowReturn = undefined;
    }
    if (chartsRef.current.stockWithdrawal) {
      chartsRef.current.stockWithdrawal.destroy();
      chartsRef.current.stockWithdrawal = undefined;
    }
  };

  // Update date and time
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const thaiYear = now.getFullYear() + 543;
      const thaiMonths = [
        "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน",
        "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม",
        "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
      ];

      const day = now.getDate();
      const month = thaiMonths[now.getMonth()];
      const weekday = now.toLocaleDateString('th-TH', { weekday: 'long' });

      const formattedDate = `${weekday}ที่ ${day} ${month} พ.ศ. ${thaiYear}`;
      const formattedTime = now.toLocaleTimeString('th-TH');

      setDate(formattedDate);
      setTime(formattedTime);
    };

    updateDateTime();
    const timer = setInterval(updateDateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Chart cleanup on unmount
  useEffect(() => {
    return () => {
      destroyCharts();
    };
  }, []);

  // Chart creation and update
  useEffect(() => {
    if (borrowReturnChartRef.current && stockWithdrawalChartRef.current) {
      destroyCharts();

      chartsRef.current = {
        borrowReturn: createBorrowReturnChart(borrowReturnChartRef.current, selectedYear),
        stockWithdrawal: createStockWithdrawalChart(stockWithdrawalChartRef.current, selectedYear)
      };
    }
  }, [selectedYear]);

  const createBorrowReturnChart = (canvas, year) => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    return new Chart(ctx, {
      type: 'bar',
      data: {
        labels: chartData.labels,
        datasets: [
          {
            label: 'จำนวนยืม',
            data: chartData.borrowDataByYear[year],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          },
          {
            label: 'จำนวนคืน',
            data: chartData.returnDataByYear[year],
            backgroundColor: 'rgba(255, 206, 86, 0.6)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1
          }
        ]
      },
      options: chartData.chartOptions
    });
  };

  const createStockWithdrawalChart = (canvas, year) => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    return new Chart(ctx, {
      type: 'bar',
      data: {
        labels: chartData.labels,
        datasets: [{
          label: 'เบิกวัสดุ (ชิ้น/ครั้ง)',
          data: chartData.withdrawalDataByYear[year],
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: chartData.chartOptions
    });
  };

  return (
    <div className="dashboard">
      <div className="header">
        <div className="title">
          <Clock className="logo" size={40} />
          <div>
            SPORTS AUTHORITY OF THAILAND
            <div className="sub-title">Computer Equipment Management System</div>
          </div>
        </div>
        <div className="datetime">
          <span className="date">{date}</span>
          <span className="time">{time}</span>
        </div>
      </div>

      <NavbarApprover />

      <div className="content">
        <div className="section-title">Dashboard</div>

        {/* Dashboard Boxes */}
        <div className="box-container">
          <div className="box box1">
            <h3>จำนวนวัสดุ</h3>
            <p><a href="#materials">เพิ่มเติม</a></p>
          </div>

          <div className="box box2">
            <h3>ยืม-คืนวัสดุ</h3>
            <p><a href="#borrow">เพิ่มเติม</a></p>
          </div>

          <div className="box box3">
            <h3>เบิกจ่ายวัสดุ</h3>
            <p><a href="#withdraw">เพิ่มเติม</a></p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="function-section">
          <h2>กราฟสรุปรายงานประจำปี</h2>
          <p className="description">
            เลือกปี พ.ศ. ที่ต้องการเพื่อดูข้อมูลการยืม-คืนวัสดุ และเบิกวัสดุ
          </p>

          <div className="year-selector">
            <label htmlFor="yearSelect">เลือกปี พ.ศ.:</label>
            <select
              id="yearSelect"
              value={selectedYear}
              onChange={(e) => setSelectedYear(Number(e.target.value))}
            >
              {chartData.availableYears.map(year => (
                <option key={year} value={year}>
                  {year + 543}
                </option>
              ))}
            </select>
          </div>

          <div className="chart-container">
            <h3>รายงานการยืม-คืนวัสดุ (รายปี)</h3>
            <canvas ref={borrowReturnChartRef}></canvas>
          </div>

          <div className="chart-container">
            <h3>รายงานจำนวนการเบิกวัสดุ (รายปี)</h3>
            <canvas ref={stockWithdrawalChartRef}></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardApprover;