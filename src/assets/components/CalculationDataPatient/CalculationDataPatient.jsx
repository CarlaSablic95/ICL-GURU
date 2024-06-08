import { InputCheckbox } from "../Form/Input";
import Button from "../Button/Button"; 

const CalculationDataPatient = () => {
    return (
        <div className="col-10 p-5">
            <div className="d-flex justify-content-evenly align-items-center mb-5">
                <h1 className="text-center text-uppercase">Calculations</h1>
                <Button title="Follow up" bgColor="#B02F92" textColor="#fefefe" rounded="2rem" />
                <Button title="Download report" bgColor="#3DC2DD" textColor="#1A2A2F"  rounded="2rem" icon="./icons/file_download.svg" />

                <form>
                        <div className="mb-3">
                                    <p className="fw-bold">Eye</p>
                                <div className="d-flex justify-content-evenly">
                                    <InputCheckbox label="OD" name="eye" id="od" value="od" bgColor="rgb(72, 136, 200)" />
                                    <InputCheckbox label="OS" name="eye" id="os" value="os" bgColor="rgb(47, 178, 151)" />
                                </div>
                        </div>
                    </form>
            </div>
            <div className="mb-5">
                <p className="fw-bold mb-1">Patient:</p>
                <p className="fw-bold text-uppercase mb-1">Id:</p>
                <p className="fw-bold text-uppercase mb-1">Dob:</p>
                <p className="fw-bold text-uppercase mb-1">Mrn:</p>
                <p className="fw-bold mb-1">Method:</p>
            </div>
        </div>
    )
}

export default CalculationDataPatient;