import PatientsList from "../components/Table/PatientsList";
import ModalCreatePatient from "../components/Modal/ModalCreatePatient";
import ModalEditPatient from "../components/Modal/ModalEditPatient";
import ModalDeletePatient from "../components/Modal/ModalDeletePatient";

const Patients = () => {
  return (
    <div className="col-10 px-5">
      <h1 className="mb-4 text-center text-uppercase pt-5">Patients</h1>
      <div className="row pb-4 mb-4">
        <form className="d-flex justify-content-end" role="search">
          <input className="form-control me-2 rounded-5 border-2 border-dark shadow-sm" style={{ width: "60%", backgroundColor: "#D7E3FC" }} type="search" placeholder="Find patients by name or surname" aria-label="Search" />
          <div className="dropdown-center">
            <button className="btn button rounded-5 dropdown-toggle fw-bold" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Filter <i className="bi bi-funnel" />
            </button>
            <div className="dropdown-menu p-4" style={{ minWidth: '300px' }}>
              <div className="mb-2">
                <select className="form-select">
                  <option value="">Sex</option>
                  <option value="F">Female</option>
                  <option value="M">Masculine</option>
                </select>
              </div>
              <div className="mb-2">
                <select className="form-select">
                  <option value="">Patient ID</option>
                  <option value="1">ID 1</option>
                  <option value="2">ID 2</option>
                </select>
              </div>
            </div>
          </div>
          <button type="button" className="btn button rounded-5 ms-4 fw-bold" data-bs-toggle="modal" data-bs-target="#modalForm">Add patients <i className="bi bi-person-add" /></button>
        </form>
      </div>
      {/* Tabla de pacientes */}
      <PatientsList />

      {/* Modales con 2 formularios para crear y editar pacientes. */}
      <ModalCreatePatient />
      <ModalEditPatient />

      {/* Modal de condirmación de eliminación del paciente */}
      <ModalDeletePatient />
    </div>
  );
};

export default Patients;


