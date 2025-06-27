import "./App.css";

// import Footer from "./Components/layout/Footer";
// import Header from "./Components/layout/Header";
// import Sidebar from "./Components/layout/Sidebar";

import Student from "./Components/layout/Student";
import Dashboard from "./pages/backend/DashBoard";
import ContactUs from "./pages/frontend/ContactUS";
import Home from "./pages/frontend/Home";

import { BrowserRouter, Routes, Route } from "react-router";
import AdminLayout from "./Components/backend/AdminLayout";
import Layout from "./Components/frontend/Layout";
import About from "./pages/frontend/About";
import Login from "./pages/backend/Login";
import SignUp from "./pages/backend/SignUp";

function App() {
  return (
    <div className="app-layout">
      <BrowserRouter>
        <Routes>
          {/*frontend routes*/}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact-us" element={<ContactUs />} />
          </Route>

          {/*admin routes*/}
          <Route path="/admin/login" element={<Login/>} />
          <Route path="/admin/signup" element={<SignUp/>} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/contact-us" element={<ContactUs />} />
            <Route path="/admin/student" element={<Student />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
