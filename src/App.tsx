import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Home, Building2, Calculator, Handshake, Info, Mail, PhoneCall, 
  Sparkles, ShieldCheck, Award, Users, ChevronDown, Check, Clock, 
  MapPin, CheckCircle, ArrowRight, MessageSquare, Briefcase, FileCode,
  FileCheck, Shield, HelpCircle, Phone, FileText, ChevronLeft, ChevronRight,
  Tractor, Mountain, Layers, Trees, Shovel
} from "lucide-react";

// Modular Sub-components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AIChatbot from "./components/AIChatbot";
import AdminDashboard from "./components/AdminDashboard";
import CustomerPortal from "./components/CustomerPortal";
import CostEstimator from "./components/CostEstimator";
import LoanEMICalculator from "./components/LoanEMICalculator";
import BookSiteVisitModal from "./components/BookSiteVisitModal";
import FeaturedProjects from "./components/FeaturedProjects";
import JointVentureSection from "./components/JointVentureSection";
import BlogsSection from "./components/BlogsSection";

// Data Source
import { signatureProjects, services, teamMembers, testimonials, faqs } from "./data/projects";

// Reusable Earth Mover Services Section
function EarthMoverSection({ onContactClick }: { onContactClick: () => void }) {
  const earthMoverCards = [
    {
      title: "Excavation",
      icon: Shovel,
      badge: "Heavy Crawler",
      description: "Precision basement dig-outs, foundation trenching, and deep structural excavation. Supervised by licensed safety officers using state-of-the-art hydraulic excavators.",
      features: ["Deep structural foundation pits", "Precision trenching for utilities", "Mass earth excavation & removal"]
    },
    {
      title: "Earth Moving",
      icon: Mountain,
      badge: "Bulk Relocation",
      description: "Bulk soil relocation, site grading, backfilling, and sand levelling. We handle high-volume terrain shaping to prepare highly load-bearing sub-bases.",
      features: ["Fine & rough site grading", "Premium sand backfilling", "Volumetric soil relocation"]
    },
    {
      title: "Site Development",
      icon: Layers,
      badge: "Builder Canvas",
      description: "Converting raw, uneven parcels into builder-ready structural canvases. Layout marking, plot demarcation, and heavy-vehicle access road setup.",
      features: ["Temporary site access roads", "FSI marking & planning support", "Precise elevation slope control"]
    },
    {
      title: "Land Clearing",
      icon: Trees,
      badge: "Debris & Stump",
      description: "Thorough removal of thick foliage, stubborn tree stump extraction, heavy rock crushing, and complete debris evacuation prior to slab concrete casting.",
      features: ["Deep root & stump extraction", "Rock breaking & concrete crushing", "Eco-friendly debris clearance"]
    }
  ];

  return (
    <div className="space-y-10 rounded-3xl border border-neutral-200 bg-white p-6 md:p-10 shadow-sm" id="earth-mover-services-block">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2 max-w-2xl">
          <span className="inline-flex items-center space-x-1.5 rounded-full bg-orange-100 text-orange-700 border border-orange-200 px-3 py-1 text-xs font-bold uppercase tracking-wider font-mono">
            <Tractor className="h-3.5 w-3.5" />
            <span>Heavy Equipment Division</span>
          </span>
          <h3 className="font-display text-2xl font-extrabold text-neutral-900 tracking-tight">
            Earth Mover & Site Preparation Services
          </h3>
          <p className="text-xs text-neutral-600 leading-relaxed">
            NH Homes operates a high-capacity captive fleet of heavy earth-moving machinery. We execute safe, rapid, and precise site development, excavation, and clearing to ensure Chennai's buildings rest on engineered, rock-solid sub-structures.
          </p>
        </div>
        <div className="shrink-0 flex gap-2">
          <button 
            onClick={onContactClick}
            className="rounded-xl bg-orange-600 text-white font-semibold text-xs px-5 py-3 hover:bg-orange-700 transition-colors flex items-center space-x-2"
          >
            <span>Enquire Machinery Booking</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {earthMoverCards.map((card) => {
          const IconComponent = card.icon;
          return (
            <div 
              key={card.title}
              className="rounded-2xl border border-neutral-100 bg-neutral-50/50 p-5 space-y-4 hover:border-orange-200 hover:bg-white hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <span className="text-[9px] font-mono font-bold uppercase text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded">
                    {card.badge}
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="font-display text-base font-bold text-neutral-900">{card.title}</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed text-justify min-h-[72px]">
                    {card.description}
                  </p>
                </div>
              </div>

              <div className="space-y-2 border-t border-neutral-100 pt-3 mt-2">
                <span className="block text-[9px] font-mono tracking-wider uppercase text-neutral-400 font-bold">Capabilities</span>
                <ul className="space-y-1.5 text-xs text-neutral-500">
                  {card.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-orange-500 mr-1.5 font-bold">✓</span>
                      <span className="text-[11px] leading-tight text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Leadership Hotline Box */}
      <div className="rounded-2xl bg-orange-50 border border-orange-200/60 p-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3 text-xs">
          <div className="h-9 w-9 rounded-full bg-orange-600/10 flex items-center justify-center text-orange-600 shrink-0">
            <Phone className="h-4.5 w-4.5" />
          </div>
          <div>
            <span className="font-bold text-neutral-900 block leading-tight">Direct Equipment Scheduler Hotlines</span>
            <span className="text-neutral-600 text-[11px]">Talk directly to our directors for fast-track operator deployments and corporate logistics.</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 text-xs font-mono shrink-0">
          <div className="text-center bg-white px-3.5 py-1.5 rounded-lg border border-neutral-200">
            <span className="text-[9px] text-neutral-400 uppercase block tracking-wider font-bold">H Charles (MD)</span>
            <a href="tel:+919551234597" className="text-orange-600 hover:underline font-bold">+91 95512 34597</a>
          </div>
          <div className="text-center bg-white px-3.5 py-1.5 rounded-lg border border-neutral-200">
            <span className="text-[9px] text-neutral-400 uppercase block tracking-wider font-bold">S Prasanna (CEO)</span>
            <a href="tel:+919884770108" className="text-orange-600 hover:underline font-bold">+91 98847 70108</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [activeView, setActiveView] = useState("home");
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [selectedProjectForVisit, setSelectedProjectForVisit] = useState<string | undefined>(undefined);

  // Hero Slides Data & Automatic Loop State
  const heroSlides = [
    {
      badge: "Premium Real Estate Promoter & Builder",
      title: "Building Dreams.",
      highlight: "Creating Landmarks.",
      desc: "Delivering architectural masterpieces, high-yield flat promotions, and profitable joint ventures across Chennai. We promise 100% legal clearance, transparent pricing, and complete structural guarantees.",
      img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=80",
    },
    {
      badge: "CMDA & DTCP Approved Luxury Flats",
      title: "Elevate Your Lifestyle in",
      highlight: "Boutique Smart Homes.",
      desc: "Explore highly-ventilated luxury apartments across prime areas in Chennai. Features Alexa-ready home automation, double-compounded parking, and infinity terrace gardens.",
      img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80",
    },
    {
      badge: "Heavy Machinery & Foundation Engineering",
      title: "Precision Site Preparation &",
      highlight: "Earth Mover Services.",
      desc: "Providing professional excavation, sand leveling, grading, land clearing, and site development. We deploy a premium fleet of heavy machinery to build a rock-solid structural foundation.",
      img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80",
    },
  ];

  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // FAQ Accordion states
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  // Gallery Filter States
  const [galleryFilter, setGalleryFilter] = useState("all");

  // General Contact Form States
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Career Application states
  const [careerName, setCareerName] = useState("");
  const [careerEmail, setCareerEmail] = useState("");
  const [careerPhone, setCareerPhone] = useState("");
  const [careerPosition, setCareerPosition] = useState("Structural Engineer");
  const [careerResumeName, setCareerResumeName] = useState("");
  const [careerNotes, setCareerNotes] = useState("");
  const [careerSubmitted, setCareerSubmitted] = useState(false);

  const handleOpenVisitWithProject = (projectId?: string) => {
    setSelectedProjectForVisit(projectId);
    setIsBookModalOpen(true);
  };

  const handleCloseVisitModal = () => {
    setIsBookModalOpen(false);
    setSelectedProjectForVisit(undefined);
  };

  // Centralized submission logic (Express API pipeline)
  const handleSubmitLead = async (leadData: { type: string; name: string; email: string; phone: string; details: any }) => {
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadData),
      });
      if (res.ok) {
        console.log("Lead captured in corporate dashboard database");
      } else {
        console.warn("Express CRM failed to log lead");
      }
    } catch (err) {
      console.error("Offline fallback: lead will only persist in temporary server memory", err);
    }
  };

  const handleGeneralContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactPhone) return;

    handleSubmitLead({
      type: "enquiry",
      name: contactName,
      email: contactEmail,
      phone: contactPhone,
      details: {
        interest: "General Contact Website Query",
        message: contactMessage || "No query remarks typed."
      }
    });

    setContactSubmitted(true);
    setTimeout(() => {
      setContactName("");
      setContactEmail("");
      setContactPhone("");
      setContactMessage("");
      setContactSubmitted(false);
    }, 4000);
  };

  const handleCareerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!careerName || !careerEmail || !careerPhone) return;

    handleSubmitLead({
      type: "career",
      name: careerName,
      email: careerEmail,
      phone: careerPhone,
      details: {
        position: careerPosition,
        resumeName: careerResumeName || "Online_Resume_Attached.pdf",
        notes: careerNotes || "Eager for structural construction interview."
      }
    });

    setCareerSubmitted(true);
    setTimeout(() => {
      setCareerName("");
      setCareerEmail("");
      setCareerPhone("");
      setCareerResumeName("");
      setCareerNotes("");
      setCareerSubmitted(false);
    }, 4000);
  };

  // Gallery Photos static DB
  const galleryPhotos = [
    { type: "completed", url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80", title: "Luxury Beach Villa, ECR" },
    { type: "progress", url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80", title: "Slab Concreting, NH Grandeur" },
    { type: "interiors", url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80", title: "Modular Kitchen Fitment" },
    { type: "completed", url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80", title: "Premium Residential block, Adyar" },
    { type: "progress", url: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=600&q=80", title: "Brick Masonry, NH Elite" },
    { type: "interiors", url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80", title: "Modern Bedroom False Ceiling" },
  ];

  const filteredGallery = galleryFilter === "all" ? galleryPhotos : galleryPhotos.filter(p => p.type === galleryFilter);

  return (
    <div className="flex min-h-screen flex-col bg-neutral-50" id="main-application-root">
      {/* Premium Header */}
      <Navbar 
        activeView={activeView} 
        setActiveView={setActiveView} 
        onBookSiteVisit={() => handleOpenVisitWithProject()} 
      />

      {/* Main Section Content Router */}
      <main className="flex-1 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeView}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              
              {/* ================= HOME VIEW ================= */}
              {activeView === "home" && (
                <div className="space-y-16" id="home-view-container">
                  {/* Hero banner section */}
                  <div className="relative rounded-3xl overflow-hidden bg-neutral-950 text-white min-h-[500px] flex items-center p-6 md:p-12 border border-neutral-800 shadow-2xl group">
                    
                    {/* Background Images with Cross-Fade & Ken Burns Zoom Effect */}
                    <div className="absolute inset-0">
                      <AnimatePresence mode="popLayout">
                        <motion.div
                          key={currentHeroSlide}
                          initial={{ opacity: 0, scale: 1.15 }}
                          animate={{ opacity: 0.45, scale: 1.02 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 1.2, ease: "easeInOut" }}
                          className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
                          style={{ backgroundImage: `url(${heroSlides[currentHeroSlide].img})` }}
                        />
                      </AnimatePresence>
                    </div>

                    {/* Dark gradient mask */}
                    <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-900/80 to-transparent" />
                    
                    {/* Floating Left & Right manual controls (visible on hover) */}
                    <button
                      onClick={() => setCurrentHeroSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
                      className="absolute left-4 z-20 rounded-full bg-neutral-900/50 p-2 text-white/70 hover:text-white hover:bg-orange-600 border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-auto cursor-pointer"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length)}
                      className="absolute right-4 z-20 rounded-full bg-neutral-900/50 p-2 text-white/70 hover:text-white hover:bg-orange-600 border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-auto cursor-pointer"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>

                    {/* Slide Content with Staggered Staged Entry */}
                    <div className="relative max-w-2xl space-y-6 z-10">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentHeroSlide}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { 
                              opacity: 1, 
                              y: 0,
                              transition: {
                                staggerChildren: 0.15,
                                delayChildren: 0.1
                              }
                            },
                            exit: { opacity: 0, y: -15, transition: { duration: 0.2 } }
                          }}
                          className="space-y-6"
                        >
                          <motion.span 
                            variants={{
                              hidden: { opacity: 0, x: -15 },
                              visible: { opacity: 1, x: 0 }
                            }}
                            className="inline-flex items-center space-x-1 rounded-full bg-orange-500/15 border border-orange-500/30 px-3 py-1 text-xs font-bold text-orange-400"
                          >
                            <Sparkles className="h-3.5 w-3.5 text-orange-500 animate-pulse" />
                            <span>{heroSlides[currentHeroSlide].badge}</span>
                          </motion.span>
                          
                          <motion.h1 
                            variants={{
                              hidden: { opacity: 0, y: 15 },
                              visible: { opacity: 1, y: 0 }
                            }}
                            className="font-display text-4xl md:text-5xl font-extrabold tracking-tight leading-tight"
                          >
                            {heroSlides[currentHeroSlide].title} <br />
                            <span className="text-orange-500">{heroSlides[currentHeroSlide].highlight}</span>
                          </motion.h1>
                          
                          <motion.p 
                            variants={{
                              hidden: { opacity: 0, y: 15 },
                              visible: { opacity: 1, y: 0 }
                            }}
                            className="text-sm md:text-base text-neutral-300 leading-relaxed font-sans"
                          >
                            {heroSlides[currentHeroSlide].desc}
                          </motion.p>
                          
                          <motion.div 
                            variants={{
                              hidden: { opacity: 0, y: 15 },
                              visible: { opacity: 1, y: 0 }
                            }}
                            className="flex flex-wrap gap-3.5 pt-2"
                          >
                            {currentHeroSlide === 2 ? (
                              <button 
                                onClick={() => setActiveView("services")}
                                className="rounded-xl bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-500/20 active:scale-95"
                              >
                                Explore Heavy Services
                              </button>
                            ) : (
                              <button 
                                onClick={() => setActiveView("projects")}
                                className="rounded-xl bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-500/20 active:scale-95"
                              >
                                Explore Projects
                              </button>
                            )}
                            <button 
                              onClick={() => handleOpenVisitWithProject()}
                              className="rounded-xl border border-neutral-300 bg-white/10 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/20 active:scale-95"
                            >
                              Book Site Visit
                            </button>
                          </motion.div>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Progress indicators and slider dots */}
                    <div className="absolute bottom-4 left-6 md:left-12 flex items-center space-x-3 z-10">
                      {heroSlides.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentHeroSlide(idx)}
                          className={`h-2.5 rounded-full transition-all duration-300 ${
                            currentHeroSlide === idx ? "bg-orange-500 w-8" : "bg-white/35 hover:bg-white/60 w-2.5"
                          }`}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>

                    {/* Slide automatic timer indicator */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-neutral-900/40 z-10">
                      <motion.div 
                        key={currentHeroSlide}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 6, ease: "linear" }}
                        className="h-full bg-orange-500"
                      />
                    </div>
                  </div>

                  {/* Corporate counters */}
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-6" id="home-counters">
                    {[
                      { val: "10+ Years", label: "Civic Experience" },
                      { val: "150+", label: "Happy Families" },
                      { val: "50+ Sites", label: "Completed Projects" },
                      { val: "100%", label: "Legal Documentations" },
                      { val: "25+", label: "Architects & Engineers" },
                      { val: "500K+", label: "Sq.ft Developed" }
                    ].map((st) => (
                      <div key={st.label} className="rounded-2xl border border-neutral-200 bg-white p-4 text-center shadow-sm">
                        <span className="block font-display text-lg md:text-xl font-extrabold text-orange-600">{st.val}</span>
                        <span className="block text-[10px] font-mono tracking-wider text-neutral-400 uppercase mt-1">{st.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Why Choose Section */}
                  <div className="space-y-6">
                    <div className="text-center space-y-1 max-w-xl mx-auto">
                      <span className="text-xs font-mono font-bold tracking-widest text-orange-600 uppercase">THE NH PROMISE</span>
                      <h2 className="font-display text-2xl font-bold text-neutral-900">Why NH Homes is Chennai's Trusted Promoter</h2>
                      <p className="text-xs text-neutral-500">We construct buildings designed to withstand generations with an uncompromising approach to quality.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                      {[
                        { title: "Transparent Pricing", desc: "Detailed, itemized billing of specifications before contracting. Absolutely zero hidden charges or unnotified escalation expenses.", icon: ShieldCheck },
                        { title: "Highest Engineering Standards", desc: "Supervised daily by certified civil engineers using structural steel, branded OPC/PPC cement, and salt-free water curing checks.", icon: Award },
                        { title: "On-Time Structural Delivery", desc: "Every project contract specifies structural milestones and holds an official penalty clause ensuring timely handover.", icon: Clock }
                      ].map((item) => {
                        const Icon = item.icon;
                        return (
                          <div key={item.title} className="rounded-2xl border border-neutral-200 bg-white p-5 space-y-3 shadow-sm hover:border-neutral-300 transition-all">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                              <Icon className="h-5 w-5" />
                            </div>
                            <h3 className="font-display text-base font-bold text-neutral-900">{item.title}</h3>
                            <p className="text-xs text-neutral-600 leading-relaxed">{item.desc}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Quick Project showcase section preview */}
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3">
                      <div>
                        <span className="text-xs font-mono font-bold tracking-widest text-orange-600 uppercase">SIGNATURE BLUEPRINTS</span>
                        <h2 className="font-display text-2xl font-bold text-neutral-900">Our Signature Architectural Works</h2>
                      </div>
                      <button 
                        onClick={() => setActiveView("projects")}
                        className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center space-x-1"
                      >
                        <span>View All Listings</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>

                    <FeaturedProjects onBookSiteVisit={handleOpenVisitWithProject} />
                  </div>

                  {/* Core Process diagram */}
                  <div className="space-y-6 rounded-2xl bg-neutral-900 p-6 md:p-10 text-white border border-neutral-800 relative overflow-hidden">
                    <div className="text-center space-y-1 max-w-lg mx-auto mb-10">
                      <span className="text-xs font-mono tracking-widest text-orange-400 uppercase">OUR TRANSPARENT BLUEPRINT</span>
                      <h3 className="font-display text-xl font-bold text-white">How NH Homes Delivers Your Key</h3>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:grid-cols-6 text-center text-xs relative">
                      {[
                        { num: "01", name: "Consultation", sub: "Blueprint requirements" },
                        { num: "02", name: "Site Inspection", sub: "Soil & Water check" },
                        { num: "03", name: "FSI Planning", sub: "3D architectural draft" },
                        { num: "04", name: "Liaison Approvals", sub: "CMDA / DTCP permit" },
                        { num: "05", name: "Engineering build", sub: "RCC robust foundation" },
                        { num: "06", name: "Delivery Handover", sub: "Key transfer & support" }
                      ].map((p, idx) => (
                        <div key={p.name} className="space-y-2.5 relative">
                          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-orange-600/20 text-orange-500 border border-orange-500/30 font-display font-extrabold text-sm">
                            {p.num}
                          </div>
                          <div>
                            <h4 className="font-bold text-white">{p.name}</h4>
                            <p className="text-[10px] text-neutral-400 mt-0.5 leading-tight">{p.sub}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Banks Partners Section */}
                  <div className="space-y-4 text-center">
                    <span className="block text-xs font-mono tracking-wider text-neutral-400 uppercase">Home Loan Pre-Approved Partners</span>
                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 opacity-70">
                      {["State Bank of India", "HDFC Bank", "LIC Housing Finance", "ICICI Bank", "Axis Bank"].map((b) => (
                        <span key={b} className="font-display font-black text-sm tracking-tight text-neutral-500 hover:text-neutral-900 transition-colors uppercase select-none">
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Earth Mover Services dedicated block */}
                  <div className="pt-4">
                    <EarthMoverSection onContactClick={() => setActiveView("contact")} />
                  </div>

                  {/* Quick CTAs footer banner */}
                  <div className="rounded-3xl bg-orange-600 p-8 text-white text-center space-y-4 shadow-xl shadow-orange-500/10">
                    <h3 className="font-display text-xl md:text-2xl font-bold">Ready to Build Your Architectural Milestone?</h3>
                    <p className="text-xs text-orange-100 max-w-lg mx-auto leading-relaxed">
                      Connect with H Charles Immanuvel and S Prasanna's executive design committee. Schedule a free legal screening of your land documents, discuss earth mover excavation packages, or book a site visit today.
                    </p>
                    <div className="flex justify-center gap-3 pt-2">
                      <button 
                        onClick={() => handleOpenVisitWithProject()}
                        className="rounded-xl bg-neutral-900 text-white font-semibold text-xs px-6 py-3 hover:bg-neutral-800 transition-colors"
                      >
                        Book Consultation
                      </button>
                      <a 
                        href="https://wa.me/919884770108" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="rounded-xl bg-white text-orange-600 border border-white font-semibold text-xs px-6 py-3 hover:bg-orange-50 transition-colors"
                      >
                        WhatsApp Instant Chat
                      </a>
                    </div>
                  </div>
                </div>
              )}


              {/* ================= PROJECTS VIEW ================= */}
              {activeView === "projects" && (
                <div className="space-y-8" id="projects-view-container">
                  <div className="space-y-1.5">
                    <span className="text-xs font-mono font-bold tracking-widest text-orange-600 uppercase">PORTFOLIO</span>
                    <h2 className="font-display text-2xl font-bold text-neutral-900">NH Homes Signature Developments</h2>
                    <p className="text-xs text-neutral-500">Explore premium residential high-rises, boutique apartments, and smart luxury beachside villas across Chennai.</p>
                  </div>
                  <FeaturedProjects onBookSiteVisit={handleOpenVisitWithProject} />
                </div>
              )}


              {/* ================= SERVICES VIEW ================= */}
              {activeView === "services" && (
                <div className="space-y-12" id="services-view-container">
                  <div className="space-y-1.5">
                    <span className="text-xs font-mono font-bold tracking-widest text-orange-600 uppercase">SERVICES</span>
                    <h2 className="font-display text-2xl font-bold text-neutral-900">Our Comprehensive Real Estate Services</h2>
                    <p className="text-xs text-neutral-500">From conceptual drafting to DTCP permits liaisoning and turnkey construction, we manage your landmark's life-cycle entirely.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                    {services.map((srv) => (
                      <div 
                        key={srv.id} 
                        className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm space-y-4 hover:shadow-md transition-all flex flex-col justify-between"
                        id={`service-detail-${srv.id}`}
                      >
                        <div className="space-y-3">
                          <span className="inline-block font-mono text-[10px] tracking-wider bg-orange-100 text-orange-700 px-2.5 py-0.5 rounded-full font-bold">
                            {srv.title}
                          </span>
                          <p className="text-xs text-neutral-600 leading-relaxed font-semibold">
                            {srv.description}
                          </p>
                          <p className="text-xs text-neutral-500 leading-relaxed text-justify">
                            {srv.details}
                          </p>
                        </div>

                        <div className="space-y-2 border-t border-neutral-100 pt-4">
                          <span className="block text-[10px] font-mono tracking-wider uppercase text-neutral-400">Core Highlights</span>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-600">
                            {srv.features.map(f => (
                              <li key={f} className="flex items-start">
                                <span className="text-orange-500 mr-1.5 shrink-0">✔</span>
                                <span>{f}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Dedicated Earth Mover Services Section */}
                  <div className="pt-8">
                    <EarthMoverSection onContactClick={() => setActiveView("contact")} />
                  </div>
                </div>
              )}


              {/* ================= CONSTRUCTION & ESTIMATORS ================= */}
              {activeView === "construction" && (
                <div className="space-y-12" id="construction-view-container">
                  <div className="space-y-1.5">
                    <span className="text-xs font-mono font-bold tracking-widest text-orange-600 uppercase">ESTIMATORS & ESTIMATES</span>
                    <h2 className="font-display text-2xl font-bold text-neutral-900">Custom Home Construction Packages & Cost Estimators</h2>
                    <p className="text-xs text-neutral-500">Review detailed material spec indexes and estimate building costs based on square footage.</p>
                  </div>

                  {/* Cost Estimator component */}
                  <CostEstimator onSubmitLead={handleSubmitLead} />

                  {/* Loan EMI Calculator component */}
                  <LoanEMICalculator />
                </div>
              )}


              {/* ================= JOINT VENTURE VIEW ================= */}
              {activeView === "joint-venture" && (
                <div id="joint-venture-view-container">
                  <JointVentureSection onSubmitLead={handleSubmitLead} />
                </div>
              )}


              {/* ================= ABOUT US VIEW ================= */}
              {activeView === "about" && (
                <div className="space-y-16" id="about-view-container">
                  {/* Company Story */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                      <span className="text-xs font-mono font-bold tracking-widest text-orange-600 uppercase">ABOUT US</span>
                      <h2 className="font-display text-2xl md:text-3xl font-extrabold text-neutral-900">Empowering Chennai with Structural Landmarks Since 2016</h2>
                      <p className="text-xs text-neutral-600 leading-relaxed text-justify">
                        NH Homes was founded by Er. Nehemiah Nesanathan with the singular mission of bringing accountability, legal transparency, and world-class engineering quality to the home promoters sector in Tamil Nadu. We believe that a home is a lifetime investment, and families deserve builder relationships based on clean titles and honest pricing.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 pt-2">
                        <div className="border-l-4 border-orange-600 pl-3">
                          <span className="font-display text-base font-bold text-neutral-900 block">Our Mission</span>
                          <span className="text-xs text-neutral-500 block leading-relaxed mt-0.5">To deliver zero-defect high-rise structures on-time with clean CMDA/DTCP clearances.</span>
                        </div>
                        <div className="border-l-4 border-neutral-900 pl-3">
                          <span className="font-display text-base font-bold text-neutral-900 block">Our Vision</span>
                          <span className="text-xs text-neutral-500 block leading-relaxed mt-0.5">To establish Chennai's most trusted customer self-service home promotions framework.</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="h-64 rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200">
                      <img referrerPolicy="no-referrer" src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80" alt="Corporate team meeting" className="w-full h-full object-cover" />
                    </div>
                  </div>

                  {/* Chairman Message */}
                  <div className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    <div className="md:col-span-4 flex flex-col items-center text-center">
                      <div className="h-32 w-32 rounded-full overflow-hidden border-2 border-orange-500 bg-neutral-50">
                        <img referrerPolicy="no-referrer" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" alt="Er. Nehemiah Nesanathan" className="w-full h-full object-cover" />
                      </div>
                      <h4 className="font-display text-base font-bold text-neutral-900 mt-3">Er. Nehemiah Nesanathan</h4>
                      <span className="text-[10px] font-mono text-orange-600 font-bold uppercase tracking-wider">Founder & Executive Chairman</span>
                    </div>

                    <div className="md:col-span-8 space-y-3">
                      <h3 className="font-display text-base font-bold text-neutral-950">A Message From Our Founder</h3>
                      <p className="text-xs text-neutral-600 leading-relaxed text-justify">
                        "At NH Homes, we don't just compile concrete and steel. We build relationships of absolute trust. Every family that purchases our flat or entrusts us with their joint venture is placing their hard-earned future into our hands. That is why our core committee holds a non-negotiable directive: 100% legal document inspection, superior quality materials, and weekly construction updates accessible directly on our client portal."
                      </p>
                    </div>
                  </div>

                  {/* Certifications and Licensing */}
                  <div className="space-y-6">
                    <div className="text-center max-w-md mx-auto space-y-1">
                      <span className="text-xs font-mono font-bold tracking-widest text-orange-600 uppercase">COMPLIANCE CERTIFICATES</span>
                      <h3 className="font-display text-xl font-bold text-neutral-900">Licensed Governmental Promoters</h3>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
                      {[
                        { title: "CMDA & DTCP Approved", desc: "Complying strictly with FSI guidelines, setback rules, and OSR mandates." },
                        { title: "RERA Tamil Nadu", desc: "All projects officially registered under TNRERA protecting home buyers." },
                        { title: "ISO 9001:2015 Cert.", desc: "Quality Management System standards certified for construction execution." },
                        { title: "Licensed Civil Counsel", desc: "Direct legal clearance panel for document validation." }
                      ].map(c => (
                        <div key={c.title} className="rounded-xl border border-neutral-100 bg-neutral-50 p-4 text-center">
                          <span className="font-display text-sm font-bold text-neutral-900 block">{c.title}</span>
                          <span className="text-[11px] text-neutral-500 block leading-relaxed mt-1">{c.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Team Members Section */}
                  <div className="space-y-6">
                    <div className="text-center max-w-md mx-auto space-y-1">
                      <span className="text-xs font-mono font-bold tracking-widest text-orange-600 uppercase">ENGINEERING COMMITTEE</span>
                      <h3 className="font-display text-xl font-bold text-neutral-900">Meet Our Expert Builders</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                      {teamMembers.map(t => (
                        <div key={t.name} className="rounded-2xl border border-neutral-200 bg-white p-5 text-center shadow-sm hover:shadow-md transition-all">
                          <div className="mx-auto h-24 w-24 rounded-full overflow-hidden bg-neutral-50 border-2 border-neutral-200 mb-4">
                            <img referrerPolicy="no-referrer" src={t.image} alt={t.name} className="w-full h-full object-cover" />
                          </div>
                          <h4 className="font-display text-base font-bold text-neutral-900">{t.name}</h4>
                          <span className="text-[10px] font-mono text-orange-600 uppercase font-bold tracking-wider">{t.role}</span>
                          <p className="text-xs text-neutral-600 leading-relaxed mt-2 text-justify">
                            {t.bio}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}


              {/* ================= CONTACT US VIEW ================= */}
              {activeView === "contact" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="contact-view-container">
                  {/* Left: Contact Form */}
                  <div className="lg:col-span-7 rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm space-y-4">
                    <div className="space-y-1">
                      <span className="text-xs font-mono font-bold tracking-widest text-orange-600 uppercase">CONTACT US</span>
                      <h2 className="font-display text-2xl font-bold text-neutral-900">Connect With NH Homes Leadership</h2>
                      <p className="text-xs text-neutral-500">Have queries about apartment promotions, building specifications, earth mover excavation services, or joint ventures? Get in touch today.</p>
                    </div>

                    <form onSubmit={handleGeneralContactSubmit} className="space-y-4 pt-2">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-1">
                          <label className="text-[10px] font-mono font-bold tracking-wider uppercase text-neutral-400">Your Name</label>
                          <input
                            type="text"
                            required
                            value={contactName}
                            onChange={(e) => setContactName(e.target.value)}
                            placeholder="Anandakrishnan G."
                            className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-xs outline-none focus:border-orange-500"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] font-mono font-bold tracking-wider uppercase text-neutral-400">Your Email</label>
                          <input
                            type="email"
                            required
                            value={contactEmail}
                            onChange={(e) => setContactEmail(e.target.value)}
                            placeholder="client@nhhomes.in"
                            className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-xs outline-none focus:border-orange-500"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-mono font-bold tracking-wider uppercase text-neutral-400">Phone Number (e.g., +91 95512 34597)</label>
                        <input
                          type="tel"
                          required
                          value={contactPhone}
                          onChange={(e) => setContactPhone(e.target.value)}
                          placeholder="+91 95512 34597"
                          className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-xs outline-none focus:border-orange-500"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-mono font-bold tracking-wider uppercase text-neutral-400">Your Query Remarks</label>
                        <textarea
                          required
                          value={contactMessage}
                          onChange={(e) => setContactMessage(e.target.value)}
                          placeholder="Tell us about your property location, budget, site clearing / earth mover requirements, or specifications required..."
                          rows={4}
                          className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-xs outline-none focus:border-orange-500 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold text-xs py-3 rounded-lg transition-colors flex items-center justify-center space-x-1.5 shadow-md hover:shadow-lg hover:shadow-orange-500/20"
                      >
                        <Mail className="h-4.5 w-4.5" />
                        <span>Send Corporate Query</span>
                      </button>
                    </form>

                    {contactSubmitted && (
                      <div className="flex items-center space-x-1.5 rounded-lg bg-orange-50 p-3 border border-orange-200 text-xs text-orange-700 font-semibold animate-pulse">
                        <CheckCircle className="h-5 w-5 shrink-0 text-orange-600" />
                        <span>Query dispatched! Our executive committee will contact you in 24 hours.</span>
                      </div>
                    )}
                  </div>

                  {/* Right: Office Coordinates & Maps */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm space-y-5">
                      <h3 className="font-display text-base font-bold text-neutral-900">Corporate Office Info</h3>
                      
                      <div className="space-y-4 text-xs">
                        <div className="flex items-start space-x-3">
                          <MapPin className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-neutral-800 block">Address Coordinates:</span>
                            <span className="text-neutral-600">Villa No : 44, Humming Gardens, OMR Road, Kelambakkam - 603103</span>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3 border-t border-neutral-100 pt-3">
                          <Phone className="h-4.5 w-4.5 text-orange-600 shrink-0 mt-1" />
                          <div className="space-y-2">
                            <div>
                              <span className="font-bold text-[10px] font-mono tracking-wider uppercase text-neutral-400 block">Managing Director Line:</span>
                              <a href="tel:+919551234597" className="text-neutral-800 hover:text-orange-600 font-bold font-mono">+91 95512 34597 (H Charles Immanuvel)</a>
                            </div>
                            <div>
                              <span className="font-bold text-[10px] font-mono tracking-wider uppercase text-neutral-400 block">CEO Line:</span>
                              <a href="tel:+919884770108" className="text-neutral-800 hover:text-orange-600 font-bold font-mono">+91 98847 70108 (S Prasanna)</a>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3 border-t border-neutral-100 pt-3">
                          <Clock className="h-4.5 w-4.5 text-orange-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-neutral-800 block">Working Hours:</span>
                            <span className="text-neutral-600">Mon - Sat: 9:00 AM - 6:30 PM (Sunday Closed)</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Google map visual mock */}
                    <div className="rounded-2xl border border-neutral-200 bg-neutral-100 h-64 overflow-hidden relative shadow-sm">
                      {/* Architectural map background simulation */}
                      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524813686514-a57563d77d61?auto=format&fit=crop&w=600&q=80')] bg-cover opacity-60 filter grayscale" />
                      <div className="absolute inset-0 bg-neutral-950/25 flex flex-col items-center justify-center text-center p-4">
                        <div className="h-10 w-10 rounded-full bg-orange-600 flex items-center justify-center text-white border-2 border-white shadow-lg animate-bounce">
                          <MapPin className="h-5 w-5" />
                        </div>
                        <span className="block font-display text-sm font-bold text-white mt-3 shadow-sm bg-neutral-950/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
                          NH HEADQUARTERS, HUMMING GARDENS
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}


              {/* ================= CUSTOMER PORTAL VIEW ================= */}
              {activeView === "portal" && (
                <div id="customer-portal-container">
                  <CustomerPortal onSubmitLead={handleSubmitLead} />
                </div>
              )}


              {/* ================= DEVELOPER ADMIN DASHBOARD ================= */}
              {activeView === "admin" && (
                <div id="admin-dashboard-active-view">
                  <AdminDashboard />
                </div>
              )}

            </motion.div>
          </AnimatePresence>

          {/* Collapsible FAQ Section at bottom of specific main landing views */}
          {(activeView === "home" || activeView === "about" || activeView === "construction") && (
            <div className="mt-20 space-y-6" id="global-faqs-accordion">
              <div className="text-center max-w-md mx-auto space-y-1">
                <span className="text-xs font-mono font-bold tracking-widest text-orange-600 uppercase font-bold">FAQS</span>
                <h3 className="font-display text-xl font-bold text-neutral-900">Frequently Asked Questions</h3>
                <p className="text-xs text-neutral-500">Got questions regarding home loans, DTCP permits, joint ventures or structural parameters?</p>
              </div>

              <div className="max-w-3xl mx-auto divide-y divide-neutral-200 border-t border-b border-neutral-200 pt-2">
                {faqs.map((faq, idx) => (
                  <div key={faq.question} className="py-4">
                    <button
                      onClick={() => setOpenFaqIdx(openFaqIdx === idx ? null : idx)}
                      className="flex w-full items-center justify-between text-left focus:outline-none"
                    >
                      <span className="font-display text-sm font-bold text-neutral-900 flex items-center">
                        <span className="inline-block px-2 py-0.5 mr-2 rounded bg-orange-50 border border-orange-100 text-[10px] text-orange-700 tracking-wider font-mono font-bold uppercase shrink-0">
                          {faq.category}
                        </span>
                        <span>{faq.question}</span>
                      </span>
                      <ChevronDown className={`h-4 w-4 text-neutral-400 shrink-0 transition-transform ${openFaqIdx === idx ? "rotate-180" : ""}`} />
                    </button>
                    {openFaqIdx === idx && (
                      <div className="mt-2.5 text-xs text-neutral-600 leading-relaxed text-justify animate-fade-in pl-1">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Careers Sub-Section under About view */}
          {activeView === "about" && (
            <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-neutral-200 pt-16" id="careers-section">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-mono font-bold tracking-widest text-orange-600 uppercase">CAREERS</span>
                <h3 className="font-display text-2xl font-bold text-neutral-900">Join Nehemiah's Engineering Committee</h3>
                <p className="text-xs text-neutral-600 leading-relaxed text-justify">
                  NH Homes maintains an elite structural consulting panel. We look for passionate individuals, expert architects, and licensed structural site engineers who focus on robust construction practices and government regulatory FSI compliance.
                </p>

                <div className="space-y-3.5 pt-2">
                  {[
                    { title: "Senior Structural Site Engineer", sub: "Chennai, OMR (Ongoing) • 6+ Yrs Exp.", pay: "₹6.5L - ₹9.0L p.a." },
                    { title: "Junior Civil Liaison Liaison", sub: "Chennai, Corporate (Adyar) • 2+ Yrs Exp.", pay: "₹3.5L - ₹4.5L p.a." },
                    { title: "BIM Architectural Drafter (Revit/CAD)", sub: "Chennai, Design Committee (Adyar) • 4+ Yrs Exp.", pay: "₹5.0L - ₹7.0L p.a." }
                  ].map(job => (
                    <div key={job.title} className="rounded-xl border border-neutral-200 bg-white p-3.5 shadow-sm hover:border-neutral-300 transition-all">
                      <div className="flex justify-between items-start gap-2">
                        <div className="space-y-1">
                          <h4 className="text-xs font-bold text-neutral-900">{job.title}</h4>
                          <span className="block text-[10px] text-neutral-500 font-mono">{job.sub}</span>
                        </div>
                        <span className="text-[10px] bg-orange-50 border border-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-mono font-bold">{job.pay}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Online Apply form */}
              <div className="lg:col-span-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm space-y-3">
                <h4 className="font-display text-base font-bold text-neutral-900">Apply for Open Positions</h4>
                <p className="text-xs text-neutral-500">Submit your professional resume profile for screening by our HR panel.</p>

                <form onSubmit={handleCareerSubmit} className="space-y-3.5 pt-2">
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      required
                      value={careerName}
                      onChange={(e) => setCareerName(e.target.value)}
                      placeholder="Full Name"
                      className="rounded-lg border border-neutral-200 px-3 py-2 text-xs outline-none focus:border-orange-500"
                    />
                    <input
                      type="email"
                      required
                      value={careerEmail}
                      onChange={(e) => setCareerEmail(e.target.value)}
                      placeholder="Email ID"
                      className="rounded-lg border border-neutral-200 px-3 py-2 text-xs outline-none focus:border-orange-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <input
                      type="tel"
                      required
                      value={careerPhone}
                      onChange={(e) => setCareerPhone(e.target.value)}
                      placeholder="Phone Number"
                      className="rounded-lg border border-neutral-200 px-3 py-2 text-xs outline-none focus:border-orange-500"
                    />
                    <select
                      value={careerPosition}
                      onChange={(e) => setCareerPosition(e.target.value)}
                      className="rounded-lg border border-neutral-200 bg-white px-2 py-1.5 outline-none focus:border-orange-500"
                    >
                      <option value="Structural Engineer">Structural Site Engineer</option>
                      <option value="Liaison Liaison">Liaison Officer</option>
                      <option value="Architectural Drafter">BIM CAD Drafter</option>
                    </select>
                  </div>

                  {/* Drag drop simulation file uploader */}
                  <div className="rounded-xl border-2 border-dashed border-neutral-300 p-4 text-center cursor-pointer hover:bg-neutral-50 hover:border-orange-500 transition-colors">
                    <input
                      type="file"
                      id="career-resume-file"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) setCareerResumeName(file.name);
                      }}
                    />
                    <label htmlFor="career-resume-file" className="cursor-pointer">
                      <FileText className="mx-auto h-6 w-6 text-neutral-400 mb-2" />
                      <span className="block text-xs font-bold text-neutral-700">
                        {careerResumeName ? `Attached: ${careerResumeName}` : "Upload Resume (PDF, Word, or Link)"}
                      </span>
                      <span className="block text-[10px] text-neutral-400 mt-1">Drag and drop or click to pick a file</span>
                    </label>
                  </div>

                  <textarea
                    value={careerNotes}
                    onChange={(e) => setCareerNotes(e.target.value)}
                    placeholder="Describe your civil design background or notable works..."
                    rows={2}
                    className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-xs outline-none focus:border-orange-500 resize-none"
                  />

                  <button
                    type="submit"
                    className="w-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold py-2.5 rounded-lg transition-colors flex items-center justify-center space-x-1"
                  >
                    <Briefcase className="h-4 w-4" />
                    <span>Submit Application Dossier</span>
                  </button>
                </form>

                {careerSubmitted && (
                  <div className="flex items-center space-x-1.5 rounded-lg bg-orange-50 p-2.5 border border-orange-200 text-[10px] text-orange-700 font-semibold animate-pulse">
                    <CheckCircle className="h-4 w-4 shrink-0" />
                    <span>Application logged! Our recruitment panel will evaluate your resume blueprints.</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Interactive photo gallery on specific views */}
          {activeView === "home" && (
            <div className="mt-20 space-y-6" id="global-gallery">
              <div className="text-center max-w-md mx-auto space-y-1">
                <span className="text-xs font-mono font-bold tracking-widest text-orange-600 uppercase">GALLERY INVENTORY</span>
                <h3 className="font-display text-xl font-bold text-neutral-900">NH Promoter Construction Logs</h3>
                <p className="text-xs text-neutral-500">Live snippets of active brickworks, completed luxury homes, and premium bedroom woodwork.</p>
              </div>

              {/* Gallery category tabs */}
              <div className="flex justify-center space-x-1 text-xs font-semibold">
                {[
                  { id: "all", label: "All Logs" },
                  { id: "completed", label: "Completed Projects" },
                  { id: "progress", label: "Structural Progress" },
                  { id: "interiors", label: "Interiors & Finishes" }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setGalleryFilter(tab.id)}
                    className={`px-3 py-1.5 rounded-lg border transition-all ${
                      galleryFilter === tab.id
                        ? "bg-neutral-900 border-neutral-900 text-white shadow-sm"
                        : "bg-white border-neutral-200 text-neutral-600 hover:border-neutral-300"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Gallery Photos Grid */}
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 pt-4">
                {filteredGallery.map((img, idx) => (
                  <div key={idx} className="group relative rounded-2xl overflow-hidden h-44 bg-neutral-100 border border-neutral-200 shadow-sm">
                    <img referrerPolicy="no-referrer" src={img.url} alt={img.title} className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <div>
                        <span className="block text-[9px] font-mono font-bold text-orange-400 tracking-wider uppercase">{img.type}</span>
                        <h4 className="text-xs font-bold text-white mt-0.5">{img.title}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Blogs list preview under Home or specific views */}
          {activeView === "home" && (
            <div className="mt-20 space-y-6" id="global-blogs-recap">
              <div className="flex justify-between items-end gap-2 max-w-7xl mx-auto">
                <div>
                  <span className="text-xs font-mono font-bold tracking-widest text-orange-600 uppercase font-bold">LATEST ARTICLES</span>
                  <h3 className="font-display text-xl font-bold text-neutral-900">Home Buying Guides & Civil Manuals</h3>
                </div>
                <button 
                  onClick={() => setActiveView("about")} 
                  className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center space-x-1"
                >
                  <span>Read All Guides</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <BlogsSection />
            </div>
          )}

          {/* Testimonials Review carousel on Home page */}
          {activeView === "home" && (
            <div className="mt-20 space-y-6" id="global-testimonials">
              <div className="text-center max-w-md mx-auto space-y-1">
                <span className="text-xs font-mono font-bold tracking-widest text-orange-600 uppercase">CLIENT TESTIMONIES</span>
                <h3 className="font-display text-xl font-bold text-neutral-900">What Our Happy Homeowners Say</h3>
                <p className="text-xs text-neutral-500">Uncompromising opinions from elite families who purchased residential flats and villas.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                {testimonials.map((t) => (
                  <div key={t.name} className="rounded-2xl border border-neutral-200 bg-white p-5 space-y-3.5 shadow-sm">
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-0.5">
                        {[...Array(t.rating)].map((_, i) => (
                          <span key={i} className="text-orange-500 font-bold text-sm">★</span>
                        ))}
                      </div>
                      <span className="text-[9px] font-mono tracking-wider bg-orange-50 border border-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-bold">
                        {t.project.split(" ")[1]}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed italic text-justify">
                      "{t.quote}"
                    </p>
                    <div className="pt-2 border-t border-neutral-100">
                      <h4 className="font-display text-xs font-bold text-neutral-900">{t.name}</h4>
                      <span className="block text-[10px] text-neutral-400 mt-0.5">{t.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>

      {/* Corporate Footer */}
      <Footer setActiveView={setActiveView} onSubmitLead={handleSubmitLead} />

      {/* Floating Action Buttons: Click to Call & WhatsApp integrations */}
      <div className="fixed bottom-24 right-6 z-40 flex flex-col space-y-2 select-none">
        <a 
          href="tel:+919876543210" 
          className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-white shadow-lg hover:scale-105 active:scale-95 transition-all"
          title="Call Corporate Liaison"
          aria-label="Call Support"
        >
          <Phone className="h-5 w-5" />
        </a>
        <a 
          href="https://wa.me/919876543210" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white shadow-lg hover:scale-105 active:scale-95 transition-all"
          title="WhatsApp Sales Committee"
          aria-label="WhatsApp Support"
        >
          <MessageSquare className="h-5 w-5" />
        </a>
      </div>

      {/* Immersive 24/7 AI Property Assistant floating component */}
      <AIChatbot />

      {/* Book Site Visit Modal */}
      <BookSiteVisitModal 
        isOpen={isBookModalOpen} 
        onClose={handleCloseVisitModal} 
        onSubmitLead={handleSubmitLead} 
        preselectedProjectId={selectedProjectForVisit} 
      />
    </div>
  );
}
