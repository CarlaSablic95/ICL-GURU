const Patients = () => {
  return (
    <div className="col-10 px-5">
      <h1 className="mb-4 text-center text-uppercase">Patients</h1>
      <div className="d-flex justify-content-center align-items-center mb-4">
        <form className="d-flex" role="search">
          <input
            className="form-control me-2 rounded-5"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-primary rounded-5" type="submit">
            Search
          </button>
        </form>
      </div>

      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr className="text-center">
              <th scope="col">Lastname</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Sex</th>
              <th scope="col">DOB</th>
              <th scope="col">Patient ID</th>
              <th scope="col">MRN</th>
              <th scope="col">Organization</th>
              <th scope="col">Follow Up</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="align-middle">Jaik</td>
              <td className="align-middle">Mia</td>
              <td className="align-middle">32</td>
              <td className="align-middle">F</td>
              <td className="align-middle">Nov 18, 1997</td>
              <td className="align-middle">20341</td>
              <td className="align-middle">GKJ09</td>
              <td className="align-middle">Test Organitation</td>
              <td className="align-middle">
                <div className="status-indicator blink rounded-circle bg-danger mx-auto"></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Patients;
