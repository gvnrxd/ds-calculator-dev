import styles from "./index.module.css";

export default function Definitions() {
  return (
    <>
      <section>
        <h2>📖 Definitions</h2>

        <h3>Base Fee</h3>
        <p>
          A fixed starting charge you add to every project or job, regardless of
          time or materials used.
        </p>

        <h3>Hourly Wage</h3>
        <p>The amount you charge per hour of work.</p>

        <h3>Hours Worked</h3>
        <p>The number of hours spent working on the project.</p>

        <h3>Total Sq Ft</h3>
        <p>
          The total square footage of the project area. This is often used in
          pricing models that charge per square foot.
        </p>

        <h3>Number of Materials</h3>
        <p>
          How many units of raw material are required (e.g., rolls of yarn,
          planks of wood, gallons of paint).
        </p>

        <h3>Average Cost per Material</h3>
        <p>The average cost of a single material unit.</p>

        <h3>Number of Materials Used</h3>
        <p>The actual count of material units consumed during the project.</p>

        <h3>Tax (%)</h3>
        <p>
          The percentage of taxable income you must pay as tax. In this
          calculator, tax is applied after subtracting material costs from total
          revenue.
        </p>

        <h2>💰 Financial Terms</h2>

        <h3>Revenue (Total Earnings Before Tax)</h3>
        <p>
          The total amount billed to the client. For example: Base Fee + (Hourly
          Wage × Hours Worked) + (Total Sq Ft × Rate) + other charges.
        </p>

        <h3>Taxable Income (Profit Before Tax)</h3>
        <p>
          Revenue minus material costs. This is the amount the government taxes.
        </p>

        <h3>Tax Amount</h3>
        <p>
          The portion of taxable income paid to the government: Taxable Income ×
          (Tax % ÷ 100).
        </p>

        <h3>Net Profit (Profit After Tax)</h3>
        <p>
          The actual earnings you keep after subtracting both material costs and
          taxes.
        </p>

        <h3>Earnings After Tax</h3>
        <p>
          Equivalent to Net Profit in this model — the money you walk away with.
        </p>
      </section>
    </>
  );
}
