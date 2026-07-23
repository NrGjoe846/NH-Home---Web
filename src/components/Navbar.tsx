import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Menu, X, Home, Building2, Calculator, Handshake, Info, Mail, 
  UserCheck, PhoneCall, ChevronDown, Tractor 
} from "lucide-react";

interface NavbarProps {
  activeView: string;
  setActiveView: (view: string) => void;
  onBookSiteVisit: () => void;
}

export default function Navbar({ activeView, setActiveView, onBookSiteVisit }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Mobile menu items remain unchanged as requested
  const mobileMenuItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "projects", label: "Projects", icon: Building2 },
    { id: "services", label: "Services", icon: UserCheck },
    { id: "construction", label: "Construction", icon: Calculator },
    { id: "joint-venture", label: "Joint Venture", icon: Handshake },
    { id: "about", label: "About Us", icon: Info },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  // Desktop navbar items reordered to: Home, About Us, Services, Contact
  const desktopMenuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "services", label: "Services", isDropdown: true },
    { id: "contact", label: "Contact" },
  ];

  // Categories under Services dropdown for Desktop
  const serviceSubItems = [
    { 
      id: "projects", 
      label: "Projects", 
      desc: "Signature residential listings & villas", 
      icon: Building2 
    },
    { 
      id: "construction", 
      label: "Construction", 
      desc: "Building packages & cost estimators", 
      icon: Calculator 
    },
    { 
      id: "joint-venture", 
      label: "Joint Venture", 
      desc: "High-yield land partnership models", 
      icon: Handshake 
    },
    { 
      id: "services", 
      label: "Earth Mover & Site Services", 
      desc: "Excavation, grading & site development", 
      icon: Tractor 
    },
  ];

  // Close desktop dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNavClick = (viewId: string) => {
    setActiveView(viewId);
    setIsOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isServicesCategoryActive = ["services", "projects", "construction", "joint-venture"].includes(activeView);

  return (
    <header className="fixed top-3 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all">
      <div className="flex h-16 sm:h-20 items-center justify-between px-3.5 sm:px-6 lg:px-8 rounded-2xl border border-white/50 bg-white/65 shadow-2xl backdrop-blur-md transition-all">
        {/* Logo Section */}
        <div 
          className="flex cursor-pointer items-center space-x-2 sm:space-x-3"
          onClick={() => handleNavClick("home")}
          id="nav-logo"
        >
          <img src="/logo.png" alt="NH Homes Logo" className="h-11 sm:h-16 w-auto object-contain" />
          <div>
            <span className="block font-display text-base sm:text-xl font-bold tracking-tight text-neutral-900">
              NH HOMES
            </span>
            <span className="block font-mono text-[9px] sm:text-[10px] tracking-widest text-neutral-500 uppercase">
              Home Promoters
            </span>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center space-x-2 md:space-x-3 xl:space-x-4">
          {desktopMenuItems.map((item) => {
            if (item.isDropdown) {
              return (
                <div 
                  key={item.id} 
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <button
                    id="nav-services"
                    onClick={() => {
                      setServicesDropdownOpen((prev) => !prev);
                      handleNavClick("services");
                    }}
                    className={`relative flex items-center space-x-1 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                      isServicesCategoryActive 
                        ? "text-orange-600 font-semibold" 
                        : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                    }`}
                  >
                    {isServicesCategoryActive && (
                      <motion.div
                        layoutId="active-nav-indicator"
                        className="absolute inset-0 bg-orange-50 rounded-lg -z-10 border-b-2 border-orange-600"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span>Services</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180 text-orange-600" : "text-neutral-400"}`} />
                  </button>

                  {/* Services Sub-categories Dropdown */}
                  <AnimatePresence>
                    {servicesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute left-0 mt-1.5 w-72 rounded-2xl bg-white p-2.5 shadow-xl border border-neutral-200/80 z-50 ring-1 ring-black/5"
                      >
                        <div className="px-3 py-1.5 border-b border-neutral-100 mb-1.5 flex justify-between items-center">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600">Services & Categories</span>
                        </div>
                        <div className="space-y-1">
                          {serviceSubItems.map((subItem) => {
                            const SubIcon = subItem.icon;
                            const isSubActive = activeView === subItem.id;
                            return (
                              <button
                                key={subItem.id}
                                id={`nav-sub-${subItem.id}`}
                                onClick={() => handleNavClick(subItem.id)}
                                className={`flex w-full items-start space-x-3 rounded-xl p-2.5 text-left transition-all ${
                                  isSubActive 
                                    ? "bg-orange-50 text-orange-600 font-semibold" 
                                    : "text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900"
                                }`}
                              >
                                <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                                  isSubActive ? "bg-orange-600 text-white" : "bg-orange-100 text-orange-600"
                                }`}>
                                  <SubIcon className="h-4 w-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-sm font-bold leading-snug">{subItem.label}</div>
                                  <div className="text-[11px] font-normal text-neutral-500 truncate">{subItem.desc}</div>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  isActive 
                    ? "text-orange-600 font-semibold" 
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-nav-indicator"
                    className="absolute inset-0 bg-orange-50 rounded-lg -z-10 border-b-2 border-orange-600"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <button
            id="nav-customer-portal-btn"
            onClick={() => handleNavClick("portal")}
            className={`px-4 py-2 text-sm font-medium border rounded-lg transition-all ${
              activeView === "portal"
                ? "bg-neutral-800 text-white border-neutral-800"
                : "text-neutral-700 border-neutral-300 hover:bg-neutral-50"
            }`}
          >
            Customer Portal
          </button>
          <button
            id="nav-book-site-btn"
            onClick={onBookSiteVisit}
            className="flex items-center space-x-2 rounded-lg bg-orange-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-500/20 active:scale-95"
          >
            <PhoneCall className="h-4 w-4" />
            <span>Book Visit</span>
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="flex lg:hidden items-center space-x-2">
          <button
            id="nav-customer-portal-mobile-btn"
            onClick={() => handleNavClick("portal")}
            className="px-3 py-1.5 text-xs font-medium border border-neutral-300 rounded-lg hover:bg-neutral-50 mr-1"
          >
            Portal
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-2 rounded-2xl border border-white/50 bg-white/75 shadow-xl backdrop-blur-md overflow-hidden"
          >
            <div className="space-y-1 px-4 py-3 pb-6">
              {mobileMenuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeView === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex w-full items-center space-x-3 rounded-lg px-4 py-3 text-base font-medium transition-all ${
                      isActive 
                        ? "bg-orange-50 text-orange-600 font-semibold" 
                        : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
              
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-neutral-100">
                <button
                  id="mobile-nav-portal"
                  onClick={() => handleNavClick("portal")}
                  className={`w-full py-2.5 text-center text-sm font-medium border rounded-lg ${
                    activeView === "portal" ? "bg-neutral-800 text-white border-neutral-800" : "text-neutral-700 border-neutral-300"
                  }`}
                >
                  Portal
                </button>
                <button
                  id="mobile-nav-book-site"
                  onClick={() => {
                    setIsOpen(false);
                    onBookSiteVisit();
                  }}
                  className="w-full bg-orange-600 py-2.5 text-center text-sm font-medium text-white rounded-lg hover:bg-orange-700"
                >
                  Book Visit
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

