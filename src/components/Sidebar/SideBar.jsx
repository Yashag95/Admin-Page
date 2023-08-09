import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import Icon from '@mdi/react';
import { mdiMonitorDashboard , mdiTarget, mdiCalendarAlert, mdiDesktopClassic , mdiFileChart  } from '@mdi/js';
const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <Icon path={mdiMonitorDashboard} size={1} />,
  },
  {
    path: "/AdminList",
    name: "Admin List",
    icon: <Icon path={mdiTarget} size={1} />,
  },
  {
    path: "/AuthLog",
    name: "Auth Logs",
    icon: <Icon path={mdiCalendarAlert} size={1} />,
  },
  
  {
    path: "/file-manager",
    name: "System",
    icon:  <Icon path={mdiDesktopClassic} size={1} />,
    subRoutes: [
      {
        path: "/SystemLog",
        name: <li className="nav-item">System Info</li> ,
      },
      {
        path: "/Firewall",
        name: <li className="nav-item">Firewall</li>,
      },
      {
        path: "/SysConfig",
        name: <li className="nav-item">Sys Configruation</li>,
      },
    ],
  },
  {
    path: "/Report",
    name: "Report",
    icon: <Icon path={mdiFileChart} size={1} />,
    exact: true,
    subRoutes: [
      {
        path: "/ViewReport",
        name: <li className="nav-item"> View report  </li>,
        // icon: <FaUser />,
      },
      {
        path: "/Subscription",
        name: <li className="nav-item">Subscription </li>,
        // icon: <FaLock />,
      },
      {
        path: "/EmailLog",
        name:  <li className="nav-item">Email Log</li>,
        // icon: <FaLock />,
      },
    
    ],
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "230px" : "55px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 16,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                style={{marginLeft: "30px"}}> 
                  Yash Tech.
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="search">
            <div className="search_icon">
            </div>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
