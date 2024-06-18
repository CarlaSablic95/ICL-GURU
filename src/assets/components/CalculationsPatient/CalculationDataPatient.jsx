import { InputCheckbox } from "../Form/Inputs";
import Button from "../Button/Button";
import Return from "/icons/arrow-back.png";
import Eye from "../Eyes/Eye";

const CalculationDataPatient = () => {
    return (
        <div className="col-10 p-5">
            <h2>ESTE COMPONENTE SE MUESTRA CUANDO HACES CLICK EN LOS RESULTADOS DE LA TABLA CALCULATIONS</h2>
            <a href="/calculations" className="text-decoration-none">
                <img src={ Return } alt="ícono de flecha de retroceso" style={{ width:"35px" }}/><span className="text-uppercase" style={{color: "#666666"}}>Return</span>
            </a>
            <div className="d-flex flex-column flex-md-row justify-content-evenly align-items-center mb-5 gap-3">
                <h1 className="text-center text-uppercase">Icl Calculations</h1>
                    <a href="#" className="p-2 px-3 text-decoration-none" style={{backgroundColor:"#B02F92", color:"#fefefe", borderRadius:"2rem"}}>Follow up</a>
                <Button title="Download report" bgColor="#3DC2DD" textColor="#1A2A2F"  rounded="2rem" icon="./icons/file_download.svg" />

                <form>
                        <div className="mb-3">
                                    <p className="fw-bold text-center">Eye</p>
                                <div className="d-flex justify-content-center">
                                    <InputCheckbox label="OD" name="eye" id="od" value="od" bgColor="rgb(72, 136, 200)" />
                                    <InputCheckbox label="OS" name="eye" id="os" value="os" bgColor="rgb(47, 178, 151)" />
                                </div>
                        </div>
                    </form>
            </div>
        
            <div className="p-md-5">
            <div className="mb-5 ps-3">
                <h5 className="mb-1">Patient:</h5>
                <h5 className="text-uppercase mb-1">Id:</h5>
                <h5 className="text-uppercase mb-1">Dob:</h5>
                <h5 className="text-uppercase mb-1">Mrn:</h5>
                <h5 className="mb-1">Method:</h5>
            </div>
            <div className="d-flex justify-content-evenly">
                <Eye bgColor="#4888C8" color="#fefefe" title="OD" width="50px" height="50px" fontSize="1.5rem" />
                <Eye bgColor="#2FB297" color="#fefefe" title="OS" width="50px" height="50px" fontSize="1.5rem" />
            </div>
            </div>
            </div>
    )
}

export default CalculationDataPatient;