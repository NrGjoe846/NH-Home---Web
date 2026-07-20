import { useState, useEffect } from "react";
import { LayoutDashboard, Users, Calendar, Handshake, Briefcase, RefreshCw, CheckCircle, FileText, ChevronRight, Check, X, AlertCircle, TrendingUp, Loader2 } from "lucide-react";
import { Lead } from "../types";

export default function AdminDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "enquiry" | "site_visit" | "joint_venture" | "career">("all");
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState("");

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/leads");
      if (res.ok) {
        const data = await res.json();
        setLeads(data.leads || []);
        setErrorMsg("");
      } else {
        setErrorMsg("Failed to retrieve leads from corporate API.");
      }
    } catch (err) {
      setErrorMsg("Network error contacting corporate CRM database.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleUpdateStatus = async (leadId: string, newStatus: string) => {
    setUpdatingId(leadId);
    try {
      const res = await fetch(`/api/admin/leads/${leadId}/status`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (res.ok) {
        // Update local state directly to reflect changes instantly
        setLeads((prev) =>
          prev.map((l) => (l.id === leadId ? { ...l, status: newStatus as any } : l))
        );
      } else {
        alert("Failed to update status on server.");
      }
    } catch (err) {
      alert("Network error updating lead status.");
    } finally {
      setUpdatingId(null);
    }
  };

  // Compute stats
  const totalCount = leads.length;
  const visitCount = leads.filter((l) => l.type === "site_visit").length;
  const jvCount = leads.filter((l) => l.type === "joint_venture").length;
  const careerCount = leads.filter((l) => l.type === "career").length;
  const enquiryCount = leads.filter((l) => l.type === "enquiry").length;

  const pendingCount = leads.filter((l) => l.status === "Pending").length;
  const completedCount = leads.filter((l) => l.status === "Completed").length;

  // Filtered list
  const filteredLeads = filter === "all" ? leads : leads.filter((l) => l.type === filter);

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "Approved":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Contacted":
        return "bg-teal-100 text-teal-800 border-teal-200";
      case "Completed":
        return "bg-green-100 text-green-800 border-green-200";
      case "Rejected":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-neutral-100 text-neutral-800 border-neutral-200";
    }
  };

  const getLeadIcon = (type: string) => {
    switch (type) {
      case "site_visit":
        return <Calendar className="h-4 w-4 text-orange-600" />;
      case "joint_venture":
        return <Handshake className="h-4 w-4 text-orange-600" />;
      case "career":
        return <Briefcase className="h-4 w-4 text-orange-600" />;
      default:
        return <Users className="h-4 w-4 text-orange-600" />;
    }
  };

  const formatLeadType = (type: string) => {
    if (type === "site_visit") return "Site Visit Booking";
    if (type === "joint_venture") return "Joint Venture Proposal";
    if (type === "career") return "Career Application";
    return "General Enquiry";
  };

  return (
    <div className="space-y-8" id="admin-dashboard-container">
      {/* Dashboard Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-orange-600 uppercase">
            NH HOMES INTERNAL SYSTEM
          </span>
          <h2 className="font-display text-2xl font-bold tracking-tight mt-1 flex items-center">
            <LayoutDashboard className="h-6 w-6 text-orange-600 mr-2 shrink-0" />
            <span>Developer CRM & Leads Panel</span>
          </h2>
          <p className="text-xs text-neutral-500 mt-1">
            Real-time promoter dashboard to review client registrations, land proposals, and site-visit logs.
          </p>
        </div>
        <button
          onClick={fetchLeads}
          disabled={loading}
          className="flex items-center space-x-1.5 rounded-lg border border-neutral-300 bg-white px-4 py-2 text-xs font-semibold text-neutral-700 hover:bg-neutral-50 shadow-sm disabled:text-neutral-400"
        >
          <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
          <span>Refresh Leads</span>
        </button>
      </div>

      {errorMsg && (
        <div className="flex items-center space-x-2 rounded-xl bg-red-50 p-4 border border-red-200 text-xs text-red-800">
          <AlertCircle className="h-4 w-4 shrink-0 text-red-600" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Analytics Counter Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-5">
        <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm text-center sm:text-left">
          <span className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase">Total Leads</span>
          <span className="block font-display text-2xl font-extrabold text-neutral-900 mt-1">{totalCount}</span>
        </div>
        <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm text-center sm:text-left">
          <span className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase">Site Visits</span>
          <span className="block font-display text-2xl font-extrabold text-orange-600 mt-1">{visitCount}</span>
        </div>
        <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm text-center sm:text-left">
          <span className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase">Joint Ventures</span>
          <span className="block font-display text-2xl font-extrabold text-neutral-900 mt-1">{jvCount}</span>
        </div>
        <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm text-center sm:text-left">
          <span className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase">Job Applicants</span>
          <span className="block font-display text-2xl font-extrabold text-neutral-900 mt-1">{careerCount}</span>
        </div>
        <div className="hidden md:block rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
          <span className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase">Pending Review</span>
          <span className="block font-display text-2xl font-extrabold text-amber-600 mt-1">{pendingCount}</span>
        </div>
      </div>

      {/* Lead breakdown SVG analytics chart */}
      <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h3 className="font-display text-base font-bold text-neutral-900 mb-4 flex items-center">
          <TrendingUp className="h-5 w-5 text-orange-600 mr-1.5 shrink-0" />
          <span>Leads Distribution Analytics</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* SVG Donut Chart */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative h-44 w-44">
              <svg viewBox="0 0 36 36" className="h-full w-full transform -rotate-90">
                {/* Background circle */}
                <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#f5f5f5" strokeWidth="3" />
                
                {/* Segments: enquiry, site_visit, joint_venture, career */}
                {totalCount > 0 && (
                  <>
                    {/* Enquiry (Blue) */}
                    <circle 
                      cx="18" cy="18" r="15.915" 
                      fill="transparent" stroke="#3b82f6" strokeWidth="3.5" 
                      strokeDasharray={`${(enquiryCount / totalCount) * 100} ${100 - (enquiryCount / totalCount) * 100}`} 
                      strokeDashoffset="0" 
                    />
                    {/* Site Visits (Orange) */}
                    <circle 
                      cx="18" cy="18" r="15.915" 
                      fill="transparent" stroke="#ea580c" strokeWidth="3.5" 
                      strokeDasharray={`${(visitCount / totalCount) * 100} ${100 - (visitCount / totalCount) * 100}`} 
                      strokeDashoffset={`-${(enquiryCount / totalCount) * 100}`} 
                    />
                    {/* Joint Ventures (Purple/Dark) */}
                    <circle 
                      cx="18" cy="18" r="15.915" 
                      fill="transparent" stroke="#171717" strokeWidth="3.5" 
                      strokeDasharray={`${(jvCount / totalCount) * 100} ${100 - (jvCount / totalCount) * 100}`} 
                      strokeDashoffset={`-${((enquiryCount + visitCount) / totalCount) * 100}`} 
                    />
                    {/* Careers (Green) */}
                    <circle 
                      cx="18" cy="18" r="15.915" 
                      fill="transparent" stroke="#10b981" strokeWidth="3.5" 
                      strokeDasharray={`${(careerCount / totalCount) * 100} ${100 - (careerCount / totalCount) * 100}`} 
                      strokeDashoffset={`-${((enquiryCount + visitCount + jvCount) / totalCount) * 100}`} 
                    />
                  </>
                )}
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase">TOTAL</span>
                <span className="font-display text-2xl font-extrabold text-neutral-900">{totalCount}</span>
                <span className="text-[9px] text-neutral-500">Leads Logged</span>
              </div>
            </div>
          </div>

          {/* Chart Legends & details */}
          <div className="md:col-span-7 grid grid-cols-2 gap-4">
            <div className="border-l-4 border-blue-500 pl-3">
              <span className="block text-[10px] font-mono font-bold tracking-wider uppercase text-neutral-400">General Enquiries</span>
              <span className="text-lg font-extrabold text-neutral-900">{enquiryCount}</span>
              <span className="block text-[10px] text-neutral-500">{totalCount > 0 ? Math.round((enquiryCount / totalCount) * 100) : 0}% of portfolio</span>
            </div>
            <div className="border-l-4 border-orange-600 pl-3">
              <span className="block text-[10px] font-mono font-bold tracking-wider uppercase text-neutral-400">Site Visits Booked</span>
              <span className="text-lg font-extrabold text-neutral-900">{visitCount}</span>
              <span className="block text-[10px] text-neutral-500">{totalCount > 0 ? Math.round((visitCount / totalCount) * 100) : 0}% of portfolio</span>
            </div>
            <div className="border-l-4 border-neutral-900 pl-3">
              <span className="block text-[10px] font-mono font-bold tracking-wider uppercase text-neutral-400">Joint Ventures</span>
              <span className="text-lg font-extrabold text-neutral-900">{jvCount}</span>
              <span className="block text-[10px] text-neutral-500">{totalCount > 0 ? Math.round((jvCount / totalCount) * 100) : 0}% of portfolio</span>
            </div>
            <div className="border-l-4 border-emerald-500 pl-3">
              <span className="block text-[10px] font-mono font-bold tracking-wider uppercase text-neutral-400">Careers & Resumes</span>
              <span className="text-lg font-extrabold text-neutral-900">{careerCount}</span>
              <span className="block text-[10px] text-neutral-500">{totalCount > 0 ? Math.round((careerCount / totalCount) * 100) : 0}% of portfolio</span>
            </div>
          </div>
        </div>
      </div>

      {/* Leads Organizer Filter Toolbar */}
      <div className="flex flex-wrap gap-2 border-b border-neutral-200 pb-3">
        {[
          { id: "all", label: "All Submissions" },
          { id: "site_visit", label: "Site Visits" },
          { id: "joint_venture", label: "Joint Ventures" },
          { id: "career", label: "Job Applications" },
          { id: "enquiry", label: "General Enquiries" }
        ].map((btn) => (
          <button
            key={btn.id}
            onClick={() => setFilter(btn.id as any)}
            className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
              filter === btn.id
                ? "bg-orange-600 text-white"
                : "bg-white border border-neutral-200 text-neutral-600 hover:border-neutral-300"
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Leads Grid List */}
      <div className="space-y-4">
        {loading ? (
          <div className="py-12 text-center text-neutral-500">
            <Loader2 className="mx-auto h-8 w-8 animate-spin text-orange-600 mb-2" />
            <p className="text-sm font-medium">Connecting to Corporate CRM database...</p>
          </div>
        ) : filteredLeads.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-neutral-300 bg-white p-12 text-center text-neutral-500">
            <Users className="mx-auto h-8 w-8 text-neutral-300 mb-3" />
            <p className="text-sm font-semibold">No submissions match the selected category.</p>
          </div>
        ) : (
          filteredLeads.map((lead) => (
            <div
              key={lead.id}
              className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-neutral-300"
              id={`admin-lead-${lead.id}`}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-4 border-b border-neutral-100">
                {/* Left: Metadata */}
                <div>
                  <div className="flex items-center space-x-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-md bg-orange-50 text-orange-600 shrink-0">
                      {getLeadIcon(lead.type)}
                    </div>
                    <span className="text-[10px] font-mono tracking-wider font-bold text-neutral-400 uppercase">
                      {lead.id} • {formatLeadType(lead.type)}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-bold text-neutral-900 mt-1">{lead.name}</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-neutral-500 mt-1.5 font-mono">
                    <span>Email: <a href={`mailto:${lead.email}`} className="text-neutral-800 underline hover:text-orange-600">{lead.email}</a></span>
                    <span>Phone: <a href={`tel:${lead.phone}`} className="text-neutral-800 underline hover:text-orange-600">{lead.phone}</a></span>
                    <span>Received: {new Date(lead.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>

                {/* Right: Actions Status tag and status modifier */}
                <div className="flex sm:flex-col items-center sm:items-end gap-2 shrink-0">
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${getStatusStyle(lead.status)}`}>
                    Status: {lead.status}
                  </span>

                  {/* Status buttons dropdown or action bar */}
                  <div className="flex gap-1 mt-1">
                    {["Approved", "Contacted", "Completed", "Rejected"].map((statusOpt) => {
                      if (lead.status === statusOpt) return null;
                      return (
                        <button
                          key={statusOpt}
                          disabled={updatingId === lead.id}
                          onClick={() => handleUpdateStatus(lead.id, statusOpt)}
                          className="px-1.5 py-1 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 rounded text-[9px] font-semibold text-neutral-600 hover:text-neutral-900 transition-colors"
                        >
                          Mark {statusOpt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Dynamic details showcase */}
              <div className="pt-4 text-xs text-neutral-600 leading-relaxed grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <span className="block text-[10px] font-mono tracking-wider uppercase text-neutral-400">Request Particulars</span>
                  {Object.entries(lead.details).map(([key, value]) => {
                    if (key === "notes" || key === "interest") return null;
                    return (
                      <div key={key} className="flex justify-between border-b border-neutral-50 py-1">
                        <span className="capitalize font-medium text-neutral-500">{key.replace(/([A-Z])/g, " $1")}:</span>
                        <span className="font-semibold text-neutral-900 text-right">{value as string}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="space-y-1 bg-neutral-50 p-3 rounded-lg border border-neutral-100/50">
                  <span className="block text-[10px] font-mono tracking-wider uppercase text-neutral-400 mb-1">Customer Remarks / Notes</span>
                  <p className="text-neutral-700 italic">
                    "{lead.details.notes || lead.details.message || "No customized comments left."}"
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
