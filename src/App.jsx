import { useState } from "react";

// Import Components Here:
import MainLayout from "./layouts/MainLayout";

function App() {
  const [formData, setFormData] = useState({
    total: "",
    baseFee: "",
    hourlyWage: "",
    hoursWorked: "",
    totalSquareFoot: "",
    numMaterials: "",
    avgCostPerMaterial: "",
    numMaterialsUsed: "",
    tax: "",
  });

  return (
    <>
      <MainLayout
        author={"gvnrxd"}
        formData={formData}
        setFormData={setFormData}
      />
    </>
  );
}

export default App;
``;
