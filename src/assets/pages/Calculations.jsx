import CalculationTable from "../components/CalculationsPatient/CalculationTable";
import CalculationResult from "../components/CalculationsPatient/CalculationResult";
import { useState, useEffect } from "react";

const Calculations = () => {
    const [showNameOnScroll, setShowNameOnScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setShowNameOnScroll(scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
        <div className={`patient-name fixed-top py-2 ${showNameOnScroll ? "show": ""}`}>
                <p className="text-white text-center mb-0">User: Nombre y Apellido</p>
            </div>
            <CalculationTable />
            <CalculationResult />
        </>
    )
}

export default Calculations;