import CalculationTable from "../components/CalculationsPatient/CalculationTable";
import CalculationDataPatient from "../components/CalculationsPatient/CalculationDataPatient";
import CalculationResult from "../components/CalculationsPatient/CalculationResult";

const Calculations = () => {
    
    return (
        <>
            <CalculationTable />
            <CalculationDataPatient />
            <CalculationResult />
        </>
    )
}

export default Calculations;