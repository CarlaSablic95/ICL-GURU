import { InputCheckbox } from "../Form/Input";
import Button from "../Button/Button"; 

const CalculationDataPatient = () => {
    return (
        <div className="col-10 p-5">
            <div className="d-flex justify-content-evenly align-items-center mb-5">
                <h1 className="text-center text-uppercase">Calculations</h1>
                <a href="#" className="p-2 px-3 text-decoration-none" style={{backgroundColor:"#B02F92", color:"#fefefe", borderRadius:"2rem"}}>Follow up</a>
                <Button title="Download report" bgColor="#3DC2DD" textColor="#1A2A2F"  rounded="2rem" icon="./icons/file_download.svg" />

                <form>
                        <div className="mb-3">
                                    <p className="fw-bold text-center">Eye</p>
                                <div className="d-flex flex-column justify-content-center">
                                    <InputCheckbox label="OD" name="eye" id="od" value="od" bgColor="rgb(72, 136, 200)" />
                                    <InputCheckbox label="OS" name="eye" id="os" value="os" bgColor="rgb(47, 178, 151)" />
                                </div>
                        </div>
                    </form>
            </div>
            <div className="mb-5">
                <h5 className="mb-1">Patient:</h5>
                <h5 className="text-uppercase mb-1">Id:</h5>
                <h5 className="text-uppercase mb-1">Dob:</h5>
                <h5 className="text-uppercase mb-1">Mrn:</h5>
                <h5 className="mb-1">Method:</h5>
            </div>
        </div>
    )
}

export default CalculationDataPatient;