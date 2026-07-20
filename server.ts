import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory store for leads with rich realistic seed data
interface Lead {
  id: string;
  type: "enquiry" | "site_visit" | "joint_venture" | "career";
  name: string;
  email: string;
  phone: string;
  details: Record<string, any>;
  status: "Pending" | "Approved" | "Contacted" | "Completed" | "Rejected";
  createdAt: string;
}

let leadsList: Lead[] = [
  {
    id: "lead-1",
    type: "site_visit",
    name: "Nehemiah Nesanathan",
    email: "nehemiahnesanathan@gmail.com",
    phone: "+91 98765 43210",
    details: {
      project: "NH Elite Villas (ECR)",
      date: "2026-07-25",
      time: "11:00 AM",
      notes: "Interested in the 4 BHK Smart Villa layout."
    },
    status: "Approved",
    createdAt: "2026-07-19T10:30:00Z"
  },
  {
    id: "lead-2",
    type: "joint_venture",
    name: "Amit Sharma",
    email: "amit.sharma@outlook.com",
    phone: "+91 94440 12345",
    details: {
      location: "Thoraipakkam, OMR",
      landSize: "2.5 Grounds (6000 Sq.ft)",
      roadWidth: "40 Feet",
      revenueShare: "Joint Venture - 60:40 Option",
      notes: "Has a clear title and patta. Prefers apartment promotion."
    },
    status: "Pending",
    createdAt: "2026-07-18T14:15:00Z"
  },
  {
    id: "lead-3",
    type: "career",
    name: "Priya Nair",
    email: "priya.nair@designers.com",
    phone: "+91 81220 98765",
    details: {
      position: "Senior Architect",
      experience: "5+ Years",
      resumeName: "Priya_Nair_Portfolio.pdf",
      notes: "Specialized in luxury villa blueprints and DTCP planning compliance."
    },
    status: "Contacted",
    createdAt: "2026-07-17T09:00:00Z"
  },
  {
    id: "lead-4",
    type: "enquiry",
    name: "Rajesh Kumar",
    email: "rajesh.k@gmail.com",
    phone: "+91 91760 55443",
    details: {
      project: "NH Grandeur (OMR)",
      budget: "₹60 Lakhs - ₹80 Lakhs",
      flatType: "3 BHK",
      notes: "Wants to know about SBI home loan approvals and pre-EMI offers."
    },
    status: "Completed",
    createdAt: "2026-07-16T16:45:00Z"
  }
];

// Lazy-loaded Gemini AI client
let aiInstance: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    // If key is empty or default, we return null and fallback gracefully
    return null;
  }
  if (!aiInstance) {
    aiInstance = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        }
      }
    });
  }
  return aiInstance;
}

// AI Property Assistant Chat Endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages array is required" });
    }

    const ai = getGeminiClient();
    if (!ai) {
      // Graceful offline simulated response when GEMINI_API_KEY is not provided
      const userMessage = messages[messages.length - 1]?.content?.toLowerCase() || "";
      let simulatedReply = "";

      if (userMessage.includes("project") || userMessage.includes("grandeur") || userMessage.includes("county") || userMessage.includes("villa")) {
        simulatedReply = "NH Homes features premium signature projects: **NH Grandeur** (2 & 3 BHK Apartments in OMR, starting at ₹55L), **NH Orange County** (Luxury 3 BHK in Adyar, starting at ₹1.2Cr), and **NH Elite Villas** (Ultra-luxury smart villas in ECR, starting at ₹2.1Cr). All our projects are fully approved by DTCP/CMDA and RERA with 100% transparent documentation.";
      } else if (userMessage.includes("earth mover") || userMessage.includes("excavation") || userMessage.includes("clearing") || userMessage.includes("moving") || userMessage.includes("site development")) {
        simulatedReply = "We provide full heavy-duty **Earth Mover & Site Services**! Our professional fleet handles **precision excavation**, **earth moving/grading**, **site development**, and **land clearing** (debris and stump removal) across Chennai. This ensures your construction has an engineered, perfectly graded, robust foundation.";
      } else if (userMessage.includes("joint") || userMessage.includes("venture") || userMessage.includes("land")) {
        simulatedReply = "We specialize in high-value Joint Ventures for land owners in Chennai under the direction of our Managing Director, H Charles Immanuvel. We offer flexible revenue-sharing options (e.g., 60:40 or 50:50), substantial advance amounts, and take care of 100% of the government approvals, architectural design, and premium construction. You can fill out our Joint Venture form on our client portal!";
      } else if (userMessage.includes("emi") || userMessage.includes("calculator") || userMessage.includes("loan")) {
        simulatedReply = "You can calculate your monthly home loan repayments instantly using our interactive **EMI Calculator**! We are approved partners with leading banks like SBI, HDFC, LIC, and ICICI, which offer up to 85% funding. A quick approximation for a ₹60L loan at 8.5% interest for 20 years would be about ₹52,000 per month.";
      } else if (userMessage.includes("site") || userMessage.includes("visit") || userMessage.includes("book")) {
        simulatedReply = "I can definitely help schedule a site visit for you! Please specify your preferred project, date, and time. Alternatively, you can use the instant **Book Site Visit** button in the dashboard to lock in a time slot with automated confirmations.";
      } else if (userMessage.includes("address") || userMessage.includes("office") || userMessage.includes("location") || userMessage.includes("contact") || userMessage.includes("phone")) {
        simulatedReply = "NH Homes is headquartered at **Villa No : 44, Humming Gardens, OMR Road, Kelambakkam - 603103**. You can reach our Managing Director **H Charles Immanuvel** at **+91 95512 34597**, and our CEO **S Prasanna** at **+91 98847 70108**.";
      } else {
        simulatedReply = "Hello! I am your NH Homes AI Property Assistant. I can tell you about our ongoing DTCP-approved apartments, villas, and plots, explain our profitable Joint Venture partnership models, calculate your Home Loan EMI, describe our heavy earth mover excavation services, or schedule a free site visit for you. How can I assist you today?";
      }

      // Add a small disclaimer about offline mode
      return res.json({
        content: simulatedReply + "\n\n*(Note: Running in offline assistance mode. Configure GEMINI_API_KEY in Secrets panel for the fully conversational live Gemini experience.)*"
      });
    }

    // Convert messages to Gemini format
    const contents = messages.map((msg: any) => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content }]
    }));

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction: `You are the NH Homes AI Property Assistant, a professional, factual, and incredibly helpful 24/7 smart assistant for NH HOMES (Home Promoters, Real Estate Development, and Construction).
        NH HOMES is a premium real estate promoter and builder based in Chennai, established in 2016 (10 years of experience), with 50+ projects and 150+ happy families.
        
        Our Corporate Headquarters is located at: Villa No : 44, Humming Gardens, OMR Road, Kelambakkam - 603103.
        Our leadership team consists of:
        - Er. Nehemiah Nesanathan (Founder & Chairman)
        - H Charles Immanuvel (Managing Director) - Direct Line: +91 95512 34597
        - S Prasanna (Chief Executive Officer / CEO) - Direct Line: +91 98847 70108
        
        Our logo features Orange, Dark Grey, and White branding. Our values focus on complete transparency, on-time delivery with penalty clauses, 100% legal documentation, and experienced engineers.

        Signature Active Projects:
        1. NH Grandeur: Premium 2 & 3 BHK Apartments in OMR, Chennai. Area: 950 - 1650 Sq.ft. Price: Starting from ₹55 Lakhs. Status: Ongoing. DTCP & RERA Approved. Excellent for tech professionals.
        2. NH Orange County: Luxury 3 BHK Apartments in Adyar, Chennai. Area: 1400 - 2200 Sq.ft. Price: Starting from ₹1.2 Crores. Status: Upcoming. CMDA Approved. Premium amenities.
        3. NH Elite Villas: Ultra-Luxury 4 BHK Smart Villas in ECR, Chennai. Area: 2500 - 4000 Sq.ft. Price: Starting from ₹2.1 Crores. Status: Ongoing. DTCP & RERA Approved. Private terrace, home automation, near beach.
        4. NH Green Meadows: Premium plots and villa development in Guduvanchery, Chennai. Area: 1200 - 2400 Sq.ft. Price: Starting from ₹30 Lakhs. Status: Completed. DTCP Approved. Ready for construction.

        Construction & Heavy Equipment Packages:
        - Basic Plan: ₹1,800 / Sq.Ft (Standard materials, branded fittings, basic interior woodwork)
        - Premium Plan: ₹2,200 / Sq.Ft (Teakwood main door, premium tiles, modular kitchen, branded bathroom fixtures)
        - Luxury Plan: ₹2,600 / Sq.Ft (Italian marble/granite floors, structural design flexibility, extensive home automation, high-end jaguar/kohler fittings, complete interior woodwork)
        - Earth Mover & Site Services: Heavy equipment works including foundation excavation, earth moving, site development, and land clearing.

        Joint Ventures (JV) for Land Owners:
        - We help land owners develop their empty plots or old houses into modern apartments/villas.
        - High-revenue sharing: standard 60:40 or 50:50.
        - High cash advances and hassle-free document verification.
        - NH Homes bears 100% of the construction, approval, planning, and architectural costs.

        Your Tone:
        - Welcoming, highly professional, polite, and reassuring.
        - Emphasize safety, transparent pricing, and quality engineering.
        - Offer to help them calculate EMI, estimate construction cost, describe excavation/earth moving site works, or schedule site visits.
        - If they want to book a visit or JV evaluation, ask for their contact info and guide them to use the interactive forms on our portal.`
      }
    });

    return res.json({ content: response.text });
  } catch (error: any) {
    console.error("Gemini Chat API Error:", error);
    return res.status(500).json({ error: error.message || "An error occurred while communicating with Gemini." });
  }
});

// Submit a new Lead (from any of our interactive tools / forms)
app.post("/api/leads", (req, res) => {
  const { type, name, email, phone, details } = req.body;
  if (!type || !name || !email || !phone) {
    return res.status(400).json({ error: "Missing required contact details" });
  }

  const newLead: Lead = {
    id: `lead-${Date.now()}`,
    type,
    name,
    email,
    phone,
    details: details || {},
    status: "Pending",
    createdAt: new Date().toISOString()
  };

  leadsList.unshift(newLead);
  return res.status(201).json({ success: true, lead: newLead });
});

// Admin Route: Get all leads
app.get("/api/admin/leads", (req, res) => {
  return res.json({ leads: leadsList });
});

// Admin Route: Update lead status
app.post("/api/admin/leads/:id/status", (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!status) {
    return res.status(400).json({ error: "Status is required" });
  }

  const lead = leadsList.find((l) => l.id === id);
  if (!lead) {
    return res.status(404).json({ error: "Lead not found" });
  }

  lead.status = status;
  return res.json({ success: true, lead });
});

// Serve Vite Developer Server middleware in development, static files in production
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer();
