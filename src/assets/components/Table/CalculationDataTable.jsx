import Edit from "/icons/edit-1.svg";
import Delete from "/icons/delete.svg";

const CalculationDataTable = () => {
    return (
        <div className="table-responsive p-2">
        <table className="table table-striped calculations-table mb-5">
          <thead>
            <tr className="text-center border-bottom border-black">
              <th scope="col" className="align-middle">Calculation date</th>
              <th scope="col" className="align-middle">Surgery date</th>
              <th scope="col" className="align-middle">Result Eyes</th>
              <th scope="col" className="align-middle">Method</th>
              <th scope="col" className="align-middle">Edit calculation</th>
              <th scope="col" className="align-middle">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="align-middle">February 21,2024</td>
              <td className="align-middle">February 21,2024</td>
              <td className="align-middle">
              <span className="rounded-5 p-1 text-white fw-bold" style={{ backgroundColor:"#4888C8" }}>OD</span>
              </td>
              <td className="align-middle">ZV1</td>
              <td className="align-middle">
                <img src={ Edit }  style={{ width:"18px", cursor:"pointer" }} data-bs-toggle="modal" data-bs-target="#ModalEditPatient"/>
              </td>
              <td className="align-middle">
                <img src={ Delete } style={{ width: "22px", cursor:"pointer"}}data-bs-toggle="modal" data-bs-target="#modalDelete"/>
              </td>
            </tr>

            <tr className="text-center">
              <td className="align-middle">February 21,2024</td>
              <td className="align-middle">February 21,2024</td>
              <td className="align-middle">
              <span className="rounded-5 p-1 text-white fw-bold" style={{ backgroundColor: "#2FB297" }}>OS</span>
              </td>
              <td className="align-middle">ZV1</td>
              <td className="align-middle">
                <img src={ Edit }  style={{ width:"18px", cursor:"pointer" }} data-bs-toggle="modal" data-bs-target="#ModalEditPatient"/>
              </td>
              <td className="align-middle">
                <img src={ Delete } style={{ width: "22px", cursor:"pointer"}}data-bs-toggle="modal" data-bs-target="#modalDelete"/>
              </td>
            </tr>

          
          </tbody>
        </table>

        <table className="table table-striped calculations-table">
          <thead>
            <tr className="text-center border-bottom border-black">
              <th scope="col" className="align-middle">Calculation date</th>
              <th scope="col" className="align-middle">Surgery date</th>
              <th scope="col" className="align-middle">Result Eyes</th>
              <th scope="col" className="align-middle">Method</th>
              <th scope="col" className="align-middle">Edit calculation</th>
              <th scope="col" className="align-middle">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="align-middle">June 11,2024</td>
              <td className="align-middle"></td>
              <td className="align-middle">
              <span className="rounded-5 p-1 text-dark fw-bold" style={{ backgroundColor: "#8F8F8F" }}>OD</span>
              </td>
              <td className="align-middle">ZV1</td>
              <td className="align-middle">
                <img src={ Edit }  style={{ width:"18px", cursor:"pointer" }} data-bs-toggle="modal" data-bs-target="#ModalEditPatient"/>
              </td>
              <td className="align-middle">
                <img src={ Delete } style={{ width: "22px", cursor:"pointer"}}data-bs-toggle="modal" data-bs-target="#modalDelete"/>
              </td>
            </tr>

            <tr className="text-center">
              <td className="align-middle">June 11,2024</td>
              <td className="align-middle"></td>
              <td className="align-middle">
              <span className="rounded-5 p-1 text-dark fw-bold" style={{ backgroundColor: "#8F8F8F" }}>OS</span>
              </td>
              <td className="align-middle">ZV1</td>
              <td className="align-middle">
                <img src={ Edit }  style={{ width:"18px", cursor:"pointer" }} data-bs-toggle="modal" data-bs-target="#ModalEditPatient"/>
              </td>
              <td className="align-middle">
                <img src={ Delete } style={{ width: "22px", cursor:"pointer"}}data-bs-toggle="modal" data-bs-target="#modalDelete"/>
              </td>
            </tr>

          
          </tbody>
        </table>
      </div>
    )
}

export default CalculationDataTable;