const ModalDeletePatient = () => {
    return(
        <div className="col-10 px-5">
        <div className="modal fade" id="modalDelete" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content px-2 px-md-4">
                <div className="modal-header pb-2">
                    <h4>Confirm Submit</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p className="text-center">The patient and all his records will be deleted. Do you wish to continue?</p>
                </div>
                <div className="d-flex justify-content-evenly pb-3">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                    <button type="button" className="btn btn-primary border-0" style={{ backgroundColor: "#FF0000" }} data-bs-dismiss="modal">Yes</button>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
};

export default ModalDeletePatient;