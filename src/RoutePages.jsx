import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AdminList from "./pages/AdminList";
import AuthLogs from "./pages/AuthLogs";
import System from "./pages/System";
import Footer from "./components/Footer";
import Breadgrump from "./components/Breadgrump";
import Navbar from "./components/Navbar";
import SubscriptionTable from "./components/SubscriptionTable";
import ViewReport from "./components/ViewReport";
import EmailLog from "./components/EmailLog";
import LoginPage from "./components/LoginPage";
import OpenTicketPage from "./pages/OpenTicketPage";
import CloseTicketPage from "./pages/CloseTicketPage";
import SystemLog from "./components/SystemLog";
import SysConfig from "./components/SysConfig";
import Firewall from "./components/Firewall";
// import LoginPage from "./components/LoginPage";


function RoutePages() {
  return (
    <Router>
      <SideBar>
        <Navbar />
        <Breadgrump />

        <Routes>
          <Route  path="/Login" element={<LoginPage />} />
          <Route  path="/" element={<Dashboard />} />
          <Route  path="/OpenTicketPage" element={<OpenTicketPage />} />
          <Route  path="/CloseTicketPage" element={<CloseTicketPage />} />
          <Route  path="/AdminList" element={<AdminList />} />
          <Route  path="/AuthLog" element={<AuthLogs />} />
          <Route  path="/System" element={<System />} />
          <Route  path="/Subscription" element={<SubscriptionTable />} />
          <Route  path="/ViewReport" element={<ViewReport />} />
          <Route  path="/EmailLog" element={<EmailLog />} />
          <Route  path="/SystemLog" element={<SystemLog />} />
          <Route  path="/SysConfig" element={<SysConfig />} />
          <Route  path="/Firewall" element={<Firewall />} />

          <Route path="*" element={<> Not Found</>} />
        </Routes>

        <Footer />
      </SideBar>

    </Router>


  );
}

export default RoutePages;
