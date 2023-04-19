import { useState } from "react";
import Table from "./information";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Scrap";
import Servicerequest from "./servicerequest";
import Fuelusage from "./fuelusage";
import Complaint from "./complaint";
const Header = () => {
  const [toggle, setToogle] = useState("sidebar");
  const [check, setCheck] = useState(true);
  const Logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <BrowserRouter>
      <div className={toggle}>
        <div className="logo-details">
          <i className="bx bx-power-off"></i>
          <span className="logo_name">Generator</span>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/dashboard">
              <i className="bx bx-grid-alt"></i>
              <span className="links_name"> Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/fuelusage">
              <i className="bx bx-pie-chart-alt-2"></i>
              <span className="links_name">Fuel Usage</span>
            </Link>
          </li>
          <li>
            <Link to="/servicerequest">
              <i className="bx bxs-bug-alt"></i>
              <span className="links_name">Servicerequest</span>
            </Link>
          </li>
          <li>
            <Link to="/complaint">
              <i className="bx bxs-bug-alt"></i>
              <span className="links_name">Complaint</span>
            </Link>
          </li>
          <li className="log_out">
            <a href="#" onClick={Logout}>
              <i className="bx bx-log-out"></i>
              <span className="links_name">Log out</span>
            </a>
          </li>
        </ul>
      </div>
      <section className="home-section">
        <nav>
          <div className="sidebar-button">
            <i
              className="bx bx-menu sidebarBtn"
              onClick={() => {
                if (check) {
                  setToogle("sidebar");
                  setCheck(false);
                } else {
                  setToogle("sidebar active");
                  setCheck(true);
                }
              }}
            ></i>
            <span className="dashboard">User Dashboard</span>
          </div>
        </nav>

        <div className="home-content">
          <Routes>
            <Route path="/dashboard" element={<Table />}></Route>
            <Route path="/fuelusage" element={<Fuelusage />}></Route>
            <Route path="/servicerequest" element={<Servicerequest />}></Route>
            <Route path="/complaint" element={<Complaint />}></Route>
          </Routes>
        </div>
      </section>
    </BrowserRouter>
  );
};
export default Header;
