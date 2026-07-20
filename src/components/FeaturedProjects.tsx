import React, { useState } from "react";
import { Search, MapPin, Sparkles, Eye, Download, PhoneCall, ArrowRight, X, Heart, Shield, School, Hospital, Compass, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Project } from "../types";
import { signatureProjects } from "../data/projects";

interface FeaturedProjectsProps {
  onBookSiteVisit: (projectId?: string) => void;
}

export default function FeaturedProjects({ onBookSiteVisit }: FeaturedProjectsProps) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<"All" | "Apartment" | "Villa" | "Residential">("All");
  const [activeStatus, setActiveStatus] = useState<"All" | "Ongoing" | "Upcoming" | "Completed">("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Brochure download simulation
  const [brochureEmail, setBrochureEmail] = useState("");
  const [brochureSent, setBrochureSent] = useState(false);

  // Filters logic
  const filteredProjects = signatureProjects.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || 
                          p.location.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesStatus = activeStatus === "All" || p.status === activeStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleBrochureDownload = (e: React.FormEvent, projName: string) => {
    e.preventDefault();
    if (!brochureEmail) return;

    setBrochureSent(true);
    setTimeout(() => {
      setBrochureSent(false);
      setBrochureEmail("");
      // Trigger a simulated browser file download
      const link = document.createElement("a");
      link.href = "#";
      link.setAttribute("download", `${projName.replace(/\s+/g, "_")}_Brochure.pdf`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 2000);
  };

  return (
    <div className="space-y-8" id="featured-projects-module">
      {/* Filters Toolbar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-neutral-200">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search projects by name or location..."
            className="w-full pl-10 pr-4 py-2 text-sm border border-neutral-200 rounded-xl focus:border-orange-500 outline-none"
          />
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap gap-1.5 text-xs font-semibold">
          {["All", "Apartment", "Villa", "Residential"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as any)}
              className={`px-3 py-1.5 rounded-lg border transition-all ${
                activeCategory === cat
                  ? "bg-neutral-900 border-neutral-900 text-white shadow-sm"
                  : "bg-white border-neutral-200 text-neutral-600 hover:border-neutral-300"
              }`}
            >
              {cat === "All" ? "All Categories" : cat + "s"}
            </button>
          ))}
          <span className="h-6 w-px bg-neutral-200 self-center hidden sm:block mx-1" />
          {["All", "Ongoing", "Upcoming", "Completed"].map((status) => (
            <button
              key={status}
              onClick={() => setActiveStatus(status as any)}
              className={`px-3 py-1.5 rounded-lg border transition-all ${
                activeStatus === status
                  ? "bg-orange-600 border-orange-600 text-white shadow-sm"
                  : "bg-white border-neutral-200 text-neutral-600 hover:border-neutral-300"
              }`}
            >
              {status === "All" ? "All Status" : status}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Display */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filteredProjects.map((p) => (
          <div
            key={p.id}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-300 hover:shadow-xl hover:border-neutral-300"
            id={`project-card-${p.id}`}
          >
            {/* Image Wrap */}
            <div className="relative h-48 overflow-hidden bg-neutral-100 shrink-0">
              <img
                referrerPolicy="no-referrer"
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlays status and approved */}
              <div className="absolute top-3 left-3 flex flex-col gap-1 text-[9px] font-mono font-bold tracking-wider uppercase text-white">
                <span className={`px-2 py-0.5 rounded-full ${
                  p.status === "Ongoing" ? "bg-orange-600" : p.status === "Upcoming" ? "bg-blue-600" : "bg-neutral-900"
                }`}>
                  {p.status}
                </span>
                <span className="bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded-full">
                  {p.approved.split(" ")[0]} Appr.
                </span>
              </div>
            </div>

            {/* Content particulars */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div className="space-y-1">
                <div className="flex items-center space-x-1 text-xs text-neutral-400">
                  <MapPin className="h-3 w-3 shrink-0" />
                  <span className="truncate">{p.location.split(",")[0]}</span>
                </div>
                <h3 className="font-display text-base font-bold text-neutral-900 truncate">{p.name}</h3>
                <span className="block font-mono text-[10px] tracking-widest text-neutral-500 uppercase">
                  {p.category} • {p.area}
                </span>
                <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed pt-1">
                  {p.overview}
                </p>
              </div>

              <div className="mt-4 pt-3.5 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <span className="block text-[9px] font-mono text-neutral-400 tracking-wider uppercase">VALUE PLAN</span>
                  <span className="text-xs font-bold text-neutral-900 font-mono">{p.price.split(" ")[2] || "₹30L+"} Lakhs</span>
                </div>
                <button
                  onClick={() => setSelectedProject(p)}
                  className="rounded-lg bg-neutral-50 p-1.5 text-neutral-700 hover:bg-orange-50 hover:text-orange-600 transition-all border border-neutral-200"
                  aria-label={`View Details of ${p.name}`}
                >
                  <Eye className="h-4.5 w-4.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Immersive Project Drawer Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/60 p-0 sm:p-4 backdrop-blur-sm" id="project-details-modal">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-xl h-full bg-white shadow-2xl overflow-y-auto flex flex-col justify-between sm:rounded-2xl border-l border-neutral-200"
            >
              {/* Top sticky bar */}
              <div className="sticky top-0 z-10 flex items-center justify-between bg-white/95 px-6 py-4 border-b border-neutral-200 backdrop-blur-md">
                <div>
                  <span className="text-[9px] font-mono tracking-widest text-orange-600 uppercase">
                    PROJECT PROFILE
                  </span>
                  <h3 className="font-display text-lg font-bold tracking-tight text-neutral-900">{selectedProject.name}</h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="rounded-full bg-neutral-100 p-1.5 text-neutral-500 hover:bg-neutral-200 hover:text-neutral-900 transition-colors"
                  aria-label="Close details"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Main content body */}
              <div className="px-6 py-6 space-y-6 flex-1">
                {/* Image Gallery Showcase */}
                <div className="grid grid-cols-3 gap-2 shrink-0">
                  <div className="col-span-3 h-48 rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200">
                    <img referrerPolicy="no-referrer" src={selectedProject.image} alt={selectedProject.name} className="w-full h-full object-cover" />
                  </div>
                  {selectedProject.gallery.slice(1, 3).map((img, idx) => (
                    <div key={idx} className="h-20 rounded-lg overflow-hidden border border-neutral-100 bg-neutral-100">
                      <img referrerPolicy="no-referrer" src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="h-20 rounded-lg border-2 border-dashed border-neutral-300 flex items-center justify-center text-center text-neutral-400 font-mono text-[9px] p-1 select-none">
                    360° Virtual Blueprint Available
                  </div>
                </div>

                {/* Badges / metadata */}
                <div className="grid grid-cols-2 gap-3 bg-neutral-50 p-4 rounded-xl border border-neutral-100 text-xs">
                  <div>
                    <span className="text-[10px] text-neutral-400 block font-mono">LOCATION</span>
                    <span className="font-semibold text-neutral-900">{selectedProject.location}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-400 block font-mono">STATUS / CLEARANCES</span>
                    <span className="font-semibold text-neutral-900">{selectedProject.status} • {selectedProject.approved}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-400 block font-mono">UNITS SCALE</span>
                    <span className="font-semibold text-neutral-900">{selectedProject.area}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-400 block font-mono">ESTIMATED PRICE</span>
                    <span className="font-semibold text-orange-600">{selectedProject.price}</span>
                  </div>
                </div>

                {/* Overview content text */}
                <div className="space-y-2">
                  <h4 className="font-display text-sm font-bold text-neutral-950">Architectural Description</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed text-justify">
                    {selectedProject.overview}
                  </p>
                </div>

                {/* Amenities List */}
                <div className="space-y-2.5">
                  <h4 className="font-display text-sm font-bold text-neutral-950">Gated Amenities & Conveniences</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {selectedProject.amenities.map((am) => (
                      <li key={am} className="flex items-start text-neutral-600">
                        <span className="h-1.5 w-1.5 bg-orange-500 rounded-full shrink-0 mr-2 mt-2" />
                        <span>{am}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Nearby essentials */}
                <div className="space-y-3.5 border-t border-neutral-100 pt-5">
                  <h4 className="font-display text-sm font-bold text-neutral-950 flex items-center">
                    <Compass className="h-4 w-4 text-orange-600 mr-1.5" />
                    <span>Locality & Transit Infrastructure</span>
                  </h4>
                  
                  <div className="space-y-2.5 text-xs">
                    <div className="flex items-start gap-2.5">
                      <School className="h-4 w-4 text-neutral-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-neutral-800">Schools & Institutes: </span>
                        <span className="text-neutral-500">{selectedProject.nearby.schools.join(", ")}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Hospital className="h-4 w-4 text-neutral-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-neutral-800">Hospitals & Clinical care: </span>
                        <span className="text-neutral-500">{selectedProject.nearby.hospitals.join(", ")}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dynamic Brochure Download Form */}
                <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 space-y-3">
                  <div className="space-y-0.5">
                    <h5 className="text-xs font-bold text-neutral-900">Download Official Property Brochure</h5>
                    <p className="text-[10px] text-neutral-500">Includes FSI configurations, structural steel grades, and complete pricing indexes.</p>
                  </div>
                  {brochureSent ? (
                    <div className="flex items-center space-x-2 text-xs text-orange-600 font-semibold p-1">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Generating customized PDF... Auto-download will trigger shortly.</span>
                    </div>
                  ) : (
                    <form onSubmit={(e) => handleBrochureDownload(e, selectedProject.name)} className="flex gap-2">
                      <input
                        type="email"
                        required
                        value={brochureEmail}
                        onChange={(e) => setBrochureEmail(e.target.value)}
                        placeholder="Enter your email to download"
                        className="w-full bg-white rounded-lg border border-neutral-200 px-3 py-1.5 text-xs outline-none focus:border-orange-500"
                      />
                      <button
                        type="submit"
                        className="bg-orange-600 hover:bg-orange-700 text-white font-semibold text-xs rounded-lg px-4 py-1.5 transition-colors flex items-center space-x-1 shrink-0"
                      >
                        <Download className="h-3.5 w-3.5" />
                        <span>Download</span>
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Bottom fixed call to actions */}
              <div className="sticky bottom-0 bg-neutral-900 px-6 py-4 flex gap-3 shrink-0 border-t border-neutral-800">
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    onBookSiteVisit(selectedProject.id);
                  }}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm py-3 rounded-xl transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-orange-500/20"
                >
                  <PhoneCall className="h-4 w-4" />
                  <span>Book Private Site Visit</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
