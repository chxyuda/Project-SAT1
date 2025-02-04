import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Login = lazy(() => import("./login"));
const SignUp = lazy(() => import("./SignUp"));
const Header = lazy(() => import("./Header"));
const SuccessModal = lazy(() => import("./SuccessModal"));
const ForgotPassword = lazy(() => import("./Pages/ForgotPassword"));
const VerifyCode = lazy(() => import("./Pages/VerifyCode"));
const SetNewPassword = lazy(() => import("./Pages/SetNewPassword"));
const ITDashboard = lazy(() => import("./Pages/ITDashboard"));
const Inventory = lazy(() => import("./Pages/Inventory"));
const Settings = lazy(() => import("./Pages/Settings"));
const Personnel = lazy(() => import("./Pages/Personnel"));
const BorrowReturn = lazy(() => import("./Pages/BorrowReturn"));
const Request = lazy(() => import("./Pages/Request"));
const Dashboard = lazy(() => import("./Pages/Dashboard"));
const StaffProfile = lazy(() => import("./Pages/StaffProfile"));
const Borrow = lazy(() => import("./Pages/User/borrow/Borrow"));
const BorrowStatus = lazy(() => import("./Pages/User/borrowstatus/BorrowStatus"));
const ChangePassword = lazy(() => import("./Pages/User/changepassword/ChangePassword"));
const EditProfile = lazy(() => import("./Pages/User/editprofile/EditProfile"));
const Dashboard = lazy(() => import("./Pages/User/index/index"));
const PasswordReset = lazy(() => import("./Pages/User/passwordreset/PasswordReset"));
const PasswordSuccessful = lazy(() => import("./Pages/User/passwordsuccessful/PasswordSuccessful"));
const RequestForm = lazy(() => import("./Pages/User/RequestForm/RequestForm"));
const RequestHistory = lazy(() => import("./Pages/User/RequestHistory/RequestHistory"));
const RequestStatus = lazy(() => import("./Pages/User/requeststatus/RequestStatus"));
const ReturningHistory = lazy(() => import("./Pages/User/returningHistory/ReturningHistory"));
const Track = lazy(() => import() => import("./Pages/User/track/Track"));
const WithdrawalHistory = lazy(() => import("./Pages/User/withdrawalHistory/WithdrawalHistory"));





const UserDashboard = lazy(() => import("./Pages/User/Dashboard"));
const EditProfile = lazy(() =>
  import("./Pages/User/editprofile/edit_profile")
);
const ChangePassword = lazy(() =>
  import("./Pages/User/changepassword/change_password")
);
const Borrow = lazy(() => import("./Pages/User/borrow/borrow"));
const PasswordReset = lazy(() =>
  import("./Pages/User/passwordreset/password_reset")
);
const PasswordSuccessful = lazy(() =>
  import("./Pages/User/passwordsuccessful/password_successful")
);
const RequestForm = lazy(() => import("./Pages/User/RequestForm/RequestForm"));
const Track = lazy(() => import("./Pages/User/track/track"));
const RequestHistory = lazy(() =>
  import("./Pages/User/RequestHistory/Request History")
);
const WithdrawalHistory = lazy(() =>
  import("./Pages/User/withdrawalHistory/withdrawalHistory")
);
const ReturningHistory = lazy(() =>
  import("./Pages/User/returningHistory/returningHistory")
);
const RequestStatus = lazy(() =>
  import("./Pages/User/requeststatus/request status")
);
const BorrowStatus = lazy(() =>
  import("./Pages/User/borrowstatus/borrow-status")
);

const Loading = () => <div>Loading...</div>;

function App() {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      // อัปเดตเวลา
      setCurrentTime(now.toLocaleTimeString("th-TH", { hour12: false }));

      // แปลงวันที่
      const dayNames = [
        "วันอาทิตย์",
        "วันจันทร์",
        "วันอังคาร",
        "วันพุธ",
        "วันพฤหัสบดี",
        "วันศุกร์",
        "วันเสาร์",
      ];
      const monthNames = [
        "มกราคม",
        "กุมภาพันธ์",
        "มีนาคม",
        "เมษายน",
        "พฤษภาคม",
        "มิถุนายน",
        "กรกฎาคม",
        "สิงหาคม",
        "กันยายน",
        "ตุลาคม",
        "พฤศจิกายน",
        "ธันวาคม",
      ];

      const dayName = dayNames[now.getDay()];
      const day = now.getDate();
      const month = monthNames[now.getMonth()];
      const year = now.getFullYear() + 543; // แปลงเป็น พ.ศ.

      setCurrentDate(`${dayName}ที่ ${day} ${month} ${year}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <Header currentTime={currentTime} currentDate={currentDate} />
      <div className="content">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/success" element={<SuccessModal />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/verify-code" element={<VerifyCode />} />
            <Route path="/set-new-password" element={<SetNewPassword />} />
            <Route path="/ITDashboard" element={<ITDashboard />} />
            <Route path="/it-dashboard" element={<ITDashboard />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/personnel" element={<Personnel />} />
            <Route path="/borrow-return" element={<BorrowReturn />} />
            <Route path="/request" element={<Request />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/staff-profile" element={<StaffProfile />} />
            <Route path="/user-dashboard" element={<UserDashboard />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/borrow" element={<Borrow />} />
            <Route path="/password-reset" element={<PasswordReset />} />
            <Route path="/borrow" element={<Borrow />} />
            <Route path="/borrow-status" element={<BorrowStatus />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/request-form" element={<RequestForm />} />
            <Route path="/request-history" element={<RequestHistory />} />
            <Route path="/request-status" element={<RequestStatus />} />
            <Route path="/returning-history" element={<ReturningHistory />} />
            <Route path="/track" element={<Track />} />
            <Route path="/withdrawal-history" element={<WithdrawalHistory />} />
            <Route
              path="/password-successful"
              element={<PasswordSuccessful />}
            />
            <Route path="/requestform" element={<RequestForm />} />
            <Route path="/track" element={<Track />} />
            <Route path="/request-History" element={<RequestHistory />} />
            <Route path="/withdrawalHistory" element={<WithdrawalHistory />} />
            <Route path="/password-reset" element={<PasswordReset />} />
            <Route path="/password-successful" element={<PasswordSuccessful />} />
            <Route
              path="/returningHistory"
              element={<ReturningHistory />}
            />
            <Route path="/request-status" element={<RequestStatus />} />
            <Route path="/borrow-status" element={<BorrowStatus />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
