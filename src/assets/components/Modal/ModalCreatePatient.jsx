import Button from "../Button/Button";
import BaseForm from "../Form/BaseForm";
import { Input, InputRadio } from "../Form/Inputs";

const ModalCreatePatient = () => {
    return (
        <div className="modal fade" id="modalForm" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered py-5">
                <div className="modal-content">
                <div className="modal-header"> 
                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body pb-0">
                    <BaseForm>
                        <Input 
                            label="Name"
                            id="name"
                            name="name"
                            type="text"
                            placeholder="example"
                        />

                            <Input 
                            label="Last name"
                            id="lastname"
                            name="lastname"
                            type="text"
                            placeholder="example"
                        />

                        <Input 
                            label="Date of birth"
                            type="date"
                        />

                        <div className="mb-3">
                            <label className="mb-0">Sex<span className="text-danger">*</span></label>
                                <div className="d-flex justify-content-evenly">
                                    <InputRadio id="female" name="sex" value="female" label="Female" />
                                    <InputRadio id="male" name="sex" value="male" label="Male" />
                                </div>
                        </div>

                        <Input 
                            label="Medical records number (MRN)"
                            id="mrn"
                            name="mrn"
                            type="text"
                            placeholder="00000"
                        />

                        <Input 
                            label="Patients ID"
                            id="id"
                            name="id"
                            type="text"
                            placeholder="00000"
                        />

                        <div className="modal-footer border-0 d-flex justify-content-center">
                            <Button type="submit" title="Submit" bgColor="#3DC2DD" />
                        </div>
                    </BaseForm>
                </div>
                </div>
            </div>
        </div>
        
    )
}

export default ModalCreatePatient;