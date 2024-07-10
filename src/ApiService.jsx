const BASE_URL = import.meta.env.VITE_BASE_URL;
const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

console.log('RESULTADO - BASE_URL:', BASE_URL);
console.log('RESULTADO - ACCESS_TOKEN:', ACCESS_TOKEN);

let accessToken = ACCESS_TOKEN;

// Autenticación para acceder a la API

export const authenticate = async () => {
    try {
        const response = await fetch(`${BASE_URL}/accounts/token`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: "user.demo",
                password: "U4u4iclguru$"
            })
        });
        // console.log("RESPUESTA: ", response);

       
            const data = await response.json();
            console.log("DATOS: ", data);


        accessToken = data.ACCESS_TOKEN;

        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Obtención de datos (GET)
// export const fetchData = async () => {
//     try {
//         console.log("Fetching data from:", BASE_URL);
//         const response = await fetch(`${BASE_URL}`, {
//             method: "GET",
//             headers: {
//                 "Authorization": `Bearer ${ACCESS_TOKEN}`,
//                 "Content-Type": "application/json"
//             }
//         });
//         console.log("Response status:", response.status);
//         if (!response.ok) {
//             throw new Error('Error al obtener los datos');
//         }
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error("Error en fetchData:", error);
//         throw error;
//     }
// };


// Función para obtener datos de pacientes (GET)
export const fetchPatients = async () => {
    try {
        const response = await fetch(`${BASE_URL}/patients/patients`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${accessToken}`,
                    "Content-Type": "application/json"
                }
        });
        const data = await response.json();
        if(!response.ok) {
            throw new Error("Error al obtener los datos de pacientes");
        }
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Función para obtener datos de clínicas (GET)
export const fetchClinics = async () => {
    try {
        console.log('Fetching clinics from:', `${BASE_URL}/accounts/organizations`);
        const response = await fetch(`${BASE_URL}/accounts/organizations`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${accessToken}`,
                "Content-Type": "application/json"
            }
        });

        console.log('RESPONSE STATUS:', response.status);
        console.log('RESPONSE HEADERS:', response.headers);

        if (!response.ok) {
            const errorText = await response.text();
            console.log('Error text:', errorText);
            throw new Error(`Error al obtener los datos de clínicas: ${response.statusText}`);
    }

        const data = await response.json();
        return data.result;
    } catch (error) {
        console.error(error);
        throw error;
    }
};


// Función para obtener datos de clínicas (GET)
export const fetchAccounts = async () => {
    try {
        const response = await fetch(`${BASE_URL}/accounts/profiles/`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${accessToken}`,
                "Content-Type": "application/json"
            }
        });
        if(!response.ok) {
            throw new Error("Error al obtener los datos de cuentas");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Envío de datos (POST)

export const postData = async (endpoint, payload) => {
    try {
        const response = await fetch(`${BASE_URL}/${endpoint}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
            body: JSON.stringify(payload)
        });

        if(!response.ok) {
         throw new Error("Error al enviar los datos");
        }
        const data = await response.json(); 
        return data;
    } catch (error) {
            console.error(error);
            throw error;
        }
}
