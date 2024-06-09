const RightEyeResult = () => {
    return (
        <div className="table-responsive p-2 w-100">
        <table className="table table-striped calculations-table mb-5">
          <thead>
            <tr className="text-center border-bottom border-black">
              <th scope="col" className="align-middle">IOL overall diameter</th>
              <th scope="col" className="align-middle">Central vault</th>
              <th scope="col" className="align-middle">Peripheral vault</th>
              <th scope="col" className="align-middle">Angle</th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="text-center">
              <td className="align-middle" style={{ backgroundColor: "#ADD7EE", borderRadius: "5px" }}>12.1 mm</td>
              <td className="align-middle" style={{ backgroundColor: "#FF0000", borderRadius: "5px" }}>0.133 mm</td>
              <td className="align-middle" style={{ backgroundColor: "#FF0000", borderRadius: "5px" }}>0.122 mm</td>
              <td className="align-middle" style={{ backgroundColor: "#1BAE18", borderRadius: "5px" }}>36°</td>
            </tr>

            <tr className="text-center">
              <td className="align-middle" style={{ backgroundColor: "#82BECA", borderRadius: "5px" }}>12.6 mm</td>
              <td className="align-middle" style={{ backgroundColor: "#1BAE18", borderRadius: "5px" }}>0.364 mm</td>
              <td className="align-middle" style={{ backgroundColor: "#1BAE18", borderRadius: "5px" }}>0.353 mm</td>
              <td className="align-middle" style={{ backgroundColor: "#1BAE18", borderRadius: "5px" }}>32°</td>
            </tr>

            <tr className="text-center">
              <td className="align-middle" style={{ backgroundColor: "#ADD7EE", borderRadius: "5px" }}>13.2 mm</td>
              <td className="align-middle" style={{ backgroundColor: "#1BAE18", borderRadius: "5px" }}>0.396 mm</td>
              <td className="align-middle" style={{ backgroundColor: "#1BAE18", borderRadius: "5px" }}>0.385 mm</td>
              <td className="align-middle" style={{ backgroundColor: "#1BAE18", borderRadius: "5px" }}>32°</td>
            </tr>

            <tr className="text-center">
              <td className="align-middle" style={{ backgroundColor: "#82BECA", borderRadius: "5px" }}>13.7 mm</td>
              <td className="align-middle" style={{ backgroundColor: "#1BAE18", borderRadius: "5px" }}>0.607 mm</td>
              <td className="align-middle" style={{ backgroundColor: "#1BAE18", borderRadius: "5px" }}>0.596 mm</td>
              <td className="align-middle" style={{ backgroundColor: "#1BAE18", borderRadius: "5px" }}>29°</td>
            </tr>
          
          </tbody>
        </table>
      </div>
    )
}

export default RightEyeResult;