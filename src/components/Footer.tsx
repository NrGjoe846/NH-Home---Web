import { Mail, Phone, MapPin, Clock, ArrowRight, Shield, Award, ArrowUpRight } from "lucide-react";
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
    <footer className="bg-gradient-to-br from-neutral-600 via-neutral-800 to-neutral-950 pt-12 md:pt-16 pb-8 text-neutral-100 border-t border-neutral-600/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 lg:gap-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleFooterNav("home")}>
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white p-1.5 shadow-md border border-neutral-100 shrink-0">
                <img src="/logo.png" alt="NH Homes Logo" className="h-full w-full object-contain" />
              </div>
              <div>
                <span className="block font-display text-xl font-bold tracking-tight text-white">
                  NH HOMES
                </span>
                <span className="block font-mono text-[10px] tracking-widest text-orange-400 uppercase font-bold">
                  Home Promoters
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-neutral-200 font-medium">
              Premium home promoters delivering quality residential apartments, villas, and joint-venture developments across Chennai with complete transparency.
            </p>
            <div className="flex space-x-3 pt-2">
              <span className="flex items-center space-x-1.5 text-xs text-white font-medium">
                <Shield className="h-4 w-4 text-orange-400" />
                <span>RERA Registered</span>
              </span>
              <span className="flex items-center space-x-1.5 text-xs text-white font-medium">
                <Award className="h-4 w-4 text-orange-400" />
                <span>ISO 9001:2015</span>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-base font-bold text-white tracking-wider mb-4">Quick Navigation</h3>
            <ul className="space-y-2.5 text-sm font-medium text-neutral-100">
              <li>
                <button onClick={() => handleFooterNav("home")} className="hover:text-orange-400 transition-colors">Home Page</button>
              </li>
              <li>
                <button onClick={() => handleFooterNav("projects")} className="hover:text-orange-400 transition-colors">Our Projects</button>
              </li>
              <li>
                <button onClick={() => handleFooterNav("services")} className="hover:text-orange-400 transition-colors">Core Services</button>
              </li>
              <li>
                <button onClick={() => handleFooterNav("construction")} className="hover:text-orange-400 transition-colors">Cost Estimator</button>
              </li>
              <li>
                <button onClick={() => handleFooterNav("joint-venture")} className="hover:text-orange-400 transition-colors">Joint Venture</button>
              </li>
              <li>
                <button onClick={() => handleFooterNav("about")} className="hover:text-orange-400 transition-colors">About & Team</button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-display text-base font-bold text-white tracking-wider mb-4">Corporate Office</h3>
            <ul className="space-y-3.5 text-xs font-medium text-neutral-100">
              <li className="flex items-start space-x-2.5">
                <MapPin className="h-5 w-5 text-orange-400 shrink-0 mt-0.5" />
                <span className="text-neutral-100 leading-relaxed">Villa No : 44, Humming Gardens, OMR Road, Kelambakkam - 603103</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <Phone className="h-4 w-4 text-orange-400 shrink-0 mt-1" />
                <div className="flex flex-col text-neutral-100">
                  <span className="text-[10px] font-mono tracking-widest text-orange-400 uppercase font-bold">Managing Director</span>
                  <a href="tel:+919551234597" className="hover:text-orange-300 transition-colors font-bold text-white">H Charles Immanuvel: +91 95512 34597</a>
                </div>
              </li>
              <li className="flex items-start space-x-2.5">
                <Phone className="h-4 w-4 text-orange-400 shrink-0 mt-1" />
                <div className="flex flex-col text-neutral-100">
                  <span className="text-[10px] font-mono tracking-widest text-orange-400 uppercase font-bold">CEO</span>
                  <a href="tel:+919884770108" className="hover:text-orange-300 transition-colors font-bold text-white">S Prasanna: +91 98847 70108</a>
                </div>
              </li>
              <li className="flex items-center space-x-2.5 text-neutral-100">
                <Mail className="h-4 w-4 text-orange-400 shrink-0" />
                <a href="mailto:info@nhhomes.in" className="hover:text-orange-300 transition-colors font-medium">info@nhhomes.in</a>
              </li>
              <li className="flex items-center space-x-2.5 text-neutral-100">
                <Clock className="h-4 w-4 text-orange-400 shrink-0" />
                <span>Mon - Sat: 9:00 AM - 6:30 PM</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Subscription */}
          <div className="space-y-4">
            <h3 className="font-display text-base font-bold text-white tracking-wider">Investment Updates</h3>
            <p className="text-xs leading-relaxed text-neutral-200 font-medium">
              Subscribe to get notified about new project launches, joint venture properties, and property investment tips in Chennai.
            </p>
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-l-lg bg-neutral-800 border border-neutral-600 px-3.5 py-2 text-xs text-white placeholder-neutral-400 focus:ring-2 focus:ring-orange-400 outline-none"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-3.5 py-2 rounded-r-lg transition-all flex items-center justify-center font-bold text-xs shadow-md"
                aria-label="Subscribe"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
            {subscribed && (
              <p className="text-xs text-orange-400 font-bold transition-opacity">
                Thank you for subscribing!
              </p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-700/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-neutral-200">
          <div>
            <p className="text-white font-bold">&copy; {new Date().getFullYear()} NH HOMES. All Rights Reserved.</p>
            <p className="mt-1 text-neutral-300 leading-relaxed">
              Disclaimer: All project photos, FSI layouts, maps, and specifications are representations. Final designs are subject to government licensing.
            </p>
          </div>
          <div className="shrink-0">
            <a 
              href="https://www.unaitech.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-3 rounded-full bg-white px-4 py-2 border border-orange-200/80 shadow-sm hover:shadow-md hover:border-orange-300 transition-all group cursor-pointer text-left select-none"
              title="Visit Unai Tech Official Website"
            >
              <div>
                <span className="block font-mono text-[9px] font-bold tracking-widest text-neutral-400 uppercase leading-none mb-1">
                  CRAFTED BY
                </span>
                <div className="flex items-center font-display text-sm font-extrabold tracking-tight leading-none">
                  <span className="text-orange-600">UNAI</span>
                  <span className="text-neutral-900 ml-1">TECH</span>
                </div>
              </div>
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-600 text-white shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
