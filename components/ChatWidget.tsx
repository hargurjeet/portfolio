"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, RotateCcw, MessageCircle } from "lucide-react";

type Message = { role: "user" | "assistant"; content: string };

const GREETING: Message = {
  role: "assistant",
  content:
    "Hi! I'm Hargurjeet's AI assistant. Ask me anything about his experience, skills, or projects — I'm here to help.",
};

const SUGGESTIONS = [
  "What AWS services have you worked with?",
  "Tell me about your RAG projects",
  "Are you open to new roles?",
  "What LLM frameworks do you know?",
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  async function sendMessage(text: string) {
    if (!text.trim() || isLoading) return;

    const history = messages
      .slice(1)
      .map((m) => ({ role: m.role, content: m.content }));

    setMessages((prev) => [
      ...prev,
      { role: "user", content: text },
      { role: "assistant", content: "" },
    ]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: text, chatHistory: history }),
      });

      if (!res.ok) throw new Error("API error");

      const reader = res.body!.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value);
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            ...updated[updated.length - 1],
            content: updated[updated.length - 1].content + chunk,
          };
          return updated;
        });
      }
    } catch {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          ...updated[updated.length - 1],
          content: "Sorry, I encountered an error. Please try again.",
        };
        return updated;
      });
    } finally {
      setIsLoading(false);
    }
  }

  function clearChat() {
    setMessages([GREETING]);
    setInput("");
  }  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3 w-[calc(100vw-2rem)] sm:w-[440px]">
      {/* Chat panel */}
      {isOpen && (
        <div className="w-full bg-background/85 dark:bg-zinc-950/85 backdrop-blur-xl border border-border/80 rounded-2xl shadow-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-primary/95 dark:bg-primary/90">
            <div className="flex items-center gap-2">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </div>
              <span className="text-white font-semibold text-sm">
                Ask about Hargurjeet
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={clearChat}
                title="Clear chat"
                className="text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                <RotateCcw size={13} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[220px] max-h-[320px] sm:min-h-[280px] sm:max-h-[400px]">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-primary text-white rounded-br-sm"
                      : "bg-secondary dark:bg-muted text-foreground rounded-bl-sm"
                  }`}
                >
                  {msg.content ||
                    (isLoading && i === messages.length - 1 ? (
                      <span className="flex gap-1 py-0.5">
                        <span
                          className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        />
                        <span
                          className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        />
                        <span
                          className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        />
                      </span>
                    ) : (
                      ""
                    ))}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Persistent suggestion chips */}
          <div className="px-4 py-2 border-t border-border/50 flex flex-wrap gap-1.5 bg-card">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => sendMessage(s)}
                disabled={isLoading}
                className="text-2xs bg-primary/8 dark:bg-primary/10 border border-primary/20 text-primary px-2.5 py-1.5 rounded-full hover:bg-primary/15 transition-colors disabled:opacity-40 cursor-pointer"
              >
                {s}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-border bg-card">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="flex gap-2"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about skills, experience..."
                disabled={isLoading}
                className="flex-1 bg-secondary dark:bg-muted border border-border text-foreground text-sm rounded-xl px-3 py-2 focus:outline-none focus:border-primary placeholder-muted-foreground/50 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-primary hover:bg-primary/90 disabled:opacity-40 text-white p-2 rounded-xl transition-colors cursor-pointer"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating bubble / pill */}
      {isOpen ? (
        <button
          onClick={() => setIsOpen(false)}
          className="w-14 h-14 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-105 cursor-pointer self-end shrink-0 border border-white/10"
          aria-label="Close chat"
        >
          <X size={22} />
        </button>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 px-5 h-14 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg transition-all hover:scale-105 cursor-pointer self-end shrink-0 font-semibold text-sm md:text-base border border-white/10"
          aria-label="Open AI chat assistant"
        >
          <MessageCircle size={18} className="shrink-0 animate-pulse" />
          <span>Chat with me!</span>
        </button>
      )}
    </div>
  );
}
