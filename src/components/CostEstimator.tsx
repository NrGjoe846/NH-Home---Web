import React, { useState } from "react";
import { Calculator, Check, ArrowRight, Sparkles, AlertCircle } from "lucide-react";
import { constructionPackages } from "../data/projects";

interface CostEstimatorProps {
  onSubmitLead: (leadData: { type: string; name: string; email: string; phone: string; details: any }) => void;
}

export default function CostEstimator({ onSubmitLead }: CostEstimatorProps) {
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(1); // Premium by default
  const [area, setArea] = useState(1500);
  const [location, setLocation] = useState("OMR, Chennai");
  
  // Form submission state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const plan = constructionPackages[selectedPlanIndex];
  const ratePerSqFt = parseInt(plan.price.replace(/[^\d]/g, ""), 10);
  const totalCost = area * ratePerSqFt;

  // Breakdown of costs
  const materialCost = Math.round(totalCost * 0.58);
  const laborCost = Math.round(totalCost * 0.24);
  const engineeringCost = Math.round(totalCost * 0.10);
  const finishesCost = Math.round(totalCost * 0.08);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleEstimateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    onSubmitLead({
      type: "enquiry",
      name,
      email,
      phone,
      details: {
        interest: "Custom Construction Cost Estimate",
        planSelected: plan.name,
        estimatedArea: `${area} Sq.ft`,
        targetLocation: location,
        rateApplied: `${plan.price} per Sq.ft`,
        estimatedTotal: formatCurrency(totalCost),
        notes: `User calculated construction estimate of ${formatCurrency(totalCost)} for ${area} sq.ft in ${location}`
      }
    });

    setSubmitted(true);
    setTimeout(() => {
      setName("");
      setEmail("");
      setPhone("");
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8" id="cost-estimator-container">
      <div className="mb-6 flex items-center space-x-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
          <Calculator className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-display text-lg font-bold text-neutral-900">Custom House Cost Estimator</h3>
          <p className="text-xs text-neutral-500">Calculate construction expenditure based on square footage</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Estimator Configuration */}
        <div className="space-y-6 lg:col-span-7">
          {/* Step 1: Choose Package */}
          <div>
            <label className="block text-xs font-semibold tracking-wider text-neutral-500 uppercase mb-3">
              1. Select Construction Package
            </label>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {constructionPackages.map((pkg, idx) => (
                <button
                  key={pkg.name}
                  type="button"
                  onClick={() => setSelectedPlanIndex(idx)}
                  className={`flex flex-col items-start rounded-xl border p-4 text-left transition-all ${
                    selectedPlanIndex === idx
                      ? "border-orange-500 bg-orange-50/50 ring-2 ring-orange-500/20"
                      : "border-neutral-200 bg-white hover:border-neutral-300"
                  }`}
                >
                  <span className="text-xs font-semibold text-neutral-500">{pkg.name}</span>
                  <span className="mt-1 font-display text-lg font-bold text-neutral-900">
                    {pkg.price} <span className="text-xs font-normal text-neutral-500">/Sq.Ft</span>
                  </span>
                  <span className="mt-2 text-[11px] text-neutral-500 line-clamp-2 leading-relaxed">
                    {pkg.description}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Input Area */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold tracking-wider text-neutral-500 uppercase">
                2. Enter Build Area
              </label>
              <div className="flex items-center space-x-1 font-mono text-sm font-bold text-neutral-900">
                <input
                  type="number"
                  min="500"
                  max="10000"
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-20 border-b border-neutral-300 text-right focus:border-orange-500 outline-none pb-0.5"
                />
                <span>Sq.Ft</span>
              </div>
            </div>
            <input
              type="range"
              min="500"
              max="5000"
              step="50"
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="w-full accent-orange-600 cursor-pointer h-2 bg-neutral-100 rounded-lg appearance-none"
            />
            <div className="flex justify-between text-[10px] text-neutral-400 font-mono mt-1">
              <span>500 Sq.Ft</span>
              <span>1,500 Sq.Ft</span>
              <span>3,000 Sq.Ft</span>
              <span>5,000 Sq.Ft</span>
            </div>
          </div>

          {/* Step 3: Location */}
          <div>
            <label className="block text-xs font-semibold tracking-wider text-neutral-500 uppercase mb-2">
              3. Select Construction Location
            </label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
            >
              <option value="OMR, Chennai">OMR (Thoraipakkam / Sholinganallur), Chennai</option>
              <option value="ECR, Chennai">ECR (Injambakkam / Neelankarai), Chennai</option>
              <option value="Adyar, Chennai">Adyar / Besant Nagar, Chennai</option>
              <option value="Guduvanchery, Chennai">Guduvanchery / Vandalur, Chennai</option>
              <option value="Tambaram, Chennai">Tambaram / Chromepet, Chennai</option>
              <option value="Velachery, Chennai">Velachery / Madipakkam, Chennai</option>
              <option value="Anna Nagar, Chennai">Anna Nagar / Kilpauk, Chennai</option>
            </select>
          </div>

          {/* Core Package Details checklist */}
          <div className="rounded-xl bg-neutral-50 p-4 border border-neutral-100">
            <h4 className="font-display text-xs font-bold text-neutral-700 tracking-wider uppercase mb-2.5">
              Included Specifications
            </h4>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 text-xs">
              {plan.specifications.slice(0, 6).map((spec) => (
                <li key={spec} className="flex items-start text-neutral-600">
                  <Check className="h-4 w-4 text-orange-500 shrink-0 mr-1.5 mt-0.5" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Dynamic Cost Breakdown & Enquiry */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="rounded-xl bg-neutral-900 p-5 text-white shadow-md">
            <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
              ESTIMATED PROJECT COST
            </span>
            <div className="mt-1 font-display text-3xl font-extrabold text-orange-400">
              {formatCurrency(totalCost)}
            </div>
            <div className="mt-1.5 text-xs text-neutral-400 flex items-center">
              <Sparkles className="h-3.5 w-3.5 text-orange-400 mr-1 shrink-0" />
              <span>Based on {plan.name} at {plan.price}/Sq.Ft</span>
            </div>

            <div className="mt-6 border-t border-neutral-800 pt-5 space-y-3">
              <div className="flex justify-between text-xs">
                <span className="text-neutral-400">Materials (Steel, Cement, Bricks)</span>
                <span className="font-mono text-neutral-200">{formatCurrency(materialCost)}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-neutral-400">Labor & Structural Masonry</span>
                <span className="font-mono text-neutral-200">{formatCurrency(laborCost)}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-neutral-400">Architectural, Approvals & Engineering</span>
                <span className="font-mono text-neutral-200">{formatCurrency(engineeringCost)}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-neutral-400">Electrical, Fittings & Finishes</span>
                <span className="font-mono text-neutral-200">{formatCurrency(finishesCost)}</span>
              </div>
            </div>

            <div className="mt-4 flex items-center space-x-1.5 rounded-lg bg-neutral-800 p-2.5 text-[10px] text-neutral-300 border border-neutral-700/50">
              <AlertCircle className="h-4 w-4 text-orange-400 shrink-0" />
              <span>Estimates exclude structural earth retention if soil bearing capacity is below 100kN/m².</span>
            </div>
          </div>

          {/* Quick Consultation Form */}
          <div className="mt-6 border-t border-neutral-100 pt-6">
            <h4 className="font-display text-sm font-bold text-neutral-900 mb-3">Lock This Estimate</h4>
            <form onSubmit={handleEstimateSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="rounded-lg border border-neutral-200 bg-white px-3 py-2 text-xs outline-none focus:border-orange-500"
                />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  className="rounded-lg border border-neutral-200 bg-white px-3 py-2 text-xs outline-none focus:border-orange-500"
                />
              </div>
              <div className="flex space-x-2">
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone Number (e.g., +91 99999 99999)"
                  className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-xs outline-none focus:border-orange-500"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-orange-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-orange-700 hover:shadow-md flex items-center space-x-1 shrink-0"
                >
                  <span>Submit</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </form>
            {submitted && (
              <p className="mt-2 text-xs text-orange-600 font-semibold">
                Your cost estimate inquiry has been submitted! An engineer will call you shortly.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
