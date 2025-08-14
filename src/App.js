import "./App.css";

// import Footer from "./Components/layout/Footer";
// import Header from "./Components/layout/Header";
// import Sidebar from "./Components/layout/Sidebar";

import Dashboard from "./pages/backend/DashBoard";
import ContactUs from "./pages/frontend/ContactUS";
import Home from "./pages/frontend/Home";

import { BrowserRouter, Routes, Route } from "react-router";
import AdminLayout from "./Components/backend/AdminLayout";
import Layout from "./Components/frontend/Layout";
import About from "./pages/frontend/About";
import Login from "./pages/backend/Login";
import SignUp from "./pages/backend/SignUp";
import Blog from "./pages/backend/Blog";
import Create from "./pages/backend/Create";
import User from "./pages/backend/User";
import UserForm from "./pages/backend/UserForm";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
  

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
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/signup" element={<SignUp />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/blog" element={<Blog />} />
            <Route path="/admin/blog/create" element={<Create />} />
            <Route path="/admin/blog/edit/:id" element={<Create />} />

            <Route path="/admin/user" element={<User />} />
            <Route path="/admin/user/create" element={<UserForm />} />
            <Route path="/admin/user/edit/:id" element={<UserForm />} />
          </Route>
        </Routes>
         <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
