import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Sparkles, Loader2, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: "user" | "model"; content: string }>>([
    {
      role: "model",
      content: "Hello! I am your NH Homes AI Property Assistant. 🌟\n\nI can help you:\n• Learn about active projects (NH Grandeur, NH Elite Villas, etc.)\n• Estimate turnkey construction costs\n• Understand our Joint Venture (JV) sharing models\n• Calculate your monthly home loan EMIs\n\nWhat can I answer for you today?"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const suggestedPrompts = [
    "Tell me about NH Grandeur OMR",
    "How does a Joint Venture work?",
    "What are your construction plans?",
    "Calculate EMI for 60 Lakhs"
  ];

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputValue.trim();
    if (!text) return;

    if (!textToSend) setInputValue("");

    // Append user message
    const updatedMessages = [...messages, { role: "user" as const, content: text }];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });
      
      const data = await response.json();
      if (response.ok) {
        setMessages((prev) => [...prev, { role: "model" as const, content: data.content }]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "model" as const, content: `Error: ${data.error || "Failed to contact assistant. Please try again."}` }
        ]);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "model" as const, content: "Network error. Please check if your backend server is online or try again." }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const formatMessageContent = (text: string) => {
    // Basic formatting for bold markdowns and lists
    return text.split("\n").map((line, idx) => {
      let content: React.ReactNode = line;

      // Handle bullet points
      if (line.startsWith("• ") || line.startsWith("- ")) {
        content = (
          <span className="flex items-start space-x-1.5 pl-1.5">
            <span className="text-orange-500 shrink-0 mt-1">•</span>
            <span>{line.substring(2)}</span>
          </span>
        );
      }

      // Handle bold markdown e.g. **text**
      const boldRegex = /\*\*(.*?)\*\*/g;
      if (boldRegex.test(line)) {
        const parts = line.split(boldRegex);
        content = parts.map((part, pIdx) => {
          if (pIdx % 2 === 1) {
            return <strong key={pIdx} className="font-bold text-neutral-900">{part}</strong>;
          }
          return part;
        });
      }

      return (
        <span key={idx} className="block min-h-[1rem]">
          {content}
        </span>
      );
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end" id="ai-chatbot-root">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="ai-chatbot-window"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="mb-4 flex h-[500px] w-80 flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl sm:w-96"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-gradient-to-br from-neutral-600 via-neutral-800 to-neutral-950 px-4 py-4 text-white border-b border-neutral-600/50">
              <div className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-600">
                  <Sparkles className="h-4.5 w-4.5 text-white" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold tracking-tight">AI Property Assistant</h4>
                  <span className="block text-[9px] text-orange-400 font-mono tracking-wider uppercase">
                    24/7 Gemini-Powered Support
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-white/10 p-1 text-neutral-300 hover:bg-white/20 hover:text-white transition-colors"
                aria-label="Close Chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Message Pane */}
            <div className="flex-1 overflow-y-auto bg-neutral-50 p-4 space-y-3.5 text-xs">
              {messages.map((msg, idx) => {
                const isUser = msg.role === "user";
                return (
                  <div
                    key={idx}
                    className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 shadow-sm leading-relaxed ${
                        isUser
                          ? "bg-orange-600 text-white"
                          : "bg-white border border-neutral-200 text-neutral-800"
                      }`}
                    >
                      {formatMessageContent(msg.content)}
                    </div>
                  </div>
                );
              })}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-center space-x-2 rounded-2xl border border-neutral-200 bg-white px-3.5 py-2.5 text-neutral-500 shadow-sm">
                    <Loader2 className="h-3.5 w-3.5 animate-spin text-orange-600" />
                    <span>Gemini is thinking...</span>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Quick Suggestions */}
            {messages.length === 1 && (
              <div className="bg-neutral-50 px-4 pb-2">
                <span className="block text-[10px] font-semibold text-neutral-400 tracking-wider uppercase mb-1.5">
                  Frequently Asked Questions
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {suggestedPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => handleSendMessage(prompt)}
                      className="flex items-center rounded-full bg-white border border-neutral-200 px-3 py-1 text-[10px] font-medium text-neutral-600 hover:border-orange-500 hover:text-orange-600 transition-colors"
                    >
                      <span>{prompt}</span>
                      <ArrowUpRight className="h-2.5 w-2.5 ml-0.5" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Panel */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="border-t border-neutral-200 bg-white p-3 flex space-x-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about pricing, land JVs, site visits..."
                className="w-full rounded-xl border border-neutral-200 px-3 py-2 text-xs outline-none focus:border-orange-500"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                className="rounded-xl bg-orange-600 p-2 text-white hover:bg-orange-700 disabled:bg-neutral-100 disabled:text-neutral-400 transition-colors"
                aria-label="Send Message"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button
        id="ai-chatbot-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-600 text-white shadow-xl hover:bg-orange-700 hover:scale-105 active:scale-95 transition-all duration-300"
        aria-label="Toggle AI Assistant"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
        {/* Unread badge indicator */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
          </span>
        )}
      </button>
    </div>
  );
}
