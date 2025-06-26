import "./App.css";

// import Footer from "./Components/layout/Footer";
// import Header from "./Components/layout/Header";
// import Sidebar from "./Components/layout/Sidebar";

// import Student from "./Components/layout/Student";
import Dashboard from "./pages/backend/DashBoard";
import ContactUs from "./pages/frontend/ContactUS";
import Home from "./pages/frontend/Home";

import { BrowserRouter, Routes, Route } from "react-router";
import AdminLayout from "./Components/backend/AdminLayout";
import Layout from "./Components/frontend/Layout";
import About from "./pages/frontend/About";

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
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/contact-us" element={<ContactUs />} />
          </Route>
        </Routes>

        {/* <div className="app-container">
          
          
          <header>
            <Header />
          </header>
          <aside>
            <Sidebar />
          </aside>
          <main>
            <section className="content-section">
              <Routes>
                <Route path="/student" element={<Student />} />
                <Route path="/home" element={<Home />} />
                <Route path="/contact-us" element={<ContactUs />} />
              </Routes>
            </section>
          </main>
          <footer>
            <Footer />
          </footer>
        </div> */}
      </BrowserRouter>
      </div>
    
  );
}

export default App;
