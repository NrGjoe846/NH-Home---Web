import { useState } from "react";
import { Calculator, Landmark, ShieldCheck, Sparkles } from "lucide-react";

export default function LoanEMICalculator() {
  const [propertyPrice, setPropertyPrice] = useState(7500000); // 75 Lakhs default
  const [downPaymentPct, setDownPaymentPct] = useState(20); // 20% down payment
  const [interestRate, setInterestRate] = useState(8.5); // 8.5% default SBI/HDFC promo
  const [tenureYears, setTenureYears] = useState(20); // 20 years default

  const downPayment = Math.round(propertyPrice * (downPaymentPct / 100));
  const principalAmount = propertyPrice - downPayment;

  // Monthly interest rate calculation
  const monthlyRate = (interestRate / 12) / 100;
  const totalMonths = tenureYears * 12;

  // EMI formula: [P * r * (1 + r)^n] / [(1 + r)^n - 1]
  let emiValue = 0;
  if (monthlyRate > 0) {
    emiValue = Math.round(
      (principalAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1)
    );
  } else {
    emiValue = Math.round(principalAmount / totalMonths);
  }

  const totalAmountPayable = emiValue * totalMonths;
  const totalInterestPayable = Math.max(0, totalAmountPayable - principalAmount);

  // Percentages for visualization
  const principalPct = totalAmountPayable > 0 ? Math.round((principalAmount / totalAmountPayable) * 100) : 100;
  const interestPct = totalAmountPayable > 0 ? 100 - principalPct : 0;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const partnerBanks = [
    { name: "SBI", rate: "8.40%*", notes: "Pre-approved, Zero processing fee" },
    { name: "HDFC", rate: "8.45%*", notes: "Digital approvals, Flexi-tenures" },
    { name: "ICICI", rate: "8.50%*", notes: "Instant sanction, High eligibility" },
    { name: "LIC", rate: "8.35%*", notes: "Lowest rates for government staff" },
    { name: "Axis", rate: "8.55%*", notes: "Super-fast disbursal, Easy KYC" }
  ];

  return (
    <div className="rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-200 via-orange-50/60 to-white p-6 shadow-md md:p-8" id="emi-calculator-container">
      <div className="mb-6 flex items-center space-x-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
          <Landmark className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-display text-lg font-bold text-neutral-900">Home Loan EMI Calculator</h3>
          <p className="text-xs text-neutral-500">Calculate your monthly repayments and financial amortization</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Sliders Configuration */}
        <div className="space-y-5 lg:col-span-7">
          {/* Property Price Slider */}
          <div>
            <div className="flex justify-between text-xs font-semibold text-neutral-600 mb-1">
              <span>Property Price</span>
              <span className="font-mono text-neutral-900 text-sm font-bold">{formatCurrency(propertyPrice)}</span>
            </div>
            <input
              type="range"
              min="1500000"
              max="30000000"
              step="100000"
              value={propertyPrice}
              onChange={(e) => setPropertyPrice(Number(e.target.value))}
              className="w-full accent-orange-600 cursor-pointer h-2 bg-neutral-100 rounded-lg appearance-none"
            />
            <div className="flex justify-between text-[10px] text-neutral-400 font-mono mt-1">
              <span>₹15 Lakhs</span>
              <span>₹1.5 Crores</span>
              <span>₹3 Crores</span>
            </div>
          </div>

          {/* Down Payment % Slider */}
          <div>
            <div className="flex justify-between text-xs font-semibold text-neutral-600 mb-1">
              <span>Down Payment ({downPaymentPct}%)</span>
              <span className="font-mono text-neutral-900 text-sm font-bold">{formatCurrency(downPayment)}</span>
            </div>
            <input
              type="range"
              min="10"
              max="80"
              step="5"
              value={downPaymentPct}
              onChange={(e) => setDownPaymentPct(Number(e.target.value))}
              className="w-full accent-orange-600 cursor-pointer h-2 bg-neutral-100 rounded-lg appearance-none"
            />
            <div className="flex justify-between text-[10px] text-neutral-400 font-mono mt-1">
              <span>10% down</span>
              <span>40% down</span>
              <span>80% down</span>
            </div>
          </div>

          {/* Interest Rate Slider */}
          <div>
            <div className="flex justify-between text-xs font-semibold text-neutral-600 mb-1">
              <span>Interest Rate (p.a.)</span>
              <span className="font-mono text-neutral-900 text-sm font-bold">{interestRate}%</span>
            </div>
            <input
              type="range"
              min="6"
              max="14"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full accent-orange-600 cursor-pointer h-2 bg-neutral-100 rounded-lg appearance-none"
            />
            <div className="flex justify-between text-[10px] text-neutral-400 font-mono mt-1">
              <span>6.0%</span>
              <span>10.0%</span>
              <span>14.0%</span>
            </div>
          </div>

          {/* Tenure Slider */}
          <div>
            <div className="flex justify-between text-xs font-semibold text-neutral-600 mb-1">
              <span>Loan Tenure</span>
              <span className="font-mono text-neutral-900 text-sm font-bold">{tenureYears} Years</span>
            </div>
            <input
              type="range"
              min="5"
              max="30"
              step="1"
              value={tenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
              className="w-full accent-orange-600 cursor-pointer h-2 bg-neutral-100 rounded-lg appearance-none"
            />
            <div className="flex justify-between text-[10px] text-neutral-400 font-mono mt-1">
              <span>5 Years</span>
              <span>15 Years</span>
              <span>30 Years</span>
            </div>
          </div>
        </div>

        {/* Calculation Outputs */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="rounded-xl border border-neutral-100 bg-neutral-50 p-5">
            <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
              ESTIMATED MONTHLY EMI
            </span>
            <div className="mt-1 font-display text-3xl font-extrabold text-neutral-900">
              {formatCurrency(emiValue)} <span className="text-sm font-normal text-neutral-500">/ Month</span>
            </div>

            <div className="mt-5 space-y-3.5 border-t border-neutral-200 pt-4 text-xs">
              <div className="flex justify-between">
                <span className="text-neutral-500">Loan Principal Amount</span>
                <span className="font-mono font-bold text-neutral-800">{formatCurrency(principalAmount)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Total Interest Payable</span>
                <span className="font-mono font-bold text-neutral-800">{formatCurrency(totalInterestPayable)}</span>
              </div>
              <div className="flex justify-between border-t border-neutral-200/60 pt-2.5">
                <span className="text-neutral-600 font-medium">Total Amount Payable</span>
                <span className="font-mono font-bold text-orange-600">{formatCurrency(totalAmountPayable)}</span>
              </div>
            </div>

            {/* Graphic Bar */}
            <div className="mt-6">
              <div className="flex justify-between text-[10px] text-neutral-400 font-semibold mb-1.5">
                <span>Principal ({principalPct}%)</span>
                <span>Interest ({interestPct}%)</span>
              </div>
              <div className="flex h-3.5 w-full overflow-hidden rounded-full bg-neutral-200">
                <div 
                  className="bg-orange-600 transition-all duration-300"
                  style={{ width: `${principalPct}%` }}
                />
                <div 
                  className="bg-neutral-800 transition-all duration-300"
                  style={{ width: `${interestPct}%` }}
                />
              </div>
            </div>
          </div>

          {/* Partner Banks Grid */}
          <div className="mt-5">
            <div className="flex items-center space-x-1 mb-2.5">
              <ShieldCheck className="h-4 w-4 text-orange-600 shrink-0" />
              <h4 className="font-display text-xs font-bold text-neutral-700 tracking-wider uppercase">
                NH Preferred Loan Partners
              </h4>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {partnerBanks.map((bank) => (
                <div 
                  key={bank.name}
                  className="group relative rounded-lg border border-neutral-200 bg-white p-2.5 text-center hover:border-orange-500 hover:shadow-sm transition-all"
                >
                  <span className="block font-display text-xs font-extrabold text-neutral-800">{bank.name}</span>
                  <span className="block font-mono text-[10px] font-bold text-orange-600 mt-0.5">{bank.rate}</span>
                  {/* Tooltip */}
                  <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 scale-0 group-hover:scale-100 rounded-md bg-neutral-800 p-2 text-[9px] text-white transition-transform z-10">
                    {bank.notes}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-neutral-800" />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-neutral-400 mt-2 italic">
              * Rates are indicative. Special 0.15% concession available for NH Homes customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
