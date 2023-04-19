import { useState } from "react";
import Table from "./information";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Maintenance from "./maintanance";
import Complaints from "./complaints";
import Sucesscomplaints from "./sucessComplaint";

const Header = () => {
  const [toggle, setToogle] = useState("sidebar");
  const [check, setCheck] = useState(true);
  var [data, setData] = useState([]);

  const Logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  const [pending, setPending] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/pendingComplaints").then((res) => {
      console.log(res.data);
      setPending(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:4000/getData").then((res) => {
      setData(res.data);
    });
  }, []);

  console.log(pending);
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
            <Link to="/maintanance">
              <i className="bx bx-pie-chart-alt-2"></i>
              <span className="links_name">Maintenance Report</span>
            </Link>
          </li>
          <li>
            <Link to="/complaints">
              <i className="bx bxs-bug-alt"></i>
              <span className="links_name">Pending Complaints</span>
            </Link>
          </li>
          <li>
            <Link to="/sucessComplaints">
              <i className="bx bxs-bug-alt"></i>
              <span className="links_name">Sucess Complaints</span>
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
            <span className="dashboard">Admin Dashboard</span>
          </div>
        </nav>

        <div className="home-content">
          <div className="overview-boxes">
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Complaints</div>
                <div className="number">{data.length}</div>
              </div>
              <i className="bx bx-error-alt cart"></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Solved Complaints</div>
                <div className="number">{data.length - pending.length}</div>
              </div>
              <i className="bx bx-error-alt cart two"></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Pending Complaints</div>
                <div className="number">{pending.length}</div>
              </div>
              <i className="bx bx-error-alt cart three"></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Need Maintenance</div>
                <div className="number">5</div>
              </div>
              <i className="bx bx-error-alt cart four"></i>
            </div>
          </div>

          <Routes>
            <Route path="/dashboard" element={<Table />}></Route>
            <Route path="/maintanance" element={<Maintenance />}></Route>
            <Route path="/complaints" element={<Complaints />}></Route>
            <Route
              path="/sucessComplaints"
              element={<Sucesscomplaints />}
            ></Route>
          </Routes>
        </div>
      </section>
    </BrowserRouter>
  );
};
export default Header;
