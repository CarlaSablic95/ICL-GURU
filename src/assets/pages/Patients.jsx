import PatientsTable from "../components/Table/PatientsTable";
import ModalCreatePatient from "../components/Modal/ModalCreatePatient";
import ModalEditPatient from "../components/Modal/ModalEditPatient";
import ModalDeletePatient from "../components/Modal/ModalDeletePatient";

const Patients = () => {
  return (
    <div className="col-10 px-2 px-md-5">
    
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


