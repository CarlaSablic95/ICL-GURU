import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
// import { logout } from "../../context/AuthProvider";

const ModalLogout = () => {

    const { logout } = useContext(AuthContext)
    
  return (
    <div className="col-10 px-5">
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content px-2 px-md-4">
                        <div className="modal-header pb-2">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p className="text-center">Are you sure you want to log out?</p>
                        </div>
                        <div className="d-flex justify-content-evenly pb-3">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                            {/* <button type="button" className="btn btn-primary border-0" style={{ backgroundColor: "#3DC2DD" }} data-bs-dismiss="modal" onClick={ logout } disabled={ loading }>{ loading ? (<div className="d-flex justify-content-center align-items-center"><span className="me-1"></span> <span className="loader"></span></div>) : "Yes"}</button> */}
                            <button type="button" className="btn btn-primary border-0" style={{ backgroundColor: "#3DC2DD" }} data-bs-dismiss="modal" onClick={ logout }>Yes</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  );
};

export default ModalLogout;
