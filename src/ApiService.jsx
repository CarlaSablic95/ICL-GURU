
const BASE_URL = "https://test.iclguru.com";
console.log("URL BASE: " + BASE_URL);

export const authenticate = async (credentials) => {
    try {
        const response = await fetch(`${BASE_URL}/accounts/token/`, {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials) // username y password
        });

        console.log("RESPONSE: ", response); // STATUS 200, TODO OK

        if(!response.ok) {
            throw new Error("Incorrect username or password.");
        }
        
        const data = await response.json();
        console.log("AUTHENTICATE - DATA ACCESS: ", data.access); // CONECTA CORRECTAMENTE CON LOS DATOS
        console.log("AUTHENTICATE - DATA REFRESH: ", data.refresh); // CONECTA CORRECTAMENTE CON LOS DATOS
        console.log("AUTHENTICATE - CREDENTIALS: ", credentials); // CONECTA CORRECTAMENTE CON LOS DATOS
        // Cuando ingresa me guarda CORRECTAMENTE ambos token, en session Storage
        localStorage.setItem("accessToken", data.access);
        localStorage.setItem("refreshToken", data.refresh);
        localStorage.setItem("user", JSON.stringify(credentials));
        return data;
    } catch (error) {
        console.error("Error during authentication: ", error);
        throw error;
    }

};

export const refreshAcccessToken = async () => {
    const refreshToken = localStorage.getItem("refreshToken");

    if(!refreshToken) {
        throw new Error("No refresh token found");
    }

    try {
        const response = await fetch(`${BASE_URL}/accounts/refresh-token`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ refreshToken })
        });

        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json();
        localStorage.setItem("accessToken", data.access);
        return data.access;
    } catch(error) {
        console.error("Error during token refresh: ", error);
        throw error;
    }
}

// PATIENTS
export const getPatients = async (accessToken) => {
    try {
        const response = await fetch(`${BASE_URL}/patients/patients/`, {
            method:"GET",
            headers: {
                "Authorization": `Bearer ${accessToken}`,
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        console.log("DATA: ", data);
        if(!response.ok) {
            throw new Error("Error al obtener pacientes");
        }
        return data;
    } catch (error) {
        console.error("Error: ", error);
        throw error;
    }
}

// CLINICS
export const getClinics = async (accessToken) => {
    
        const response = await fetch(`${BASE_URL}/accounts/organizations/`, {
            method:"GET",
            headers: {
                "Authorization": `Bearer ${accessToken}`,
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        console.log("DATA: ", data);
        if(!response.ok) {  
            throw new Error("Error al obtener clínicas");
        }
        return data;
    
}

// ACCOUNTS
export const getAccounts = async (accessToken) => {
    try {
        const response = await fetch(`${BASE_URL}/accounts/profiles`, {
            method:"GET",
            headers: {
                "Authorization": `Bearer ${accessToken}`,
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        console.log("DATA: ", data);
        if(!response.ok) {
            throw new Error("Error al obtener cuentas");
        }
        return data;
    } catch (error) {
        console.error("Error: ", error);
        throw error;
    }
}