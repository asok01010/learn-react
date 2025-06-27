import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";



const AdminLayout = () => {
  return (
    <div className="layout">
      <header>
        <Header/>
      </header>

    <aside>

      <Sidebar/>
    </aside>

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