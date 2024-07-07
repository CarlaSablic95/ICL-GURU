import { useState, useEffect } from "react";
import { fetchAccounts } from "../../ApiService";

const Account = () => {
    const [dataAccounts, setDataAccounts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // CONSUMO DE API DE CUENTAS
useEffect(() => {
    const getData = async () => {
        try {
            const result = await fetchAccounts();
            setDataAccounts(result);
            setLoading(false);
        } catch (error) {
            console.error("Error al obtener datos: ", error);
        } finally {
            setLoading(false);
        }
    }

    getData();
}, []);


    return (
        <div className="col-10 px-5">
            <h1 className="text-center">Accounts</h1>
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
                        <th scope="col" className="text-center">Username</th>
                        <th scope="col" className="text-center">Email</th>
                        </tr>
                    </thead>

                    <tbody className="align-middle">
                        {
                            (dataAccounts.map((profile) => (
                                <tr key={profile.id}>
                                <td className="text-center">{profile.name}</td>
                                <td className="text-center">{profile.user}</td>
                                <td className="text-center">{profile.email}</td>
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

export default Account;