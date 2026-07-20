import { useState } from "react";
import { Search, Clock, ArrowRight, Eye, X, BookOpen, Share2 } from "lucide-react";
import { Blog } from "../types";
import { blogs } from "../data/projects";

export default function BlogsSection() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Government Approval Guide" | "Property Investment" | "Construction Tips">("All");
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  const filteredBlogs = blogs.filter((b) => {
    const matchesSearch = b.title.toLowerCase().includes(search.toLowerCase()) || 
                          b.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "All" || b.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8" id="blogs-section-module">
      {/* Search and category filter toolbar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-neutral-200">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search construction tips or investment guides..."
            className="w-full pl-9 pr-4 py-2 border border-neutral-200 rounded-xl focus:border-orange-500 outline-none text-sm"
          />
        </div>

        <div className="flex flex-wrap gap-1.5 text-xs font-semibold">
          {["All", "Government Approval Guide", "Property Investment", "Construction Tips"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat as any)}
              className={`px-3 py-1.5 rounded-lg border transition-all ${
                selectedCategory === cat
                  ? "bg-neutral-950 border-neutral-900 text-white shadow-sm"
                  : "bg-white border-neutral-200 text-neutral-600 hover:border-neutral-300"
              }`}
            >
              {cat === "All" ? "All Reading" : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredBlogs.map((b) => (
          <div
            key={b.id}
            className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-300 hover:shadow-xl hover:border-neutral-300"
            id={`blog-card-${b.id}`}
          >
            {/* Blog Image */}
            <div className="relative h-44 overflow-hidden bg-neutral-100 shrink-0">
              <img
                referrerPolicy="no-referrer"
                src={b.image}
                alt={b.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
              />
              <span className="absolute top-3 left-3 bg-neutral-900/80 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold text-white tracking-wider uppercase">
                {b.category}
              </span>
            </div>

            {/* Content info */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center space-x-1.5 text-[10px] text-neutral-400 font-mono">
                  <span>{b.date}</span>
                  <span>•</span>
                  <span>{b.readTime}</span>
                </div>
                <h3 className="font-display text-base font-bold text-neutral-900 group-hover:text-orange-600 transition-colors line-clamp-2">
                  {b.title}
                </h3>
                <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed">
                  {b.excerpt}
                </p>
              </div>

              <button
                onClick={() => setSelectedBlog(b)}
                className="mt-4 pt-3.5 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-orange-600 group-hover:text-orange-700 transition-colors"
              >
                <span>Read Full Article</span>
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Blog Article Detail Reader Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" id="blog-reader-modal">
          <div className="relative w-full max-w-2xl bg-white shadow-2xl rounded-2xl border border-neutral-100 overflow-hidden flex flex-col max-h-[85vh]">
            {/* Top sticky title panel */}
            <div className="bg-neutral-950 px-6 py-5 text-white flex justify-between items-start gap-4 shrink-0">
              <div>
                <span className="text-[9px] font-mono tracking-widest text-orange-400 uppercase">
                  NH READERS LOBBY
                </span>
                <h3 className="font-display text-lg font-bold tracking-tight mt-0.5 max-w-md">{selectedBlog.title}</h3>
                <div className="flex items-center space-x-2 text-[10px] text-neutral-400 mt-1 font-mono">
                  <span>{selectedBlog.date}</span>
                  <span>•</span>
                  <span>{selectedBlog.readTime}</span>
                  <span>•</span>
                  <span>Category: {selectedBlog.category}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedBlog(null)}
                className="rounded-full bg-white/10 p-1.5 text-neutral-300 hover:bg-white/20 hover:text-white transition-colors shrink-0"
                aria-label="Close reader"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Scrollable text content */}
            <div className="p-6 overflow-y-auto space-y-4 flex-1 text-sm text-neutral-700 leading-relaxed max-w-none">
              <div className="h-48 w-full rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200">
                <img referrerPolicy="no-referrer" src={selectedBlog.image} alt={selectedBlog.title} className="w-full h-full object-cover" />
              </div>
              
              <div className="space-y-4 text-justify whitespace-pre-wrap pt-2 pr-1">
                {selectedBlog.content}
              </div>
            </div>

            {/* Bottom sticky bar */}
            <div className="bg-neutral-50 px-6 py-4 flex justify-between items-center border-t border-neutral-200 shrink-0">
              <span className="text-[11px] text-neutral-400 flex items-center">
                <BookOpen className="h-3.5 w-3.5 mr-1.5" />
                <span>NH Homes Investor Guide</span>
              </span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Article reference link copied to clipboard!");
                }}
                className="rounded-lg border border-neutral-200 px-3 py-1.5 text-xs text-neutral-600 bg-white hover:border-orange-500 hover:text-orange-600 transition-all flex items-center space-x-1"
              >
                <Share2 className="h-3.5 w-3.5" />
                <span>Share Post</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
