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

const Sidebar = () => {
  return (
    <aside className="col-2 shadow d-none d-lg-flex flex-column justify-content-start align-items-center">
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
                       { ({ isActive }) => (
                        <>
                          <img src={isActive ? route.activeIcon : route.icon}  style={{ width:"30px"}} className="pb-2" /> {route.link}
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
    </aside>
    
  );
};

export default Sidebar;
