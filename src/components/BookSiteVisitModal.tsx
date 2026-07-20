import React, { useState } from "react";
import { X, Calendar, Clock, MapPin, CheckCircle, Sparkles, AlertTriangle } from "lucide-react";
import { signatureProjects } from "../data/projects";

interface BookSiteVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitLead: (leadData: { type: string; name: string; email: string; phone: string; details: any }) => void;
  preselectedProjectId?: string;
}

export default function BookSiteVisitModal({
  isOpen,
  onClose,
  onSubmitLead,
  preselectedProjectId
}: BookSiteVisitModalProps) {
  const [projectId, setProjectId] = useState(preselectedProjectId || signatureProjects[0].id);
  const [date, setDate] = useState("2026-07-25");
  const [timeSlot, setTimeSlot] = useState("11:00 AM");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const timeSlots = ["10:00 AM", "11:30 AM", "1:00 PM", "2:30 PM", "4:00 PM", "5:30 PM"];
  const selectedProject = signatureProjects.find((p) => p.id === projectId) || signatureProjects[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    onSubmitLead({
      type: "site_visit",
      name,
      email,
      phone,
      details: {
        project: `${selectedProject.name} (${selectedProject.category})`,
        location: selectedProject.location,
        date: date,
        time: timeSlot,
        notes: notes || "No custom requirements mentioned."
      }
    });

    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setName("");
      setEmail("");
      setPhone("");
      setNotes("");
      onClose();
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" id="book-visit-modal-container">
      <div className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl border border-neutral-100 overflow-hidden">
        {/* Banner header */}
        <div className="bg-neutral-900 px-6 py-5 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 rounded-full bg-white/10 p-1.5 text-neutral-300 hover:bg-white/20 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
          <span className="text-[10px] font-mono tracking-widest text-orange-400 uppercase">
            NH SIGNATURE EXPERIENCE
          </span>
          <h3 className="font-display text-xl font-bold tracking-tight mt-0.5">Book Private Site Visit</h3>
          <p className="text-xs text-neutral-400 mt-1">
            Complimentary AC sedan cab pick-up and drop included for you and your family.
          </p>
        </div>

        {success ? (
          <div className="p-8 text-center space-y-4">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-orange-600">
              <CheckCircle className="h-8 w-8" />
            </div>
            <h4 className="font-display text-lg font-bold text-neutral-900">Site Visit Scheduled!</h4>
            <div className="text-sm text-neutral-600 max-w-md mx-auto space-y-1">
              <p>Thank you, <span className="font-semibold text-neutral-900">{name}</span>.</p>
              <p>We have reserved <span className="font-semibold text-neutral-900">{timeSlot}</span> on <span className="font-semibold text-neutral-900">{date}</span> for your private tour of <span className="font-semibold text-neutral-900">{selectedProject.name}</span>.</p>
              <p className="text-xs text-neutral-400 pt-3">
                Our customer relationship manager will send a Google Calendar invite and call to coordinate the pick-up location.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
            {/* Select Project */}
            <div>
              <label className="block text-xs font-semibold tracking-wider text-neutral-500 uppercase mb-1.5">
                Choose Project
              </label>
              <select
                value={projectId}
                onChange={(e) => setProjectId(e.target.value)}
                className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-orange-500"
              >
                {signatureProjects.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} - {p.location.split(",")[0]} ({p.category})
                  </option>
                ))}
              </select>
            </div>

            {/* Date and Time slots */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold tracking-wider text-neutral-500 uppercase mb-1.5">
                  Select Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    required
                    min="2026-07-20"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-orange-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold tracking-wider text-neutral-500 uppercase mb-1.5">
                  Select Time Slot
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-orange-500"
                >
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Project Quick Overview */}
            <div className="flex items-center space-x-3 rounded-xl bg-orange-50/50 p-3 border border-orange-100 text-xs">
              <MapPin className="h-4 w-4 text-orange-600 shrink-0" />
              <div>
                <span className="font-semibold text-neutral-800">{selectedProject.name} location: </span>
                <span className="text-neutral-600">{selectedProject.location}</span>
                <span className="block mt-0.5 text-neutral-500 italic">({selectedProject.approved})</span>
              </div>
            </div>

            {/* Contact details */}
            <div className="space-y-3">
              <label className="block text-xs font-semibold tracking-wider text-neutral-500 uppercase border-b pb-1">
                Your Contact Information
              </label>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-xs outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-xs outline-none focus:border-orange-500"
                  />
                </div>
              </div>
              <div>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone Number (e.g., +91 98765 43210)"
                  className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-xs outline-none focus:border-orange-500"
                />
              </div>
              <div>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Any special requests? (e.g., Wheelchair assist, pick up location, specific floor plans needed)"
                  rows={2}
                  className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-xs outline-none focus:border-orange-500 resize-none"
                />
              </div>
            </div>

            {/* CTA Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-600 py-3 text-center text-sm font-semibold text-white rounded-lg hover:bg-orange-700 hover:shadow-lg transition-all active:scale-95 flex items-center justify-center space-x-2"
            >
              <Calendar className="h-4 w-4" />
              <span>Confirm Site Visit Reservation</span>
            </button>
            <p className="text-[10px] text-center text-neutral-400">
              By confirming, you agree to receive SMS & Call updates from our sales engineer regarding your site visit.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
