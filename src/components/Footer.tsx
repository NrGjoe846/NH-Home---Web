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
    <footer className="bg-gradient-to-br from-neutral-600 via-neutral-800 to-neutral-950 pt-6 sm:pt-12 md:pt-16 pb-6 text-neutral-100 border-t border-neutral-600/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 sm:gap-6 lg:gap-12">
          {/* Brand Info - Spans 2 cols on mobile */}
          <div className="col-span-2 sm:col-span-1 space-y-2.5">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleFooterNav("home")}>
              <div className="flex h-11 w-11 md:h-14 md:w-14 items-center justify-center rounded-xl bg-white p-1.5 shadow-md border border-neutral-100 shrink-0">
                <img src="/logo.png" alt="NH Homes Logo" className="h-full w-full object-contain" />
              </div>
              <div>
                <span className="block font-display text-base md:text-xl font-bold tracking-tight text-white">
                  NH HOMES
                </span>
                <span className="block font-mono text-[9px] md:text-[10px] tracking-widest text-orange-400 uppercase font-bold">
                  Home Promoters
                </span>
              </div>
            </div>
            <p className="text-xs md:text-sm leading-relaxed text-neutral-200 font-medium line-clamp-2 md:line-clamp-none">
              Premium home promoters delivering quality residential apartments, villas, and joint-venture developments across Chennai with complete transparency.
            </p>
            <div className="flex space-x-3 pt-0.5">
              <span className="flex items-center space-x-1 text-[11px] md:text-xs text-white font-medium">
                <Shield className="h-3.5 w-3.5 text-orange-400" />
                <span>RERA Registered</span>
              </span>
              <span className="flex items-center space-x-1 text-[11px] md:text-xs text-white font-medium">
                <Award className="h-3.5 w-3.5 text-orange-400" />
                <span>ISO 9001:2015</span>
              </span>
            </div>
          </div>

          {/* Quick Links - 1 Col on Mobile */}
          <div className="col-span-1">
            <h3 className="font-display text-xs md:text-base font-bold text-white tracking-wider mb-2 md:mb-4">Quick Links</h3>
            <ul className="space-y-1.5 md:space-y-2.5 text-[11px] md:text-sm font-medium text-neutral-100">
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

          {/* Contact Details - 1 Col on Mobile */}
          <div className="col-span-1">
            <h3 className="font-display text-xs md:text-base font-bold text-white tracking-wider mb-2 md:mb-4">Contact Us</h3>
            <ul className="space-y-2 md:space-y-3.5 text-[11px] md:text-xs font-medium text-neutral-100">
              <li className="flex items-start space-x-1.5">
                <MapPin className="h-3.5 w-3.5 md:h-5 md:w-5 text-orange-400 shrink-0 mt-0.5" />
                <span className="text-neutral-100 leading-tight md:leading-relaxed">Villa 44, Humming Gardens, OMR, Chennai</span>
              </li>
              <li className="flex items-start space-x-1.5">
                <Phone className="h-3.5 w-3.5 md:h-4 md:w-4 text-orange-400 shrink-0 mt-0.5" />
                <div className="flex flex-col text-neutral-100">
                  <a href="tel:+919551234597" className="hover:text-orange-300 transition-colors font-bold text-white">+91 95512 34597</a>
                </div>
              </li>
              <li className="flex items-center space-x-1.5 text-neutral-100">
                <Mail className="h-3.5 w-3.5 md:h-4 md:w-4 text-orange-400 shrink-0" />
                <a href="mailto:info@nhhomes.in" className="hover:text-orange-300 transition-colors font-medium truncate">info@nhhomes.in</a>
              </li>
              <li className="flex items-center space-x-1.5 text-neutral-100">
                <Clock className="h-3.5 w-3.5 md:h-4 md:w-4 text-orange-400 shrink-0" />
                <span>Mon-Sat: 9AM-6:30PM</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Subscription - Spans 2 cols on mobile */}
          <div className="col-span-2 sm:col-span-1 space-y-2 md:space-y-3">
            <h3 className="font-display text-xs md:text-base font-bold text-white tracking-wider">Investment Updates</h3>
            <p className="text-[11px] md:text-xs leading-relaxed text-neutral-200 font-medium">
              Subscribe to get notified about new project launches and property tips in Chennai.
            </p>
            <form onSubmit={handleSubscribe} className="flex max-w-sm">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-l-lg bg-neutral-800 border border-neutral-600 px-3 py-1.5 text-xs text-white placeholder-neutral-400 focus:ring-2 focus:ring-orange-400 outline-none"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-3 py-1.5 rounded-r-lg transition-all flex items-center justify-center font-bold text-xs shadow-md shrink-0"
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
        <div className="mt-4 pt-4 md:mt-12 md:pt-8 border-t border-neutral-700/80 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs font-medium text-neutral-200">
          <div>
            <p className="text-white font-bold text-[11px] md:text-xs">&copy; {new Date().getFullYear()} NH HOMES. All Rights Reserved.</p>
            <p className="mt-0.5 text-neutral-300 leading-relaxed text-[10px] md:text-xs line-clamp-2 sm:line-clamp-none">
              Disclaimer: All project photos, FSI layouts, maps, and specifications are representations. Final designs are subject to government licensing.
            </p>
          </div>
          <div className="shrink-0 pt-1 sm:pt-0">
            <a 
              href="https://www.unaitech.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2.5 rounded-full bg-white px-3.5 py-1.5 md:px-4 md:py-2 border border-orange-200/80 shadow-sm hover:shadow-md hover:border-orange-300 transition-all group cursor-pointer text-left select-none"
              title="Visit Unai Tech Official Website"
            >
              <div>
                <span className="block font-mono text-[8px] md:text-[9px] font-bold tracking-widest text-neutral-400 uppercase leading-none mb-0.5 md:mb-1">
                  CRAFTED BY
                </span>
                <div className="flex items-center font-display text-xs md:text-sm font-extrabold tracking-tight leading-none">
                  <span className="text-orange-600">UNAI</span>
                  <span className="text-neutral-900 ml-1">TECH</span>
                </div>
              </div>
              <div className="flex h-6 w-6 md:h-7 md:w-7 items-center justify-center rounded-full bg-orange-600 text-white shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                <ArrowUpRight className="h-3.5 w-3.5 md:h-4 md:w-4 stroke-[2.5]" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
