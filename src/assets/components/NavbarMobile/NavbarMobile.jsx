import { NavLink } from "react-router-dom";

const routes = [
  {
    path: "/",
    link: "Patients",
    icon: "./icons/user.svg",
    activeIcon: "./icons/user-active.svg",
  },
  {
    path: "/calculations",
    link: "Calculations",
    icon: "./icons/calculation.svg",
    activeIcon: "./icons/calculation-active.svg",
  },
  {
    path: "/clinics",
    link: "Clinics",
    icon: "./icons/clinic.svg",
    activeIcon: "./icons/clinic-active.svg",
  },
  {
    path: "/account",
    link: "Account",
    icon: "./icons/settings.svg",
    activeIcon: "./icons/settings-active.svg",
  },
  {
    path: "/my-account",
    link: "My account",
    icon: "./icons/edit.svg",
    activeIcon: "./icons/edit-active.svg",
  },
];

const NavbarMobile = () => {
  return (
    <nav className="navbar navbar-mobile py-4 d-flex d-lg-none">
      <div className="container-fluid">
        <button
          className="navbar-toggler rounded-5"
          style={{ backgroundColor:"#3DC2DD" }}
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span> <span>Menú</span>
        </button>
        <a className="navbar-brand bg-warning" href="#">
          Logo
        </a>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              User
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="list-unstyled">
              <li className="mb-3">
                <a
                  className="text-dark text-decoration-none menu-list fs-5"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <i className="bi bi-key-fill fs-4"></i>
                </a>
              </li>
              {routes.map((route) => (
          <li key={route.path} className="mb-3">
                  <NavLink
                    key={route.path}
                    to={route.path}
                    className={({ isActive }) =>
                      `text-dark text-decoration-none menu-list fs-5 ${
                        isActive ? "is-active" : ""
                      }`
                    }
                  >
                        {
                        ({ isActive }) => (
                        <>
                          <img src={ isActive ? route.activeIcon : route.icon}  style={{ width:"30px"}} className="pb-2" /> {route.link}
                          </>
                          )}
                        
                  </NavLink>
                </li>
              ))}
              <li className="mb-3">
                <a
                  className="text-dark text-decoration-none menu-list fs-5"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <img src="./icons/logout.svg"  style={{ width:"30px" }} /> Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMobile;
