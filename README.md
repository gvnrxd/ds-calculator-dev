# Earnings Estimator <small>_(Square footage Model)_</small>

SPA (Single Page Application) made to assist business that use a squft business/pricing model test/review potential earnings give "x" conditions (e.g. wage, squft, costPerMaterial, numMaterials, BaseFee).

### Links

- [Go to Features](#features)
- [Go to Calculations](#calculations-performedused)
- [Go to Warning](#warnings)
- [Go to Inspiration](#inspiration)

# Features

- Adjustable wage _( default USD )_ <strong>ABLE TO BE TOGGLED</strong>
- Adjustable squft
- Adjustable Material Costs
- Takes out "x" amount of Tax ( calculates Tax )
- & More

# Calculations Performed/Used

```text
Total = BaseFee
      + (HourlyWage × HoursWorked) [optional]
      + (SquareFoot × NumMaterials)
      + (AvgCostPerMaterial × NumMaterialsUsed)
      - (Tax%)
```

: in Theory. This formula will provide the total amount earned (after taxes) for a guaranteed profitable model.<br>
{This formula only calculates a model that guarantees a + net gain. It does not take into account:

- Market Competitiveness
- Customer Willingness to Pay (Demand @ Total Price Level)

}

# Warnings

I am not a financial advisor/accountant. This formula is entirely theory and not proven to increase sales.

# Inspiration

A good friend of mine started his own business, specifically a rug making business. However, when it came to calculating a good price for customers there was a genuine moment of difficulty. Although some competitors use models such as:

- Hourly Rate x Hours Worked (e.g. 50/hr, 75/hr)
- Flat Rate Per Square Foot x Square Foot (e.g. 75*sqft, 50*squft)
- Flat Rate xSquare Foot (100\*squft, 75\*squft )
- Cost of Materials x 2 + (Flat Rate or Hourly Wage \* Hours Worked)

Although these are all great models I felt they all had specific weaknesses that present at times Prices that are either unfair/unrealistic for customers, or Net Losses and Negative ROI.

For Instance: With a Rug that is only
(stop Here)
