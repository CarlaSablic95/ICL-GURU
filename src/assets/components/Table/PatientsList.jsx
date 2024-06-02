const PatientsList = () => {
    return (
        <div className="table-responsive p-2" style={{ backgroundColor:"#EDF2FB" }}>
        <table className="table table-striped">
          <thead>
            <tr className="text-center border-bottom border-black">
              <th scope="col">Lastname</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Sex</th>
              <th scope="col">DOB</th>
              <th scope="col">Patient ID</th>
              <th scope="col">MRN</th>
              <th scope="col">Organization</th>
              <th scope="col">Follow Up</th>
              <th scope="col">Edit patients</th>
              <th scope="col">Delete patients</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="align-middle">Jaik</td>
              <td className="align-middle">Mia</td>
              <td className="align-middle">26</td>
              <td className="align-middle">F</td>
              <td className="align-middle">Nov 18, 1997</td>
              <td className="align-middle">20341</td>
              <td className="align-middle">GKJ09</td>
              <td className="align-middle">Test Organitation</td>
              <td className="align-middle">
                <div className="status-indicator border border-black rounded-circle complete-status mx-auto"></div>
              </td>
              <td className="align-middle">
                <i className="bi bi-pencil-square" data-bs-toggle="modal" data-bs-target="#ModalEditPatient"/>
              </td>
              <td className="align-middle">
                <i className="bi bi-trash" data-bs-toggle="modal" data-bs-target="#modalDelete"/>
              </td>
            </tr>

            <tr className="text-center">
              <td className="align-middle">Ramirez</td>
              <td className="align-middle">Juan</td>
              <td className="align-middle">28</td>
              <td className="align-middle">M</td>
              <td className="align-middle">Dic 10, 1995</td>
              <td className="align-middle">20498</td>
              <td className="align-middle">ABC32</td>
              <td className="align-middle">Test Organitation</td>
              <td className="align-middle">
                <div className="status-indicator border border-black blink rounded-circle missing-data mx-auto"></div>
              </td>
              <td className="align-middle">
                <i className="bi bi-pencil-square" data-bs-toggle="modal" data-bs-target="#ModalEditPatient"/>
              </td>
              <td className="align-middle">
                <i className="bi bi-trash" data-bs-toggle="modal" data-bs-target="#modalDelete"/>
              </td>
            </tr>

            <tr className="text-center">
              <td className="align-middle">Washington</td>
              <td className="align-middle">Jordan</td>
              <td className="align-middle">28</td>
              <td className="align-middle">M</td>
              <td className="align-middle">Dic 9, 1980</td>
              <td className="align-middle">20348</td>
              <td className="align-middle">FKJ69</td>
              <td className="align-middle">Test Organitation</td>
              <td className="align-middle">
                <div className="status-indicator border border-black rounded-circle no-data-loading mx-auto"></div>
              </td>
              <td className="align-middle">
                <i className="bi bi-pencil-square" data-bs-toggle="modal" data-bs-target="#ModalEditPatient" />
              </td>
              <td className="align-middle">
                <i className="bi bi-trash" data-bs-toggle="modal" data-bs-target="#modalDelete"/>
              </td>
            </tr>

            <tr className="text-center">
              <td className="align-middle">Evans</td>
              <td className="align-middle">Linda</td>
              <td className="align-middle">45</td>
              <td className="align-middle">M</td>
              <td className="align-middle">Feb 9, 1985</td>
              <td className="align-middle">20348</td>
              <td className="align-middle">FPR77</td>
              <td className="align-middle">Test Organitation</td>
              <td className="align-middle">
                <div className="status-indicator border border-black rounded-circle half-completed mx-auto"></div>
              </td>
              <td className="align-middle">
                <i className="bi bi-pencil-square" data-bs-toggle="modal" data-bs-target="#ModalEditPatient"/>
              </td>
              <td className="align-middle">
                <i className="bi bi-trash" data-bs-toggle="modal" data-bs-target="#modalDelete"/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}

export default PatientsList;