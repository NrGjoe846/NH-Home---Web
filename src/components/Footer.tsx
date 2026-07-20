import { Mail, Phone, MapPin, Clock, ArrowRight, Shield, Award } from "lucide-react";
import React, { useState } from "react";

interface FooterProps {
  setActiveView: (view: string) => void;
  onSubmitLead: (leadData: { type: string; name: string; email: string; phone: string; details: any }) => void;
}

export default function Footer({ setActiveView, onSubmitLead }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    onSubmitLead({
      type: "enquiry",
      name: "Newsletter Subscriber",
      email: email,
      phone: "N/A",
      details: {
        interest: "Newsletter subscription",
        notes: "User subscribed to news and investment updates"
      }
    });

    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 5000);
  };

  const handleFooterNav = (viewId: string) => {
    setActiveView(viewId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-neutral-900 pt-16 pb-8 text-neutral-400 border-t border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 lg:gap-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleFooterNav("home")}>
              <img src="/logo.png" alt="NH Homes Logo" className="h-14 w-auto object-contain" />
              <span className="font-display text-lg font-bold text-white tracking-wider">NH HOMES</span>
            </div>
            <p className="text-sm leading-relaxed text-neutral-400">
              Premium home promoters delivering quality residential apartments, villas, and joint-venture developments across Chennai with complete transparency.
            </p>
            <div className="flex space-x-3 pt-2">
              <span className="flex items-center space-x-1.5 text-xs text-neutral-300">
                <Shield className="h-4 w-4 text-orange-500" />
                <span>RERA Registered</span>
              </span>
              <span className="flex items-center space-x-1.5 text-xs text-neutral-300">
                <Award className="h-4 w-4 text-orange-500" />
                <span>ISO 9001:2015</span>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-base font-semibold text-white tracking-wider mb-4">Quick Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handleFooterNav("home")} className="hover:text-orange-500 transition-colors">Home Page</button>
              </li>
              <li>
                <button onClick={() => handleFooterNav("projects")} className="hover:text-orange-500 transition-colors">Our Projects</button>
              </li>
              <li>
                <button onClick={() => handleFooterNav("services")} className="hover:text-orange-500 transition-colors">Core Services</button>
              </li>
              <li>
                <button onClick={() => handleFooterNav("construction")} className="hover:text-orange-500 transition-colors">Cost Estimator</button>
              </li>
              <li>
                <button onClick={() => handleFooterNav("joint-venture")} className="hover:text-orange-500 transition-colors">Joint Venture</button>
              </li>
              <li>
                <button onClick={() => handleFooterNav("about")} className="hover:text-orange-500 transition-colors">About & Team</button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-display text-base font-semibold text-white tracking-wider mb-4">Corporate Office</h3>
            <ul className="space-y-3.5 text-xs">
              <li className="flex items-start space-x-2.5">
                <MapPin className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                <span className="text-neutral-300">Villa No : 44, Humming Gardens, OMR Road, Kelambakkam - 603103</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <Phone className="h-4 w-4 text-orange-500 shrink-0 mt-1" />
                <div className="flex flex-col text-neutral-300">
                  <span className="text-[9px] font-mono tracking-widest text-neutral-500 uppercase">Managing Director</span>
                  <a href="tel:+919551234597" className="hover:text-white transition-colors font-medium">H Charles Immanuvel: +91 95512 34597</a>
                </div>
              </li>
              <li className="flex items-start space-x-2.5">
                <Phone className="h-4 w-4 text-orange-500 shrink-0 mt-1" />
                <div className="flex flex-col text-neutral-300">
                  <span className="text-[9px] font-mono tracking-widest text-neutral-500 uppercase">CEO</span>
                  <a href="tel:+919884770108" className="hover:text-white transition-colors font-medium">S Prasanna: +91 98847 70108</a>
                </div>
              </li>
              <li className="flex items-center space-x-2.5 text-neutral-300">
                <Mail className="h-4 w-4 text-orange-500 shrink-0" />
                <a href="mailto:info@nhhomes.in" className="hover:text-white transition-colors">info@nhhomes.in</a>
              </li>
              <li className="flex items-center space-x-2.5 text-neutral-300">
                <Clock className="h-4 w-4 text-orange-500 shrink-0" />
                <span>Mon - Sat: 9:00 AM - 6:30 PM</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Subscription */}
          <div className="space-y-4">
            <h3 className="font-display text-base font-semibold text-white tracking-wider">Investment Updates</h3>
            <p className="text-sm text-neutral-400">
              Subscribe to get notified about new project launches, joint venture properties, and property investment tips in Chennai.
            </p>
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-l-lg bg-neutral-800 border-0 px-3.5 py-2 text-sm text-white placeholder-neutral-500 focus:ring-2 focus:ring-orange-500 outline-none"
              />
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white px-3 py-2 rounded-r-lg transition-colors flex items-center justify-center"
                aria-label="Subscribe"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
            {subscribed && (
              <p className="text-xs text-orange-500 transition-opacity">
                Thank you for subscribing!
              </p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            <p>&copy; {new Date().getFullYear()} NH HOMES. All Rights Reserved.</p>
            <p className="mt-1 text-neutral-500">
              Disclaimer: All project photos, FSI layouts, maps, and specifications are representations. Final designs are subject to government licensing.
            </p>
          </div>
          <div className="flex space-x-4">
            <button 
              onClick={() => handleFooterNav("admin")} 
              className="text-neutral-500 hover:text-orange-500 transition-colors underline decoration-dotted"
            >
              Developer Admin Dashboard
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
