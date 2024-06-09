import PatientsTable from "../components/Table/PatientsTable";
import ModalCreatePatient from "../components/Modal/ModalCreatePatient";
import ModalEditPatient from "../components/Modal/ModalEditPatient";
import ModalDeletePatient from "../components/Modal/ModalDeletePatient";
import SearchForm from "../components/Form/SearchForm";

const Patients = () => {
  return (
    <div className="col-10 px-2 px-md-5">
      <h1 className="mb-4 text-center text-uppercase pt-5">Patients</h1>
      <div className="row pb-4 mb-4">
        <SearchForm />
      </div>
      {/* Tabla de pacientes */}
      <PatientsTable />

      {/* Modales con 2 formularios para crear y editar pacientes. */}
      <ModalCreatePatient />
      <ModalEditPatient />

      {/* Modal de condirmación de eliminación del paciente */}
      <ModalDeletePatient />
    </div>
  );
};

export default Patients;


