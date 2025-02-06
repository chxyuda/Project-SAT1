
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login";
import SignUp from "./SignUp";
import Header from "./Header";
import SuccessModal from "./SuccessModal";
import ForgotPassword from "./Pages/ForgotPassword";
import VerifyCode from "./Pages/VerifyCode"; // สร้างไฟล์นี้ใหม่
import SetNewPassword from "./Pages/SetNewPassword";
import ITDashboard from "./Pages/ITDashboard";
import Inventory from "./Pages/Inventory";
import Settings from "./Pages/Settings";
import Personnel from "./Pages/Personnel";
import BorrowReturn from "./Pages/BorrowReturn";
import Request from "./Pages/Request";
import Dashboard from "./Pages/Dashboard";
import StaffProfile from "./Pages/StaffProfile";
import ProfileModal from "./Pages/ProfileModal";


// Lazy load components
const Login = React.lazy(() => import('./login'));
const SignUp = React.lazy(() => import('./SignUp'));
const Header = React.lazy(() => import('./components/Header'));
const SuccessModal = React.lazy(() => import('./components/SuccessModal'));
const ForgotPassword = React.lazy(() => import('./Pages/ForgotPassword'));
const VerifyCode = React.lazy(() => import('./Pages/VerifyCode'));
const SetNewPassword = React.lazy(() => import('./Pages/SetNewPassword'));

// Admin pages
const ITDashboard = React.lazy(() => import('./Pages/ITDashboard'));
const Inventory = React.lazy(() => import('./Pages/Inventory'));
const Settings = React.lazy(() => import('./Pages/Settings'));
const Personnel = React.lazy(() => import('./Pages/Personnel'));
const BorrowReturn = React.lazy(() => import('./Pages/BorrowReturn'));
const Request = React.lazy(() => import('./Pages/Request'));
const Dashboard = React.lazy(() => import('./Pages/Dashboard'));
const StaffProfile = React.lazy(() => import('./Pages/StaffProfile'));

// User pages
const Borrow = React.lazy(() => import('./Pages/User/borrow/borrow'));
const BorrowStatus = React.lazy(() => import('./Pages/User/borrowstatus/BorrowStatus.js'));
const ChangePassword = React.lazy(() => import('./Pages/User/changepassword/ChangePassword.js'));
const EditProfile = React.lazy(() => import('./Pages/User/editprofile/EditProfile'));
const UserDashboard = React.lazy(() => import('./Pages/User/index/index'));
const PasswordReset = React.lazy(() => import('./Pages/User/passwordreset/PasswordReset'));
const PasswordSuccessful = React.lazy(() => import('./Pages/User/passwordsuccessful/PasswordSuccessful'));
const RequestForm = React.lazy(() => import('./Pages/User/RequestForm/RequestForm'));
const RequestHistory = React.lazy(() => import('./Pages/User/RequestHistory/RequestHistory'));
const RequestStatus = React.lazy(() => import('./Pages/User/requeststatus/RequestStatus'));
const ReturningHistory = React.lazy(() => import('./Pages/User/returningHistory/returningHistory.js'));
const Track = React.lazy(() => import('./Pages/User/track/track'));
const WithdrawalHistory = React.lazy(() => import('./Pages/User/withdrawalHistory/withdrawalHistory.js'));


// Approver components
const Approverpage = React.lazy(() => import('./Pages/Approver/approve/approve.js'));
const Borrowing = React.lazy(() => import('./Pages/Approver/Borrowing/Borrowing.js'));
const BorrowreturnApprove = React.lazy(() => import('./Pages/Approver/BorrowReturn/BorrowReturn.js'));
const BRDetail = React.lazy(() => import('./Pages/Approver/BRDetail/BRDetail.js'));
// const DashboardApprover = React.lazy(() => import('./Pages/Approver/DashboardApprover/DashboardApprover.js'));
const Itemspage = React.lazy(() => import('./Pages/Approver/Items/Items.js'));
const Pendingpage = React.lazy(() => import('./Pages/Approver/Pending/Pending.js'));
const Receivedpage = React.lazy(() => import('./Pages/Approver/Received/Received.js'));
const ReqBorrowHistory = React.lazy(() => import('./Pages/Approver/History/ReqBorrowHistory.js'));
const ReqBorrow = React.lazy(() => import('./Pages/Approver/History/ReqBorrow.js'));
const ReqHis = React.lazy(() => import('./Pages/Approver/History/ReqHistory.js'));
const ReqDetail = React.lazy(() => import('./Pages/Approver/ReqDetail/ReqDetail.js'));
const UpdateReq = React.lazy(() => import('./Pages/Approver/updated/UpdatedRequest.js'));
const UpdateBorrow = React.lazy(() => import('./Pages/Approver/updated/UpdatedBorrow.js'));








// Loading component
const Loading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* Auth routes */}
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/success" element={<SuccessModal />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify-code" element={<VerifyCode />} />
          <Route path="/set-new-password" element={<SetNewPassword />} />

          {/* Approver routes*/}
          <Route path="/approver-page" element={<Approverpage />} />
          <Route path="/borrow-page" element={<Borrowing />} />
          <Route path="/approve-borrow-return" element={<BorrowreturnApprove />} />
          <Route path="/br-detail" element={<BRDetail />} />
          {/* <Route path="/dashboard-approve" element={<DashboardApprover />} /> */}
          <Route path="/items-page" element={<Itemspage />} />
          <Route path="/pending-page" element={<Pendingpage />} />
          <Route path="/received-page" element={<Receivedpage />} />
          <Route path="/reqborrow-history-page" element={<ReqBorrowHistory />} />
          <Route path="/reqborrow-page" element={<ReqBorrow />} />
          <Route path="/reqhis-page" element={<ReqHis />} />
          <Route path="/reqdetail" element={<ReqDetail />} />
          <Route path="/updateReq" element={<UpdateReq />} />
          <Route path="/updateborrow" element={<UpdateBorrow />} />



          {/* เจ้าหน้าที่IT routes */}
          <Route path="/it-dashboard" element={<ITDashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/personnel" element={<Personnel />} />
          <Route path="/borrow-return" element={<BorrowReturn />} />
          <Route path="/request" element={<Request />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/staff-profile" element={<StaffProfile />} />

          <Route path="/profileModal/:id" element={<ProfileModal />} />

        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;