import { useState, useEffect } from "react";
import ButtonModal from "../Button/ButtonModal";
import Edit from "/icons/edit.svg";
import Delete from "/icons/delete.svg";
import { authenticate, fetchPatients } from "../../../ApiService";

const PatientsTable = () => {
  const [dataPatient, setDataPatient] = useState([]);
  const [searchPatient, setSearchPatient] = useState("");
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        await authenticate("user.demo", "U4u4iclguru$")
        const result = await fetchPatients();
        setDataPatient(result);
        setFilteredPatients(result);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener datos: ", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);
 
// FILTRO DE PACIENTES
const filterPatients = (event) => {
  const filterValue = event.target.value.toLowerCase();

  console.info("VALOR INGRESADO: ", filterValue)

  // Se actualiza la variable de estado "searchPatient" con el valor filtrado
  setSearchPatient(filterValue);

  // Variable que almacena el resultado del filtrado
  const filteredData = dataPatient.filter((patient) => {
      const patientName = patient.name.toLowerCase();
      const patientSurname = patient.surname.toLowerCase();
      return patientName.includes(filterValue) || patientSurname.includes(filterValue);
  });

  setFilteredPatients(filteredData);
}

  return (

    /* STATUS
              <td className="align-middle">
                <div className="status-indicator border border-black rounded-circle complete-status mx-auto"></div>
              </td>

              <td className="align-middle">
                <div className="status-indicator border border-black blink rounded-circle missing-data mx-auto"></div>
              </td>
              <td className="align-middle">
                <div className="status-indicator border border-black rounded-circle no-data-loading mx-auto"></div>
              </td>

              <td className="align-middle">
                <div className="status-indicator border border-black rounded-circle half-completed mx-auto"></div>
              </td> */
    <section>
      <div className="row py-4 mb-2">
        <h1 className="mb-4 text-center text-uppercase pt-2">Patients</h1>
       <form className="d-flex justify-content-center" role="search">
            <input className="form-control me-2 rounded-5 border-2 border-dark shadow-sm" style={{ width: "60%", backgroundColor: "#D7E3FC" }} type="search" placeholder="Find patients by name or surname" aria-label="Search" onChange={filterPatients} />
        </form>
      </div>
      <div className="mb-4 d-flex justify-content-end">
        <ButtonModal dataBsTarget="#modalForm" title="Add patients" icon="./icons/add-user.svg" />
      </div>
      { (error) ? (<h4 className="text-danger text-center">Error al cargar los datos...</h4> ) :
      
      (loading) ? (<h4 className="text-center">Cargando..</h4>) : (
       <div className="table-responsive mb-4" style={{ backgroundColor:"#EDF2FB" }}>
             <div className="table-responsive" style={{ backgroundColor:"#EDF2FB" }}>
              <table className="table table-striped table-patient">
                <thead>
                  <tr className="text-center border-bottom border-black">
                    <th scope="col" className="align-middle">Lastname</th>
                    <th scope="col" className="align-middle">Name</th>
                    <th scope="col" className="align-middle">Sex</th>
                    <th scope="col" className="align-middle">DOB</th>
                    <th scope="col" className="align-middle patient-id">Patient ID</th>
                    <th scope="col" className="align-middle">MRN</th>
                    <th scope="col" className="align-middle">Organization</th>
                    <th scope="col" className="align-middle">Follow Up</th>
                    <th scope="col" className="align-middle">Edit patients</th>
                    <th scope="col" className="align-middle">Delete</th>
                  </tr>
                </thead>

                <tbody className="align-middle">
                  {/* Muestra los pacientes filtrados si hay una búsqueda activa, sino muestra todos los pacientes */}
                  {filteredPatients.map((patient) => (
                      <tr className="text-center" key={ patient.id}>
                        <td className="text-center">{ patient.surname }</td>
                        <td className="text-center">{ patient.name }</td>
                        <td className="text-center">{ patient.sex }</td>
                        <td className="text-center">{ patient.dob }</td>
                        <td className="text-center">{ patient.identification }</td>
                        <td className="text-center">{ patient.medical_record }</td>
                        <td className="text-center">{ patient.organization }</td>
                        {/* <td className="align-middle">{ patient.followup }</td> */}
                        <td className="align-middle">
                          <div className="status-indicator border border-black rounded-circle complete-status mx-auto"></div>
                        </td>
                        <td className="align-middle">
                          <img src={ Edit }  style={{ width:"18px", cursor:"pointer" }} data-bs-toggle="modal" data-bs-target="#ModalEditPatient"/>
                        </td>
                        <td className="align-middle">
                          <img src={ Delete } style={{ width: "22px", cursor:"pointer"}}  data-bs-toggle="modal" data-bs-target="#modalDelete"/>
                        </td>
                      </tr>))
                  }
                </tbody>
              </table>
             </div>
        </div>
      )}
      </section>
  )
}
export default PatientsTable;
