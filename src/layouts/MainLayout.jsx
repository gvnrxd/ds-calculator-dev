import styles from "./MainLayout.module.css";
import Header from "../Shared/Components/Header";
import Input from "@components/common/Input.jsx";
import Definitions from "../features/definitions";

export default function MainLayout({ formData, setFormData }) {
  const fd = formData;

  // ✅ one generic change handler that updates the correct key
  const updateState = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? (value === "" ? "" : Number(value)) : value,
    }));
  };

  // TAKE TAXES OUT AFTER MATERIAL COST
  // (e.g) ( TOTAL EARNINGS - MATERIAL COST ) * TAX
  // TAXES ARE APPLIED ON INCOME PROFITS!
  const subtotal = // Price before Tax
    fd.baseFee +
    fd.hourlyWage * fd.hoursWorked +
    fd.totalSquareFoot * fd.numMaterials +
    fd.avgCostPerMaterial * fd.numMaterialsUsed;
  const taxableIncome =
    fd.hourlyWage * fd.hoursWorked + fd.totalSquareFoot * fd.numMaterials;
  const total = taxableIncome * (1 - fd.tax / 100); //Price after Tax
  const amountTaxed = taxableIncome * (fd.tax / 100);
  const profits =
    fd.hourlyWage * fd.hoursWorked + fd.totalSquareFoot * fd.numMaterials;
  const materialCosts =
    fd.baseFee + fd.avgCostPerMaterial * fd.numMaterialsUsed;
  const netProfits = total;

  return (
    <>
      <Header author="gvnrxd" />

      <div>
        <h2>Current Formula</h2>
        <h3>{`Total
         = (${fd.baseFee ? fd.baseFee : "BaseFee"})
         + (${fd.hourlyWage ? fd.hourlyWage : "HourlyWage"} 
         x ${fd.hoursWorked ? fd.hoursWorked : "HoursWorked"}) 
         + (${fd.totalSquareFoot ? fd.totalSquareFoot : "SquareRoot"}
         x ${fd.numMaterials ? fd.numMaterials : "NumMaterials"})
         + (${
           fd.avgCostPerMaterial ? fd.avgCostPerMaterial : "AvgCostPerMaterial"
         }
         x ${fd.numMaterialsUsed ? fd.numMaterialsUsed : "NumMaterialsUsed"})
         * (${fd.tax ? fd.tax : "Tax%"})`}</h3>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
        <Input
          title="Base Fee"
          name="baseFee"
          type="number"
          value={fd.baseFee}
          onChange={updateState}
        />
        <Input
          title="Hourly Wage"
          name="hourlyWage"
          type="number"
          value={fd.hourlyWage}
          onChange={updateState}
        />
        <Input
          title="Hours Worked"
          name="hoursWorked"
          type="number"
          value={fd.hoursWorked}
          onChange={updateState}
        />
        <Input
          title="Total Sqft"
          name="totalSquareFoot"
          type="number"
          value={fd.totalSquareFoot}
          onChange={updateState}
        />
        <Input
          title="Number of Materials"
          name="numMaterials"
          type="number"
          value={fd.numMaterials}
          onChange={updateState}
        />
        <Input
          title="Average Cost Per Material"
          name="avgCostPerMaterial"
          type="number"
          value={fd.avgCostPerMaterial}
          onChange={updateState}
        />
        <Input
          title="Number of Materials Used"
          name="numMaterialsUsed"
          type="number"
          value={fd.numMaterialsUsed}
          onChange={updateState}
        />
        <Input
          title="Tax%"
          name="tax"
          type="number"
          value={fd.tax}
          onChange={updateState}
        />
        <button type="submit" style={{ width: "10%", margin: "0 auto" }}>
          Submit
        </button>
      </form>
      <h2>
        Your Total Earnings is{" "}
        {total ? (
          <>
            : <span style={{ color: "green" }}>+${subtotal.toFixed(2)}</span>{" "}
            before taxes and:{" "}
            <span style={{ color: "green" }}>${total.toFixed(2)}</span> after
            taxes
          </>
        ) : (
          " (pls enter values)"
        )}
      </h2>
      <p>
        Amount taken out for taxes is:{" "}
        <span style={{ color: "red" }}>
          -${amountTaxed} ({fd.tax}%)
        </span>
      </p>
      <p>
        Total amount spent on materials:{" "}
        <span style={{ color: "red" }}>-${materialCosts}</span>
      </p>
      <p>
        Total profit after material costs:{" "}
        <span style={{ color: "green" }}>+${profits}</span>
      </p>
      {/*<p>{`Net Profit (after tax): ${netProfits}`}</p>*/}
      <p>
        Net Profit (after tax):{" "}
        <span style={{ color: "green" }}>+{total.toFixed(2)}</span>
      </p>

      <p></p>
      <Definitions />
    </>
  );
}
