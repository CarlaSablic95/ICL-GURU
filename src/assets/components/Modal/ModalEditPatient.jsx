import Button from "../Button/Button";

const ModalEditPatient = () => {
    return (
        <>
            <div className="modal fade" id="ModalEditPatient" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered py-5">
                    <div className="modal-content">
                    <div className="modal-header"> 
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body pb-0">
                    <form className="px-4">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Lola" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="lastname" className="form-label">Last name</label>
                        <input type="text" className="form-control" id="lastname" placeholder="Fiz " />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="dob" className="form-label">Date of birth</label>
                        <input type="date" className="form-control" id="dob" />
                    </div>

                        <p className="mb-0">Sex</p>
                        <div className="d-flex justify-content-evenly mb-3">
                            <div className="form-check">
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Female
                                </label>
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        </div>

                        <div className="form-check">
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Male
                            </label>
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        </div>
                        </div>

                        {/* MRN SE SACA */}
                        {/* <div className="mb-3">
                            <label htmlFor="mrn" className="form-label">Medical records number (MRN)</label>
                            <input type="text" className="form-control" id="mrn" placeholder="45454" />
                        </div> */}

                        <div className="mb-3">
                            <label htmlFor="patientsID" className="form-label">Patients ID</label>
                            <input type="text" className="form-control" id="patientsID" placeholder="12012" />
                        </div>
                    </form>
                    </div>
                    <div className="modal-footer border-0 d-flex justify-content-evenly">
                        <Button type="submit" name="Update" bg_color="#3DC2DD" />
                        {/* <Button type="submit" name="Delete" bg_color="#FF0000" data-bs-toggle="modal" data-bs-target="#modalDelete" /> */}
                    </div>
                    </div>
                </div>

            {/* MODAL ELIMINAR PACIENTE
            <ModalDeletePatient /> */}
            </div>

        </>
    )
}

export default ModalEditPatient;