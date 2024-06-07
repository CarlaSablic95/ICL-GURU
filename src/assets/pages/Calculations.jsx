import ButtonModal from "../components/Button/ButtonModal";
import CalculationData from "../components/Table/CalculationData";

const Calculations = () => {
    
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

            <CalculationData />
        </div>
    )
}

export default Calculations;