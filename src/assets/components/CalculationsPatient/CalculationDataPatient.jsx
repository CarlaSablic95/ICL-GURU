import { useState } from "react";
import { InputCheckbox } from "../Form/Inputs";
import Button from "../Button/Button";
import Return from "/icons/arrow-back.png";
import graphicOd from "/icons/graphic-od.png";
import graphicOs from "/icons/graphic-os.png";
import Eye from "../Eyes/Eye";
import SurgicalData from "../Card/SurgicalData";
import AnatomicData from "../Card/AnatomicData";
import RightEyeResult from "../Table/RightEyeResult";
import LeftEyeResult from "../Table/LeftEyeResult";


const CalculationDataPatient = () => {
    const [showOD, setShowOD] = useState(true);
    const [showOS, setShowOS] = useState(true);

    const handleShowOD = (e) => {
        setShowOD(e.target.checked);
    }

    const handleShowOS = (e) => {
        setShowOS(e.target.checked);
    }

    return (
        <>
        <div className="col-10 pt-5 px-3 px-md-5">
            <h2>ESTE COMPONENTE SE MUESTRA CUANDO HACES CLICK EN LOS RESULTADOS DE LA TABLA CALCULATIONS</h2>
            <a href="/calculations" className="text-decoration-none">
                <img src={ Return } alt="ícono de flecha de retroceso" style={{ width:"30px" }}/><span className="text-uppercase" style={{color: "#666666"}}>Return</span>
            </a>
            <div className="d-flex flex-column flex-md-row justify-content-evenly align-items-center mb-5 gap-3">
                <h1 className="text-center text-uppercase">Icl Calculations</h1>
                <div className="d-flex flex-row justify-content-center align-items-center gap-3">
                    <a href="#" className="p-2 px-3 text-decoration-none" style={{backgroundColor:"#B02F92", color:"#fefefe", borderRadius:"2rem"}}>Follow up</a>
                <Button title="Download report" bgColor="#3DC2DD" textColor="#1A2A2F"  rounded="2rem" icon="./icons/file_download.svg" />
                </div>
                <form>
                        <div className="mb-3">
                                    <p className="fw-bold text-center">Eye</p>
                                <div className="d-flex justify-content-center">
                                    <InputCheckbox label="OD" name="eye" id="od" value="od" bgColor="rgb(72, 136, 200)" onChange={handleShowOD} />
                                    <InputCheckbox label="OS" name="eye" id="os" value="os" bgColor="rgb(47, 178, 151)" onChange={handleShowOS} />
                                </div>
                        </div>
                    </form>
            </div>
        
            <section className="ps-4 py-4">
                <div className="mb-5 ps-3">
                    <h5 className="mb-1">Patient:</h5>
                    <h5 className="text-uppercase mb-1">Id:</h5>
                    <h5 className="text-uppercase mb-1">Dob:</h5>
                    <h5 className="text-uppercase mb-1">Mrn:</h5>
                    <h5 className="mb-1">Method:</h5>
                </div>
            <div className="d-flex flex-column flex-md-row justify-content-evenly">
                {showOD && (<div className="d-flex flex-column justify-content-center">
                    <div className="text-center mb-4">
                        <Eye bgColor="#4888C8" color="#fefefe" title="OD" width="50px" height="50px" fontSize="1.5rem" />
                    </div>
                    <div className="mb-5">
                        <img src={ graphicOd } alt="" className="img-fluid" />
                    </div>
                </div>)}

                {showOS && (
                    <div className="d-flex flex-column justify-content-center">
                        <div className="text-center mb-4">
                            <Eye bgColor="#2FB297" color="#fefefe" title="OS" width="50px" height="50px" fontSize="1.5rem" />
                        </div>
                        <div className="mb-5">
                            <img src={ graphicOs } alt="" className="img-fluid" />
                        </div>
                </div>
            )}
                </div>
            </section>
            
                <section className="row flex-column flex-md-row justify-content-evenly">
                  { showOD && (<div className="col-10 col-md-6">
                    <div className="text-center mb-4">
                        <Eye bgColor="#4888C8" color="#fefefe" title="OD" width="50px" height="50px" fontSize="1.5rem" />
                    </div>
                        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-evenly mb-3">
                            <SurgicalData  IntraocularLensPower="-10D/2.5D/90°" DataOfSurgery=""/>
                            <AnatomicData  AtA="12.138" ARise="0.078" ACD="3.489" WtW="12.000" />
                        </div>
                        <RightEyeResult />
                    </div>)}

                    { showOS && (<div className="col-10 col-md-6 d-flex flex-column">
                        <div className="text-center mb-4">
                            <Eye bgColor="#2FB297" color="#fefefe" title="OS" width="50px" height="50px" fontSize="1.5rem" />
                        </div>
                        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-evenly mb-3">
                            <SurgicalData  IntraocularLensPower="-10D" DataOfSurgery=""/>
                            <AnatomicData  AtA="12.131" ARise="0.022" ACD="3.597" WtW="12.100" />
                            </div>
                        <LeftEyeResult />
                    </div>)}
                </section>
            </div>
        </>
    )
}

export default CalculationDataPatient;