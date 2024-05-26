import './App.css';
// import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from "react-router-dom";
import LoginForm from './assets/pages/LoginForm';
import Dashboard from './assets/pages/Dashboard';
import Patients from './assets/pages/Patients';
import AddPatients from './assets/pages/AddPatients';
import Calculations from './assets/pages/Calculations';
import Clinics from './assets/pages/Clinics';
import Account from './assets/pages/Account';
import MyAccount from './assets/pages/MyAccount';
import ModalLogout from './assets/components/Modal/ModalLogout';


function App() {
  // const userAuthenticated = true;
  // const navigate = useNavigate();
  
  const Navigation = () => {
    const location = useLocation();

    return (
      location.pathname !== "/login" && 
            (<nav className='col-2 bg-light shadow-sm vh-100 d-flex flex-column justify-content-center align-items-center'>
            <ul className="list-unstyled">
              <li className="mb-3">
                <NavLink to="/patients" className={({ isActive }) => `text-dark text-decoration-none menu-list ${isActive ? "is-active" : ""}`}><i className="bi bi-person me-1" />Patients</NavLink>
              </li>

              <li className="mb-3">
                <NavLink to="/add-patients" className={({ isActive }) => `text-dark text-decoration-none menu-list ${isActive ? "is-active" : ""}`}> <i className="bi bi-person-add me-1" />Add patients</NavLink>
              </li>

              <li className="mb-3">
                <NavLink to="/calculations" className={({ isActive }) => `text-dark text-decoration-none menu-list ${isActive ? "is-active" : ""}`}><i className="bi bi-file-bar-graph-fill me-1" />Calculations</NavLink>
              </li>

              <li className="mb-3">
                <NavLink to="/clinics" className={({ isActive }) => `text-dark text-decoration-none menu-list ${isActive ? "is-active" : ""}`}><i className="bi bi-building me-1" />Clinics</NavLink>
              </li>

              <li className="mb-3">
                <NavLink to="/account" className={({ isActive }) => `text-dark text-decoration-none menu-list ${isActive ? "is-active" : ""}`}><i className="bi bi-gear me-1" />Account</NavLink>
              </li>

              <li className="mb-3">
                <NavLink to="/my-account" className={({ isActive }) => `text-dark text-decoration-none menu-list ${isActive ? "is-active" : ""}`}><i className="bi bi-pencil me-1" />My account</NavLink>
              </li>

              <li className="mb-3">
                <a className="text-dark text-decoration-none menu-list" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i className="bi bi-box-arrow-right me-1" />Logout</a>
                </li>
                
            </ul>
          </nav>)
    )
  }

  return (
    <>
      <Router>
        <section className='container-fluid'>
          <div className="row align-items-center">
            <Navigation />

        {/* Configuración de rutas */}
          <Routes>
            {/* <Route path="/login" element={ userAuthenticated ? navigate("/", { replace: true }) : <LoginForm />} /> */}
            {/* <Route exact path="/" element={ userAuthenticated ? <Dashboard /> : navigate("/login", { replace: true })} /> */}
            <Route path="/login" element={ <LoginForm />} />
            <Route exact path="/" element={ <Dashboard /> } />
            <Route path="/patients" element={<Patients />} />

            <Route path="/add-patients" element={<AddPatients />} />

            <Route path="/calculations" element={<Calculations />} />

            <Route path="/clinics" element={<Clinics />} />

            <Route path="/my-account" element={<MyAccount />} />

            <Route path="/account" element={<Account />} />
          </Routes>
          </div>
        </section>
      </Router>
     <ModalLogout />
    </>
  )
}

export default App;
