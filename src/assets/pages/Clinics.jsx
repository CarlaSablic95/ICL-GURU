import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { getClinics } from "../../ApiService";


const Clinics = () => {
    const { accessToken } = useContext(AuthContext);

    console.log("USE CONTEXT: ", {accessToken}); // null
    const [dataClinics, setDataClinics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    // CONSUMO DE API DE CLÍNICAS (ORGANIZACIONES)
  useEffect(() => {
      const getData = async () => {
        try {
            const result = await getClinics(accessToken);
            console.log("RESULTADO API CLINICA: ", result);
            setDataClinics(result);
            setLoading(false);
        } catch (error) {
            console.error("Error al obtener datos: ", error);
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    getData();
  }, [accessToken]);



    return (
        <div className="col-10 px-5">
            <h1 className="text-center">Clinics</h1>
            <div>
                <div className="container py-5">
                { (error) ? (<h4 className="text-danger text-center">Error al cargar los datos...</h4>)  : 
              (loading) ? (<h4 className="text-center">Cargando datos...</h4>) :
              (
                <div className="table-responsive mb-4">
                    <table className="table">
                    <thead>
                        <tr>
                            <th scope="col" className="text-center">Name</th>
                        </tr>
                    </thead>

                        <tbody>
                            {
                                (dataClinics.map((clinic) => (
                                    <tr key={clinic.id}>
                                        <td className="text-center">{clinic.name}</td>
                                    </tr>
                                )))
                            }
                        </tbody>
                    </table>
                </div>
              )
            }
                </div>
                </div>
        </div>
    )
}

export default Clinics;