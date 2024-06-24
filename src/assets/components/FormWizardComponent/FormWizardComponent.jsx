import { useState } from "react";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import Button from "../Button/Button";
import FormCard from "../Form/FormCard";
import Eye from "../Eyes/Eye";

export default function validateTab() {
  const [firstTabInput, setFirstTabInput] = useState("");
  const handleComplete = () => {
    console.log("Form completed!");
    // Handle form completion logic here
  };
  // check validate tab
  const checkValidateTab = () => {
    console.log(firstTabInput);
    if (firstTabInput === "") {
      return false;
    }
    return true;
  };
  // error messages
  const errorMessages = () => {
    // you can add alert or console.log or any thing you want
    alert("Please fill in the required fields");
  };

  return (
    <>
    <div className="d-flex justify-content-between align-items-center my-5">
        <div>
            <h3 className="me-4">Postoperative <Eye bgColor="#4888C8" color="#fefefe" title="OD" width="40px" height="40px" fontSize="1.2rem" /></h3>
        </div>
        <Button title="New Control" bgColor="#B02F92" textColor="#fefefe"  rounded="2rem" />
    </div>
    
    
    <FormWizard 
        stepSize="sm"
        onComplete={handleComplete}
      >
        <FormWizard.TabContent title="Intraoperative" icon="ti-user">
          <FormCard />
           
        </FormWizard.TabContent>

        {/* SECOND TAB */}
        <FormWizard.TabContent title="IMM" icon="ti-settings">
          <h3>Second Tab</h3>
          <p>Some content for the second tab</p>
        </FormWizard.TabContent>

        {/* 3 */}
        <FormWizard.TabContent title="1 Day" icon="ti-check">
          <h3>Last Tab</h3>
          <p>Some content for the last tab</p>
        </FormWizard.TabContent>

        {/* 4 */}
        <FormWizard.TabContent title="7 Day" icon="ti-check">
          <h3>Last Tab</h3>
          <p>Some content for the last tab</p>
        </FormWizard.TabContent>

        {/* 5 */}
        <FormWizard.TabContent title="1 Month" icon="ti-check">
          <h3>Last Tab</h3>
          <p>Some content for the last tab</p>
        </FormWizard.TabContent>

        {/* 6 */}
        <FormWizard.TabContent title="3 Months" icon="ti-check">
          <h3>Last Tab</h3>
          <p>Some content for the last tab</p>
        </FormWizard.TabContent>

        {/*7 */}
        <FormWizard.TabContent title="6 Months" icon="ti-check">
          <h3>Last Tab</h3>
          <p>Some content for the last tab</p>
        </FormWizard.TabContent>

        {/* 8 */}
        <FormWizard.TabContent title="9 Months" icon="ti-check">
          <h3>Last Tab</h3>
          <p>Some content for the last tab</p>
        </FormWizard.TabContent>

        {/* 9 */}
        <FormWizard.TabContent title="1 Year" icon="ti-check">
          <h3>Last Tab</h3>
          <p>Some content for the last tab</p>
        </FormWizard.TabContent>

        {/* 10 */}
        <FormWizard.TabContent title="Last step" icon="ti-check">
          <h3>Last Tab</h3>
          <p>Some content for the last tab</p>
        </FormWizard.TabContent>

        {/* 11 */}
        <FormWizard.TabContent title="Last step" icon="ti-check">
          <h3>Last Tab</h3>
          <p>Some content for the last tab</p>
        </FormWizard.TabContent>
      </FormWizard>
    </>
  );
}
