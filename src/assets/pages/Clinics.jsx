import { useEffect, useState } from "react";

const Clinics = () => {
    const [clinics, setClinics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    // CONSUMO DE API DE CLÍNICAS (ORGANIZACIONES)
    const fetchData = async () => {
        const URL = "https://test.iclguru.com/accounts/organizations/";

        try {
            const response = await fetch(URL);
            console.log("RESPONSE: ", response)

            const fetchDataClinics = await response.json();
            console.log("DATOS DE CLINICAS: ", fetchDataClinics);

            setClinics(fetchDataClinics)
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


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
                                (clinics.map((clinic) => (
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