import { BASE_URL, ACCESS_TOKEN } from "../config";

console.log('BASE_URL:', BASE_URL);
console.log('ACCESS_TOKEN:', ACCESS_TOKEN);

let accessToken = ACCESS_TOKEN;

// Autenticación para acceder a la API
console.log("HOLA MUNDO");
export const authenticate = async () => {
    try {
        const response = await fetch(BASE_URL);

        console.log("RESPUESTA: ", response);

        if (!response.ok) {
            throw new Error("Error al autenticar");
        }

        const data = await response.json();
        console.log("DATOS: ", data);

        accessToken = data.accessToken;
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Obtención de datos (GET)
export const fetchData = async () => {
    try {
        console.log("Fetching data from:", BASE_URL);
        const response = await fetch(`${BASE_URL}`);
        console.log("Response status:", response.status);
        if (!response.ok) {
            throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error en fetchData:", error);
        throw error;
    }
};


// Función para obtener datos de pacientes (GET)
export const fetchPatients = async () => {
    try {
        const response = await fetch(`${BASE_URL}/patients/patients`, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            },
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
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        });

        if (!response.ok) {
            throw new Error(`Error al obtener los datos de clínicas: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};



// Función para obtener datos de clínicas (GET)
export const fetchAccounts = async () => {
    try {
        const response = await fetch(`${BASE_URL}/accounts/profiles/`, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
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
                "Content-Type": "application/json",
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
