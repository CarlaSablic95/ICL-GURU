import ButtonModal from "../Button/ButtonModal";
import CalculationDataTable from "../Table/CalculationDataTable";

const CalculationTable = () => {
    return (
        <div className="col-10 p-5">
            <div className="mb-5">
                <h3>ESTE COMPONENTE SE MUESTRA CUANDO SE HACE CLICK EN LOS DATOS DE UN PACIENTE (TABLA DE PACIENTES)</h3>
                <h1 className="text-center text-uppercase">Calculations</h1>
            </div>
            <div className="mb-5 d-flex flex-column align-items-center me">
                <h5 className="mb-1">Patient:</h5>
                <h5 className="text-uppercase mb-1">Dob:</h5>
                <h5 className="mb-1">Organization:</h5>
            </div>
            <div className="d-flex justify-content-end align-items-center mb-5">
                <ButtonModal title="New calculation" icon="./icons/add-user.svg" />
            </div>
            
            <CalculationDataTable />
        </div>
    )
}

export default CalculationTable;