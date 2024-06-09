import ButtonModal from "../Button/ButtonModal";
import CalculationDataTable from "../Table/CalculationDataTable";

const CalculationTable = () => {
    return (
        <div className="col-10 p-5">
            <div className="d-flex justify-content-evenly align-items-center mb-5">
                <h1 className="text-center">Calculations</h1>
                <ButtonModal title="New calculation" icon="./icons/add-user.svg" />
            </div>
            <div className="mb-5">
                <h5 className="mb-1">Patient:</h5>
                <h5 className="text-uppercase mb-1">Dob:</h5>
                <h5 className="mb-1">Organization:</h5>
            </div>
            
            <CalculationDataTable />
        </div>
    )
}

export default CalculationTable;