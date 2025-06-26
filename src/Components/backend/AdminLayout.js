import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";



const AdminLayout = () => {
  return (
    <div className="layout">
      <header>
        <Header/>
      </header>
      
        <div class="col-md-10 content-wrapper">
          <Outlet />
        </div>
 
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AdminLayout;