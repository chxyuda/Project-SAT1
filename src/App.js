import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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