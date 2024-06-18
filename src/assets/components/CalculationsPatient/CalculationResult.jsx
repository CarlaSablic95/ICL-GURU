import CalculationDataPatient from "./CalculationDataPatient";
import SurgicalData from "../Card/SurgicalData";
import AnatomicData from "../Card/AnatomicData";
import RightEyeResult from "../Table/RightEyeResult";
import LeftEyeResult from "../Table/LeftEyeResult";
import Eye from "../Eyes/Eye";

const CalculationResult = () => {
    return (
        <>
            <CalculationDataPatient />
            <div className="col-10 py-5">
                <div className="row justify-content-evenly">
                    <div className="col-10 col-md-5 d-flex flex-column justify-content-center align-items-center">
                        <Eye bgColor="#4888C8" color="#fefefe" title="OD" width="50px" height="50px" fontSize="1.5rem" />
                        <SurgicalData  IntraocularLensPower="-10D/2.5D/90°" DataOfSurgery=""/>
                        <AnatomicData  AtA="12.138" ARise="0.078" ACD="3.489" WtW="12.000" />
                        <RightEyeResult />
                    </div>

                    <div className="col-10 col-md-5 d-flex flex-column justify-content-center align-items-center">
                        <Eye bgColor="#2FB297" color="#fefefe" title="OS" width="50px" height="50px" fontSize="1.5rem" />
                        <SurgicalData  IntraocularLensPower="-10D" DataOfSurgery=""/>
                        <AnatomicData  AtA="12.131" ARise="0.022" ACD="3.597" WtW="12.100" />
                        <LeftEyeResult />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CalculationResult;