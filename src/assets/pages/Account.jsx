import { useState, useEffect } from "react";

const Account = () => {
    const [accounts, setAccounts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // CONSUMO DE API DE CUENTAS
    const fetchData = async () => {
        const URL = "https://test.iclguru.com/accounts/profiles/";
        
        try {
            const response = await fetch(URL);
            console.log("RESPONSE: ", response)

            const fetchDataAccounts = await response.json();
            console.log("DATOS DE CUENTAS: ", fetchDataAccounts);

            setAccounts(fetchDataAccounts);
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
                            (accounts.map((profile) => (
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