
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <div className="app-layout">
      <header>
        <Header/>
      </header>
      
        <div className="container">
          <Outlet/>
        </div>
 
      <footer>
        <Footer/>
      </footer>
    </div>
    </>
  );
}
export default Layout;