import React, { useEffect, useState } from 'react'
import axios from "axios";

function Footer() {
  const [ip, setIp] = useState("");
  useEffect(() => {
    getUserIp();
  }, []);

  const getUserIp = async () => {
    const ip = await axios.get("https://ipapi.co/json");
    setIp(ip.data.ip);
  };

  return (

    <footer className="footer footer-static footer-light" id='footmain' >
      <p className="clearfix mb-0 text-center" style={{ color: "#fff" }}>
        Version 1.0 - 25
        <br />

        <span> Your computer IP address is: {ip}; logged in from  Browser on Chrome</span><br />
        Copyright © 2023 Yash Technologies - All Rights Reserved<br />
        Designed and Maintained by <a href="#" rel="noopener noreferrer" target="_blank" style={{ color: "#d9dcff" }}></a> <img src="assets/images/company logo2.png" alt='logo' width="69" style={{ height: "25px", float: "none" }} /> |   Powered by Yash
      </p>
    </footer>


  )
}

export default Footer
