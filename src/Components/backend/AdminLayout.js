import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer"
import { AUTH_TOKEN } from "../../services/auth";

const AdminLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const authToken = localStorage.getItem('AUTH_TOKEN');
    if( AUTH_TOKEN !== authToken) {
      navigate('/admin/login');
    }
  }, [navigate]);
  
  
  return (
    <div className="layout">
      <header>
        <Header />
      </header>

      <div className="container-wrapper ">
        <aside>
          <Sidebar />
        </aside>

        <div className="content-wrapper">
          <Outlet />
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AdminLayout;
