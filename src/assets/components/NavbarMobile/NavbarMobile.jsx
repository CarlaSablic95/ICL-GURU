import { NavLink } from "react-router-dom";

const routes = [
    {
        path: "/",
        link: "Patients",
        icon: "bi bi-person"
    },
    {
        path: "/calculations",
        link: "Calculations",
        icon: "bi bi-file-bar-graph-fill"
    },
    {
        path: "/clinics",
        link: "Clinics",
        icon: "bi bi-building"
    },
    {
        path: "/account",
        link: "Account",
        icon: "bi bi-gear"
    },
    {
        path: "/my-account",
        link: "My account",
        icon: "bi bi-pencil"
    }
]

const NavbarMobile = () => {
    return (
        <nav className="navbar navbar-mobile py-4 d-block d-lg-none">
  <div className="container-fluid">
    <button className="navbar-toggler bg-warning" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand bg-warning" href="#">Logo</a>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">User</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
      <ul className="list-unstyled">
                <li className="mb-3">
                <a className="text-dark text-decoration-none menu-list fs-5" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="bi bi-key-fill fs-4"></i></a></li>
                    { routes.map((route) => (
                        <li key={ route.path } className="mb-3">
                            <i className={`${ route.icon } fs-5 me-2`}></i>
                            <NavLink key={ route.path } to={ route.path } className={({ isActive }) => `text-dark text-decoration-none menu-list fs-5 ${isActive ? "is-active" : ""}`}>
                                { route.link }
                            </NavLink>
                        
                        </li>))
                        }
            <li className="mb-3">
                <a className="text-dark text-decoration-none menu-list fs-5" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="bi bi-box-arrow-right me-1 fs-5"></i>Logout</a></li>
                </ul>
      </div>
    </div>
  </div>
</nav>
    )
}

export default NavbarMobile;