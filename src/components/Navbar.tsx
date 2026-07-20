import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Home, Building2, Calculator, Handshake, Info, Mail, LayoutDashboard, UserCheck, PhoneCall } from "lucide-react";

interface NavbarProps {
  activeView: string;
  setActiveView: (view: string) => void;
  onBookSiteVisit: () => void;
}

export default function Navbar({ activeView, setActiveView, onBookSiteVisit }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "projects", label: "Projects", icon: Building2 },
    { id: "services", label: "Services", icon: UserCheck },
    { id: "construction", label: "Construction", icon: Calculator },
    { id: "joint-venture", label: "Joint Venture", icon: Handshake },
    { id: "about", label: "About Us", icon: Info },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const handleNavClick = (viewId: string) => {
    setActiveView(viewId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div 
          className="flex cursor-pointer items-center space-x-3"
          onClick={() => handleNavClick("home")}
          id="nav-logo"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-600 shadow-md shadow-orange-500/20">
            <span className="font-display text-2xl font-bold text-white">NH</span>
          </div>
          <div>
            <span className="block font-display text-xl font-bold tracking-tight text-neutral-900">
              NH HOMES
            </span>
            <span className="block font-mono text-[10px] tracking-widest text-neutral-500 uppercase">
              Home Promoters
            </span>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center space-x-1">
          {menuItems.map((item) => {
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
            className="lg:hidden border-t border-neutral-200 bg-white"
          >
            <div className="space-y-1 px-4 py-3 pb-6">
              {menuItems.map((item) => {
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
