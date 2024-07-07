import { BASE_URL, ACCESS_TOKEN } from "../config";

let accessToken = ACCESS_TOKEN;

// Autenticación para acceder a la API
export const authenticate = async (username, password) => {
    try {
        const response = await fetch(`${BASE_URL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        });

        if(!response.ok) {
            throw new Error("Error al autenticar");
        }

        const data = await response.json();
        accessToken = data.accessToken;

        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Obtención de datos (GET)
export const fetchData = async () => {
    try {
        const response = await fetch(BASE_URL);
        if(!response.ok) {
            throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Función para obtener datos de pacientes (GET)
export const fetchPatients = async () => {
    try {
        const response = await fetch(`${BASE_URL}/patients/patients`, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        });
        if(!response.ok) {
            throw new Error("Error al obtener los datos de pacientes");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Función para obtener datos de clínicas (GET)
export const fetchClinics = async () => {
    try {
        const response = await fetch(`${BASE_URL}/accounts/organizations`, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        });
        if(!response.ok) {
            throw new Error("Error al obtener los datos de clínicas");
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
