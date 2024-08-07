import { useState } from "react";
import { InputCheckbox } from "../Form/Inputs";
import Return from "/icons/arrow-back.png";
import WizardComponent from "../WizardComponent/WizardComponent";

const FollowUp = () => {
    //  Para mostrar el cálculo de ambos ojos
    const [showOD, setShowOD] = useState(true);
    const [showOS, setShowOS] = useState(true);

    const handleShowOD = (e) => {
        setShowOD(e.target.checked);
    }

    const handleShowOS = (e) => {
        setShowOS(e.target.checked);
    }

    return(
        <div className="col-10 pt-5 px-3 px-md-5">
            <a href="/calculations" className="text-decoration-none">
                <img src={ Return } alt="ícono de flecha de retroceso" style={{ width:"30px" }}/><span className="text-uppercase" style={{color: "#666666"}}>Return</span>
            </a>
            <h1 className="text-uppercase text-center mb-5">Icl calculations</h1>
            <div className="d-flex justify-content-evenly text-align-center">
                <div>
                    <h5 className="mb-1">Patient:</h5>
                    <h5 className="text-uppercase mb-1">Id:</h5>
                    <h5 className="text-uppercase mb-1">Dob:</h5>
                    
                </div>
            <div>
                <h5 className="text-uppercase mb-1">Mrn:</h5>
                <h5 className="mb-1">Method:</h5>
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

            {/* FORM WIZARD */}
           <WizardComponent />
        </div>
        
    )
}

export default FollowUp;