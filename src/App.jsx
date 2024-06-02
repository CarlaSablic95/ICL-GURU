import './App.css';
// import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./assets/components/Sidebar/Sidebar";
import LoginForm from './assets/pages/LoginForm';
import Dashboard from './assets/pages/Dashboard';
import Patients from './assets/pages/Patients';
import Calculations from './assets/pages/Calculations';
import Clinics from './assets/pages/Clinics';
import Account from './assets/pages/Account';
import MyAccount from './assets/pages/MyAccount';
import ModalLogout from './assets/components/Modal/ModalLogout';


function App() {

  const Navigation = () => {
    const location = useLocation();

    return (
      location.pathname !== "/login" && ( <Sidebar /> )
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
