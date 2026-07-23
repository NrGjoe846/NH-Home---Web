import React, { useState } from "react";
import { Handshake, ShieldCheck, Landmark, ArrowRight, CheckCircle2, TrendingUp, Sparkles, Building2 } from "lucide-react";

interface JointVentureSectionProps {
  onSubmitLead: (leadData: { type: string; name: string; email: string; phone: string; details: any }) => void;
}

export default function JointVentureSection({ onSubmitLead }: JointVentureSectionProps) {
  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [landLocation, setLandLocation] = useState("");
  const [landSize, setLandSize] = useState("");
  const [roadWidth, setRoadWidth] = useState("30 Feet");
  const [existingStructure, setExistingStructure] = useState("Vacant Land");
  const [jvModel, setJvModel] = useState("Constructed Area Sharing (60:40)");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !landLocation || !landSize) return;

    onSubmitLead({
      type: "joint_venture",
      name,
      email,
      phone,
      details: {
        interest: "Joint Venture Land Evaluation",
        location: landLocation,
        landSize: landSize,
        roadWidth: roadWidth,
        existingStructure: existingStructure,
        sharingModelPreferred: jvModel,
        notes: notes || "Landowner is ready for immediate document screening."
      }
    });

    setSubmitted(true);
    setTimeout(() => {
      setName("");
      setEmail("");
      setPhone("");
      setLandLocation("");
      setLandSize("");
      setNotes("");
      setSubmitted(false);
    }, 5000);
  };

  const jvBenefits = [
    { title: "Highest Valuation sharing", desc: "Standard 60:40 or 50:50 sharing based on location metrics, yielding up to 3x higher gains compared to distress land selling.", icon: TrendingUp },
    { title: "Non-Refundable goodwill advance", desc: "We pay a substantial lumpsum goodwill advance upon signing the registered Joint Venture agreement.", icon: Landmark },
    { title: "100% Capital & approval coverage", desc: "We bear the entire cost of architectural layouts, FSI approvals, CMDA/DTCP clearance, soil testing, and construction.", icon: ShieldCheck },
    { title: "Premium construction track record", desc: "Every JV building is engineered with Fe 550 TMT steel, Ramco cement, and elite finishing fits. Your legacy is protected.", icon: Building2 }
  ];

  const steps = [
    { num: "01", title: "Preliminary screening", desc: "You submit your land document copies and Patta. Our legal counselors screen the title flow and encumbrance checks." },
    { num: "02", title: "Commercial feasibility", desc: "Our architects sketch a mock layout matching CMDA rules, calculating the total buildable FSI and proposed landowner share." },
    { num: "03", title: "JV Registration", desc: "We register a clear Joint Venture agreement with custom-payout covenants and penalty clauses for on-time structural delivery." },
    { num: "04", title: "Liaison & Construction", desc: "NH Homes secures DTCP/CMDA planning permits. We clear old structures and construct the high-rise complex." },
    { num: "05", title: "Possession & Monetize", desc: "Keys and individual flat deeds are handed over. We assist in selling your share or managing corporate tenant rentals." }
  ];

  return (
    <div className="space-y-12" id="joint-venture-section-module">
      {/* Intro Banner */}
      <div className="rounded-2xl bg-gradient-to-br from-neutral-600 via-neutral-800 to-neutral-950 p-4 sm:p-6 md:p-10 text-white relative overflow-hidden border border-neutral-600/50 shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 via-transparent to-transparent" />
        <div className="relative max-w-3xl space-y-3">
          <span className="flex items-center space-x-1.5 text-orange-400 font-mono text-[10px] tracking-widest uppercase font-bold">
            <Sparkles className="h-4 w-4" />
            <span>Chennai Landowner Partnership</span>
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">
            Convert Your Empty Land or Old House Into Multi-Million Wealth
          </h2>
          <p className="text-xs md:text-sm text-neutral-400 leading-relaxed">
            Partner with NH Homes to develop luxury flats or smart villas with absolutely zero construction expenditure. Get maximum market share, substantial cash advances, and complete hassle-free legal clearances.
          </p>
        </div>
      </div>

      {/* Benefits grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jvBenefits.map((b) => {
          const Icon = b.icon;
          return (
            <div key={b.title} className="flex gap-4 rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-200 via-orange-50/60 to-white p-4 sm:p-5 shadow-md hover:border-orange-300 transition-all">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                <Icon className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-display text-sm font-bold text-neutral-900">{b.title}</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">{b.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main JV Flow and Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Interactive Form */}
        <div className="lg:col-span-5 rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-200 via-orange-50/60 to-white p-4 sm:p-6 shadow-md">
          <div className="flex items-center space-x-2.5 mb-4">
            <Handshake className="h-5 w-5 text-orange-600 shrink-0" />
            <h3 className="font-display text-base font-bold text-neutral-900">Land Valuation Form</h3>
          </div>
          <p className="text-xs text-neutral-500 mb-5">
            Submit your plot specifications below for a confidential FSI evaluation and commercial blueprint feasibility report.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Owner contact */}
            <div className="space-y-3">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Land Owner Name"
                className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-xs outline-none focus:border-orange-500"
              />
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Owner Email"
                  className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-xs outline-none focus:border-orange-500"
                />
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Owner Phone"
                  className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-xs outline-none focus:border-orange-500"
                />
              </div>
            </div>

            {/* Land Specs */}
            <div className="space-y-3 border-t border-neutral-100 pt-3">
              <span className="block text-[10px] font-mono tracking-wider uppercase text-neutral-400">Plot Specifications</span>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  required
                  value={landLocation}
                  onChange={(e) => setLandLocation(e.target.value)}
                  placeholder="Plot Location (e.g. Adyar)"
                  className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-xs outline-none focus:border-orange-500"
                />
                <input
                  type="text"
                  required
                  value={landSize}
                  onChange={(e) => setLandSize(e.target.value)}
                  placeholder="Land Size (e.g. 1.5 Ground)"
                  className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-xs outline-none focus:border-orange-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <label className="block text-[10px] text-neutral-500 mb-1">Road Width (controls FSI)</label>
                  <select
                    value={roadWidth}
                    onChange={(e) => setRoadWidth(e.target.value)}
                    className="w-full rounded-lg border border-neutral-200 bg-white px-2 py-1.5 outline-none focus:border-orange-500"
                  >
                    <option value="Below 30 Feet">Below 30 Feet</option>
                    <option value="30 Feet">30 Feet</option>
                    <option value="40 Feet">40 Feet</option>
                    <option value="50 Feet +">50 Feet +</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] text-neutral-500 mb-1">Current Structure</label>
                  <select
                    value={existingStructure}
                    onChange={(e) => setExistingStructure(e.target.value)}
                    className="w-full rounded-lg border border-neutral-200 bg-white px-2 py-1.5 outline-none focus:border-orange-500"
                  >
                    <option value="Vacant Land">Vacant Land</option>
                    <option value="Old Independent House">Old Independent House</option>
                    <option value="Commercial Shed">Commercial Shed</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] text-neutral-500 mb-1">Preferred JV Payout</label>
                <select
                  value={jvModel}
                  onChange={(e) => setJvModel(e.target.value)}
                  className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-xs outline-none focus:border-orange-500"
                >
                  <option value="Constructed Area Sharing (60:40)">Constructed Area Sharing (60:40 standard)</option>
                  <option value="Revenue Cash sharing (50:50 on sales)">Revenue Cash sharing (50:50 on sales)</option>
                  <option value="Partial Area + Partial Cash Payout">Partial Area + Partial Cash Payout</option>
                </select>
              </div>

              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Mention key details (e.g. clear patta title, corner plot, single owner, immediate evaluation needed)"
                rows={2}
                className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-xs outline-none focus:border-orange-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold text-xs py-2.5 rounded-lg transition-all flex items-center justify-center space-x-1.5 shadow-md"
            >
              <span>Submit Land for Evaluation</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          {submitted && (
            <div className="mt-3 flex items-center space-x-1.5 rounded-lg bg-orange-50 p-2.5 border border-orange-200 text-[10px] text-orange-700 font-semibold animate-pulse">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-orange-600" />
              <span>JV proposal received! Our legal department will fetch public EC records and call you.</span>
            </div>
          )}
        </div>

        {/* Right: Step-by-Step Joint Venture Roadmap */}
        <div className="lg:col-span-7 bg-gradient-to-br from-neutral-600 via-neutral-800 to-neutral-950 rounded-2xl p-6 text-white border border-neutral-600/50 shadow-xl self-stretch flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-orange-400 uppercase">
              NH PROCESS ROADMAP
            </span>
            <h3 className="font-display text-base font-bold tracking-tight text-white mt-1 mb-4">
              Our 5-Step Transparent Partnership Journey
            </h3>
            
            <div className="space-y-5">
              {steps.map((st) => (
                <div key={st.num} className="flex gap-4">
                  <div className="font-display text-xl font-extrabold text-orange-500 shrink-0">
                    {st.num}
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold text-neutral-100">{st.title}</h4>
                    <p className="text-[11px] text-neutral-400 leading-relaxed">{st.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-neutral-800 text-[10px] text-neutral-500 italic">
            * Standard agreements are legally vetted by senior counsels at the Madras High Court. Over 15 land-owning families have completed JVs with NH Homes safely.
          </div>
        </div>
      </div>
    </div>
  );
}
