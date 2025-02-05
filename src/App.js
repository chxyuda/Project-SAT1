import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy load components
const Login = React.lazy(() => import('./pages/login/Login'));
const SignUp = React.lazy(() => import('./pages/signup/SignUp'));
const Header = React.lazy(() => import('./components/Header'));
const SuccessModal = React.lazy(() => import('./components/SuccessModal'));
const ForgotPassword = React.lazy(() => import('./pages/forgotpassword/ForgotPassword'));
const VerifyCode = React.lazy(() => import('./pages/verifycode/VerifyCode'));
const SetNewPassword = React.lazy(() => import('./pages/setnewpassword/SetNewPassword'));

// Admin pages
const ITDashboard = React.lazy(() => import('./pages/admin/ITDashboard'));
const Inventory = React.lazy(() => import('./pages/admin/Inventory'));
const Settings = React.lazy(() => import('./pages/admin/Settings'));
const Personnel = React.lazy(() => import('./pages/admin/Personnel'));
const BorrowReturn = React.lazy(() => import('./pages/admin/BorrowReturn'));
const Request = React.lazy(() => import('./pages/admin/Request'));
const Dashboard = React.lazy(() => import('./pages/admin/Dashboard'));
const StaffProfile = React.lazy(() => import('./pages/admin/StaffProfile'));

// User pages
const Borrow = React.lazy(() => import('./pages/borrow/Borrow'));
const BorrowStatus = React.lazy(() => import('./pages/borrow/BorrowStatus'));
const ChangePassword = React.lazy(() => import('./pages/changepassword/ChangePassword'));
const EditProfile = React.lazy(() => import('./pages/editprofile/EditProfile'));
const UserDashboard = React.lazy(() => import('./pages/index/index'));
const PasswordReset = React.lazy(() => import('./pages/passwordreset/PasswordReset'));
const PasswordSuccessful = React.lazy(() => import('./pages/passwordsuccessful/PasswordSuccessful'));
const RequestForm = React.lazy(() => import('./pages/request/RequestForm'));
const RequestHistory = React.lazy(() => import('./pages/request/RequestHistory'));
const RequestStatus = React.lazy(() => import('./pages/request/RequestStatus'));
const ReturningHistory = React.lazy(() => import('./pages/returninghistory/ReturningHistory'));
const Track = React.lazy(() => import('./pages/track/Track'));
const WithdrawalHistory = React.lazy(() => import('./pages/withdrawalhistory/WithdrawalHistory'));

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
          
          {/* เจ้าหน้าที่IT routes */}
          <Route path="/it-dashboard" element={<ITDashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/personnel" element={<Personnel />} />
          <Route path="/borrow-return" element={<BorrowReturn />} />
          <Route path="/request" element={<Request />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/staff-profile" element={<StaffProfile />} />
          
          {/* User routes */}
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/borrow" element={<Borrow />} />
          <Route path="/borrow-status" element={<BorrowStatus />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route path="/password-successful" element={<PasswordSuccessful />} />
          <Route path="/request-form" element={<RequestForm />} />
          <Route path="/request-history" element={<RequestHistory />} />
          <Route path="/request-status" element={<RequestStatus />} />
          <Route path="/returning-history" element={<ReturningHistory />} />
          <Route path="/track" element={<Track />} />
          <Route path="/withdrawal-history" element={<WithdrawalHistory />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;