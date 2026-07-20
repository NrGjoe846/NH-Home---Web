export type ProjectStatus = "Ongoing" | "Upcoming" | "Completed";
export type ProjectCategory = "Residential" | "Commercial" | "Villa" | "Apartment";

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  location: string;
  status: ProjectStatus;
  price: string;
  area: string;
  approved: string; // "DTCP Approved", "CMDA Approved", "RERA & DTCP Approved" etc.
  image: string;
  overview: string;
  gallery: string[];
  amenities: string[];
  masterPlanUrl?: string;
  floorPlanUrl?: string;
  locationMapUrl?: string;
  nearby: {
    schools: string[];
    hospitals: string[];
    transit: string[];
  };
  virtualTourUrl?: string;
  brochureUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  details: string;
}

export interface Blog {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  project: string;
  rating: number;
}

export interface FAQItem {
  category: "Construction" | "Home Loans" | "Approvals" | "Joint Venture" | "Payment";
  question: string;
  answer: string;
}

export interface Lead {
  id: string;
  type: "enquiry" | "site_visit" | "joint_venture" | "career";
  name: string;
  email: string;
  phone: string;
  details: Record<string, any>;
  status: "Pending" | "Approved" | "Contacted" | "Completed" | "Rejected";
  createdAt: string;
}

export interface ConstructionPackage {
  name: string;
  price: string;
  description: string;
  specifications: string[];
  color: string;
}
