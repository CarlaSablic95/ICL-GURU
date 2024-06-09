import SurgicalData from "../Card/SurgicalData";
import AnatomicData from "../Card/AnatomicData";
import RightEyeResult from "../Table/RightEyeResult";
import LeftEyeResult from "../Table/LeftEyeResult";

const CalculationResult = () => {
    return (
        <div className="col-10 py-5">
            <div className="row justify-content-center">
                <div className="col-10 col-md-5 d-flex flex-column justify-content-center align-items-center">
                    <span className="rounded-5 py-1 px-2 fw-bold fs-4" style={{ backgroundColor: "#4888C8", color: "#fefefe" }}>OD</span>
                    <SurgicalData  IntraocularLensPower="-10D/2.5D/90°" DataOfSurgery=""/>
                    <AnatomicData  AtA="12.138" ARise="0.078" ACD="3.489" WtW="12.000" />
                    <RightEyeResult />
                </div>

                <div className="col-10 col-md-5 d-flex flex-column justify-content-center align-items-center">
                    <span className="rounded-5 py-1 px-2 fw-bold fs-4" style={{ backgroundColor: "#2FB297", color: "#fefefe" }}>OS</span>
                    <SurgicalData  IntraocularLensPower="-10D" DataOfSurgery=""/>
                    <AnatomicData  AtA="12.131" ARise="0.022" ACD="3.597" WtW="12.100" />
                    <LeftEyeResult />
                </div>
            </div>
        </div>
    )
}

export default CalculationResult;