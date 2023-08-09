import React from 'react'

const Navbar = () => {
  return (
    <div>
       <nav className="navbar-custom" id="navbar-custom" >
            <ul className="list-unstyled topbar-nav float-end mb-0">
                <li className="dropdown">
                    <a className="nav-link dropdown-toggle nav-user " data-bs-toggle="dropdown" href="#" role="button"
                    aria-haspopup="false" aria-expanded="false">
                        <div className="d-flex align-items-center">
                            <img src="assets/images/images.jpg" alt="profile-user" className="rounded-circle me-2 thumb-sm" />
                            <div className="me-2">
                                <span className="d-none d-md-block card-title" style={{fontSize: "13px", fontWeight: "500"}}>Yash agarwal </span>
                            </div>
                        </div>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end mt-2">
                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#changePasswordModel"><i className="ti ti-user font-16 me-1 align-text-bottom"></i>Change Password</a>
                         <a className="dropdown-item" href="#"><i className="ti ti-settings font-16 me-1 align-text-bottom"></i> Settings</a> 
                        <div className="dropdown-divider mb-0"></div>
                        <a className="dropdown-item" href="logout.php"><i className="ti ti-power font-16 me-1 align-text-bottom"></i> Logout</a>
                    </div>
                </li>
            </ul>
           

            {/* <ul className="list-unstyled topbar-nav mb-0">                        
                <li>
                    <button className="nav-link button-menu-mobile nav-icon" id="togglemenu">
                        <i className="ti ti-menu-2"></i>
                    </button>
                </li>                      
            </ul> */}
        </nav>
    </div>
   )
}

export default Navbar
