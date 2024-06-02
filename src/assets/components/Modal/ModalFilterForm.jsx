import Dropdown from "../Dropdown/Dropdown";

const ModalFilterForm = () => {

    return (
        <div className="modal fade" id="modalFormFilter" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content px-2 px-md-4">
                        <div className="modal-header pb-2">
                            <h4>Filter</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex flex-column align-items-center justify-content-start">
                            <Dropdown />
                            <Dropdown />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ModalFilterForm;