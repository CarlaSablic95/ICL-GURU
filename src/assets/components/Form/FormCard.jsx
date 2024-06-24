import Button from "../Button/Button";


const FormCard = () => {
  return (
    <div className="card card-form p-0">
      <div className="card-header text-start text-white">
        Postoperative - Intraoperative
      </div>
      <div className="card-body d-flex justify-content-evenly">
      <form>
        <div className="container">
          <div className="row justify-content-center justify-content-md-start">
            <div className="col-10 col-md-4 mb-4">
              {/* Central vault (end): */}
              <div className="d-flex flex-column align-items-start">
                <p className="fw-bold mb-2">Central vault (end):</p>
                <div className="input-group">
                  <input
                    type="number"
                    step="0.001"
                    className="form-control rounded-5 position-relative z-1"
                    id="id_ata_od"
                    aria-label="AtA"
                    aria-describedby="AtA"
                    name="ata_od"
                    disabled=""
                    autoComplete="off"
                  />
                  <span
                    className="input-group-text rounded-5 position-absolute end-0 bg-transparent border-0 z-2"
                    id="basic-addon2"
                  >
                    mm
                  </span>
                </div>
              </div>
            </div>
            <div className="col-10 col-md-4 mb-4">
              {/* IOL overall diameter *: */}
              <div className="d-flex flex-column align-items-start">
                <p className="fw-bold mb-2">
                  IOL overall diameter <span className="text-danger">*</span>:
                </p>
                <div className="input-group">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option defaultValue="selected">Select an option</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-10 col-md-4 mb-4">
              {/* IOL end position *: */}
              <div className="d-flex flex-column align-items-start">
                <p className="fw-bold mb-2">
                  IOL end position <span className="text-danger">*</span>:
                </p>
                <div className="input-group">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option defaultValue="selected">Select an option</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center justify-content-md-start">
            <div className="col-10 col-md-4 mb-4">
              {/* Rotation maneuver *: */}
              <div className="d-flex flex-column align-items-start">
                <p className="fw-bold mb-2">
                  Rotation maneuver: <span className="text-danger">*</span>:
                </p>
                <div className="input-group">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option defaultValue="selected">Select an option</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-10 col-md-4 mb-4">
              {/* Central vault (initial): */}
              <div className="d-flex flex-column align-items-start mb-4">
                <p className="fw-bold mb-2">Central vault (initial):</p>
                <div className="input-group">
                  <input
                    type="number"
                    step="0.001"
                    className="form-control rounded-5 position-relative z-1"
                    id="id_ata_od"
                    aria-label="AtA"
                    aria-describedby="AtA"
                    name="ata_od"
                    disabled=""
                    autoComplete="off"
                  />
                  <span
                    className="input-group-text rounded-5 position-absolute end-0 bg-transparent border-0 z-2"
                    id="basic-addon2"
                  >
                    mm
                  </span>
                </div>
              </div>
            </div>
          </div>
            <Button title="Save" bgColor="#B02F92" textColor="#fefefe"  rounded="2rem" textTransform="uppercase" />
        </div>
        </form>
      </div>
    </div>
  );
};

export default FormCard;
