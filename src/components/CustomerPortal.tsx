import React, { useState } from "react";
import { CheckCircle, Clock, Download, FileText, Landmark, Loader2, Sparkles, AlertCircle, MessageSquare, Send, Plus, Eye } from "lucide-react";

interface CustomerPortalProps {
  onSubmitLead: (leadData: { type: string; name: string; email: string; phone: string; details: any }) => void;
}

export default function CustomerPortal({ onSubmitLead }: CustomerPortalProps) {
  const [clientId, setClientId] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  
  // Ticket Form States
  const [ticketSubject, setTicketSubject] = useState("");
  const [ticketMsg, setTicketMsg] = useState("");
  const [ticketCategory, setTicketCategory] = useState("Civil Alteration");
  const [tickets, setTickets] = useState([
    { id: "T-801", subject: "Modular kitchen color customization", category: "Interiors", status: "Approved", date: "2026-07-10" },
    { id: "T-794", subject: "Additional 15A plug point in master bedroom", category: "Electrical", status: "Resolved", date: "2026-07-05" }
  ]);
  const [ticketSubmitted, setTicketSubmitted] = useState(false);

  // Simulated Invoice payment
  const [payingInvoiceId, setPayingInvoiceId] = useState<string | null>(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Client database
  const clientData = {
    "NH-GR-2026": {
      name: "Anandakrishnan G.",
      project: "NH Grandeur (OMR)",
      unit: "Block B, Flat 4B (3 BHK)",
      stage: "Plastering & Woodwork",
      pct: 75,
      totalCost: 6500000,
      paidAmount: 4875000,
      invoices: [
        { id: "INV-103", stage: "Ground Floor Slab Concreting", amount: 975000, status: "Paid", date: "2026-03-10" },
        { id: "INV-154", stage: "First Floor Slab Concreting", amount: 975000, status: "Paid", date: "2026-05-15" },
        { id: "INV-201", stage: "Brickwork Completion", amount: 975000, status: "Paid", date: "2026-06-28" },
        { id: "INV-225", stage: "Plastering Completion", amount: 975000, status: "Pending", date: "2026-07-22" },
      ],
      progressTimeline: [
        { week: "Week 24 (Current)", title: "Interior Woodwork & Tiles", desc: "Plastering finished. Main teak door installed. Beginning kitchen modular frame.", date: "July 18, 2026", status: "current", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80" },
        { week: "Week 22", title: "Internal Plastering & Wiring", desc: "Wall plastering finished with Ramco Super Fine. Wire pulling with Havells completed.", date: "July 02, 2026", status: "completed", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80" },
        { week: "Week 18", title: "Structural Brickwork Masonry", desc: "All 4.5 inch partition brickworks laid. Lintels poured. Quality check cleared.", date: "June 10, 2026", status: "completed", image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=600&q=80" },
      ]
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanId = clientId.trim().toUpperCase();
    if (clientData[cleanId as keyof typeof clientData]) {
      setIsLoggedIn(true);
      setErrorMsg("");
    } else {
      setErrorMsg("Invalid Client ID. Try entering 'NH-GR-2026' to see the dashboard.");
    }
  };

  const handleCreateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketSubject || !ticketMsg) return;

    const newTicket = {
      id: `T-${Math.floor(Math.random() * 100) + 810}`,
      subject: ticketSubject,
      category: ticketCategory,
      status: "Pending",
      date: new Date().toISOString().split("T")[0]
    };

    setTickets([newTicket, ...tickets]);

    // Push support ticket as a lead to let the builders see in CRM
    onSubmitLead({
      type: "enquiry",
      name: clientData["NH-GR-2026"].name,
      email: "client@nhhomes.in",
      phone: "+91 98765 43210",
      details: {
        interest: "Customer Portal Support Ticket",
        ticketId: newTicket.id,
        category: ticketCategory,
        subject: ticketSubject,
        message: ticketMsg,
        clientUnit: clientData["NH-GR-2026"].unit
      }
    });

    setTicketSubmitted(true);
    setTicketSubject("");
    setTicketMsg("");
    setTimeout(() => setTicketSubmitted(false), 5000);
  };

  const handlePayInvoice = (invId: string) => {
    setPayingInvoiceId(invId);
    setPaymentSuccess(false);

    // Simulate payment loading
    setTimeout(() => {
      setPaymentSuccess(true);
      setTimeout(() => {
        // Toggle invoice paid state in UI
        const clientObj = clientData["NH-GR-2026"];
        const targetInvoice = clientObj.invoices.find(inv => inv.id === invId);
        if (targetInvoice) {
          targetInvoice.status = "Paid";
          clientObj.paidAmount += targetInvoice.amount;
        }
        setPayingInvoiceId(null);
        setPaymentSuccess(false);
      }, 2000);
    }, 2500);
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  if (!isLoggedIn) {
    return (
      <div className="mx-auto max-w-md rounded-2xl border border-neutral-200 bg-white p-6 shadow-xl my-12" id="portal-login-card">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
            <Landmark className="h-6 w-6" />
          </div>
          <h3 className="mt-4 font-display text-xl font-bold text-neutral-900">NH Customer Portal</h3>
          <p className="mt-1 text-xs text-neutral-500">
            Review live construction progress, download agreements, view invoices, and raise structural queries.
          </p>
        </div>

        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold tracking-wider text-neutral-500 uppercase mb-1.5">
              Enter Client Registration ID
            </label>
            <input
              type="text"
              required
              value={clientId}
              onChange={(e) => setClientId(e.target.value)}
              placeholder="e.g., NH-GR-2026"
              className="w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-sm uppercase outline-none focus:border-orange-500 font-mono tracking-widest text-center"
            />
            {errorMsg && (
              <p className="mt-2 text-xs text-red-500 font-medium">{errorMsg}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-neutral-900 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
          >
            Access My Dashboard
          </button>
        </form>

        <div className="mt-6 rounded-lg bg-orange-50/50 p-3.5 border border-orange-100/60 text-xs">
          <span className="font-semibold text-orange-700 block mb-1">Demo Credentials:</span>
          <p className="text-neutral-600">
            Copy and paste <strong className="font-mono text-neutral-900 select-all">NH-GR-2026</strong> above to bypass security and experience our customized client panel instantly!
          </p>
        </div>
      </div>
    );
  }

  const client = clientData["NH-GR-2026"];

  return (
    <div className="space-y-8" id="customer-portal-active-view">
      {/* Client Welcome Banner */}
      <div className="rounded-2xl bg-neutral-900 p-6 text-white md:p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-orange-500/10 blur-xl" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-orange-400 uppercase">
              REGISTERED HOME OWNER
            </span>
            <h2 className="font-display text-2xl font-bold tracking-tight mt-1">Welcome Back, {client.name}</h2>
            <p className="text-xs text-neutral-400 mt-1">
              {client.unit} • {client.project}
            </p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setIsLoggedIn(false)}
              className="rounded-lg bg-white/10 px-4 py-2 text-xs font-medium text-white hover:bg-white/20 transition-all"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left Column: Live Progress Timeline */}
        <div className="lg:col-span-7 space-y-6">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="font-display text-base font-bold text-neutral-900">Live Construction Updates</h3>
                <p className="text-xs text-neutral-500">Current Phase: <strong className="text-orange-600 font-semibold">{client.stage}</strong></p>
              </div>
              <div className="flex items-center space-x-1 font-mono text-sm font-bold text-neutral-900 bg-orange-50 px-3 py-1.5 rounded-lg border border-orange-100">
                <Sparkles className="h-4 w-4 text-orange-500" />
                <span>{client.pct}% Overall</span>
              </div>
            </div>

            {/* Graphic Progress Bar */}
            <div className="mb-8 bg-neutral-100 h-2.5 w-full rounded-full overflow-hidden">
              <div className="bg-orange-600 h-full rounded-full" style={{ width: `${client.pct}%` }} />
            </div>

            {/* Weekly updates vertical timeline */}
            <div className="space-y-6">
              {client.progressTimeline.map((item, index) => (
                <div key={item.week} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
                      index === 0 ? "bg-orange-600 text-white shadow-md" : "bg-neutral-200 text-neutral-600"
                    }`}>
                      {index === 0 ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <CheckCircle className="h-4 w-4" />}
                    </div>
                    {index !== client.progressTimeline.length - 1 && (
                      <div className="w-0.5 bg-neutral-200 grow mt-1.5" />
                    )}
                  </div>
                  <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-100 grow flex flex-col sm:flex-row gap-4 justify-between">
                    <div className="space-y-1.5">
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-neutral-400">{item.week}</span>
                        <span className="text-[10px] bg-white border border-neutral-200 text-neutral-500 px-1.5 py-0.5 rounded-full font-mono">{item.date}</span>
                      </div>
                      <h4 className="font-display text-sm font-bold text-neutral-950">{item.title}</h4>
                      <p className="text-xs text-neutral-600 leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="w-full sm:w-24 h-16 shrink-0 rounded-lg overflow-hidden border border-neutral-200">
                      <img referrerPolicy="no-referrer" src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Agreements & Documents Locker */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h3 className="font-display text-base font-bold text-neutral-900 mb-4">Official Documents Locker</h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="flex items-center justify-between rounded-xl border border-neutral-200 p-4 bg-neutral-50/50 hover:bg-neutral-50 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-neutral-900">Sale & Construction Contract</h4>
                    <span className="text-[10px] text-neutral-400 font-mono">PDF • 4.8 MB • Signed</span>
                  </div>
                </div>
                <button className="rounded-lg p-1.5 text-neutral-500 hover:bg-neutral-200 hover:text-neutral-900" aria-label="Download Contract">
                  <Download className="h-4 w-4" />
                </button>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-neutral-200 p-4 bg-neutral-50/50 hover:bg-neutral-50 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-neutral-900">Approved Flat Blueprint</h4>
                    <span className="text-[10px] text-neutral-400 font-mono">PDF • 12.2 MB • DTCP</span>
                  </div>
                </div>
                <button className="rounded-lg p-1.5 text-neutral-500 hover:bg-neutral-200 hover:text-neutral-900" aria-label="Download Blueprint">
                  <Download className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Financial Milestones & Raise Queries */}
        <div className="lg:col-span-5 space-y-6">
          {/* Financial summary */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h3 className="font-display text-base font-bold text-neutral-900 mb-4">Milestone Payments Summary</h3>
            <div className="grid grid-cols-2 gap-4 pb-4 border-b border-neutral-100 mb-4">
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase">TOTAL VALUATION</span>
                <span className="block font-display text-lg font-extrabold text-neutral-900">{formatCurrency(client.totalCost)}</span>
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase">PAID TO DATE (75%)</span>
                <span className="block font-display text-lg font-extrabold text-orange-600">{formatCurrency(client.paidAmount)}</span>
              </div>
            </div>

            <div className="space-y-3">
              {client.invoices.map((inv) => (
                <div key={inv.id} className="flex items-center justify-between rounded-xl border border-neutral-100 p-3 bg-neutral-50/50">
                  <div className="space-y-0.5">
                    <div className="flex items-center space-x-1.5">
                      <span className="text-[10px] text-neutral-400 font-mono">{inv.id}</span>
                      <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${
                        inv.status === "Paid" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                      }`}>{inv.status}</span>
                    </div>
                    <h4 className="text-xs font-bold text-neutral-800">{inv.stage}</h4>
                    <span className="text-[10px] text-neutral-400">{inv.date}</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-xs font-bold text-neutral-900 font-mono">{formatCurrency(inv.amount)}</span>
                    {inv.status === "Pending" && (
                      <button
                        onClick={() => handlePayInvoice(inv.id)}
                        disabled={payingInvoiceId !== null}
                        className="mt-1.5 bg-orange-600 hover:bg-orange-700 text-white rounded px-2.5 py-1 text-[10px] font-semibold transition-colors disabled:bg-neutral-300 disabled:text-neutral-500"
                      >
                        {payingInvoiceId === inv.id ? (
                          <span className="flex items-center space-x-1">
                            <Loader2 className="h-3 w-3 animate-spin" />
                            <span>Processing...</span>
                          </span>
                        ) : "Pay Now"}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Payment success overlay simulator */}
            {payingInvoiceId !== null && paymentSuccess && (
              <div className="mt-4 flex items-center space-x-2 rounded-xl bg-green-50 p-3 border border-green-200 text-xs text-green-800">
                <CheckCircle className="h-4 w-4 shrink-0 text-green-600" />
                <span>Payment received successfully! Status is updated in real-time. Receipt generated.</span>
              </div>
            )}
          </div>

          {/* Create Custom Alterations Support Ticket */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h3 className="font-display text-base font-bold text-neutral-900 mb-1">Alteration & Support Tickets</h3>
            <p className="text-xs text-neutral-500 mb-4">Request structural modifications or coordinate finishing items with engineers.</p>

            <form onSubmit={handleCreateTicket} className="space-y-3.5 mb-5">
              <div>
                <label className="block text-[10px] font-semibold tracking-wider text-neutral-500 uppercase mb-1">
                  Ticket Category
                </label>
                <div className="grid grid-cols-3 gap-1 text-[10px] font-semibold">
                  {["Civil Alteration", "Electrical", "Interiors"].map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setTicketCategory(cat)}
                      className={`py-1.5 text-center border rounded-md ${
                        ticketCategory === cat ? "border-orange-500 bg-orange-50 text-orange-600" : "border-neutral-200 text-neutral-600 bg-white"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1">
                <input
                  type="text"
                  required
                  value={ticketSubject}
                  onChange={(e) => setTicketSubject(e.target.value)}
                  placeholder="Subject (e.g. Master bath waterproofing inspection)"
                  className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-xs outline-none focus:border-orange-500"
                />
              </div>

              <div className="space-y-1">
                <textarea
                  required
                  value={ticketMsg}
                  onChange={(e) => setTicketMsg(e.target.value)}
                  placeholder="Describe your request in detail for the supervising site engineer..."
                  rows={3}
                  className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-xs outline-none focus:border-orange-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold py-2 rounded-lg transition-colors flex items-center justify-center space-x-1.5"
              >
                <Plus className="h-4 w-4" />
                <span>Submit Alteration Ticket</span>
              </button>
            </form>

            {ticketSubmitted && (
              <div className="flex items-center space-x-2 rounded-lg bg-orange-50 p-2.5 border border-orange-200 text-[10px] text-orange-700 mb-4">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>Ticket successfully logged! Er. Rajesh Anbu is assigned to inspect.</span>
              </div>
            )}

            {/* List of open/closed tickets */}
            <div className="border-t border-neutral-100 pt-4 space-y-2">
              <span className="block text-[10px] font-semibold text-neutral-400 tracking-wider uppercase mb-1">
                Alteration Logs History
              </span>
              {tickets.map((t) => (
                <div key={t.id} className="flex justify-between items-center text-xs p-2.5 bg-neutral-50 rounded-lg">
                  <div>
                    <div className="flex items-center space-x-1.5">
                      <span className="font-mono text-[9px] font-bold text-neutral-400">{t.id}</span>
                      <span className="text-[9px] bg-white text-neutral-500 px-1 py-0.5 border border-neutral-200 rounded">{t.category}</span>
                    </div>
                    <p className="font-semibold text-neutral-800 mt-0.5 truncate max-w-[180px]">{t.subject}</p>
                    <span className="text-[10px] text-neutral-400">{t.date}</span>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    t.status === "Resolved" ? "bg-green-100 text-green-700" : t.status === "Approved" ? "bg-blue-100 text-blue-700" : "bg-orange-100 text-orange-700"
                  }`}>{t.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
