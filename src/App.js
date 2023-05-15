import { Navigate, Route, Routes } from "react-router-dom";
import JoinPage from "./page/joinPage/JoinPage";
import AppLayout from "./layouts/AppLayout";
import HomePage from "./page/homePage/HomePage";
import VerificationPage from "./page/verificationPage/VerificationPage";
import BlogsPage from "./page/blogsPage/BlogsPage";
import ProfilePage from "./page/profilePage/ProfilePage";
import ProfileUpdatePage from "./page/ProfileUpdatePage/ProfileUpdatePage";
import AadharVerificationPage from "./page/aadharVerificationPage/AadharVerificationPage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route index element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/blogs" element={<BlogsPage />} />

        <Route path="/updateProfile" element={<ProfileUpdatePage />} />

        <Route path="/join" element={<JoinPage />} />
        <Route path="/verification" element={<VerificationPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/aadhar" element={<AadharVerificationPage />} />
      </Routes>
      <ToastContainer newestOnTop closeOnClick rtl={false} pauseOnFocusLoss />
    </AppLayout>
  );
}

export default App;
