import ButtonModal from "../Button/ButtonModal";
import CalculationDataTable from "../Table/CalculationDataTable";

const CalculationTable = () => {
    return (
        <div className="col-10 p-5">
            <div className="d-flex justify-content-evenly align-items-center mb-5">
                <h1 className="text-center">Calculations</h1>
                <ButtonModal title="New calculations" icon="./icons/add-user.svg" />
            </div>
            <div className="mb-5">
                <p className="fw-bold mb-1">Patient:</p>
                <p className="fw-bold text-uppercase mb-1">Dob:</p>
                <p className="fw-bold mb-1">Organization:</p>
            </div>
            
            <CalculationDataTable />
        </div>
    )
}

export default CalculationTable;