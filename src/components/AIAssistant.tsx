import { useState } from "react";
import { Send, Sparkles, X } from "lucide-react";

type Msg = { role: "user" | "ai"; text: string };

const intro: Msg = {
  role: "ai",
  text: "Hi, I'm ATHITHYAA — your AI Health Assistant. I can help with diagnostic guidance, package recommendations, appointments and report questions. How can I help today?",
};

const suggestions = [
  "Recommend a full body checkup",
  "Help me read my report",
  "Book an appointment",
  "Preventive health tips",
];

export function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([intro]);
  const [input, setInput] = useState("");

  const send = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Msg = { role: "user", text };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          role: "ai",
          text:
            "Thanks — our care team will follow up shortly. Meanwhile, you can book a slot from the Appointment section or call +91 70103 58445.",
        },
      ]);
    }, 600);
  };

  return (
    <>
      {/* Floating orb */}
      <button
        aria-label="AI Health Assistant"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 grid h-16 w-16 place-items-center rounded-full bg-[var(--gradient-primary)] shadow-[var(--shadow-glow)] animate-pulse-glow"
      >
        <span className="absolute inset-1 rounded-full border border-dashed border-white/40 animate-orbit" />
        <span className="absolute inset-3 rounded-full border border-white/30 animate-orbit" style={{ animationDirection: "reverse", animationDuration: "10s" }} />
        {open ? (
          <X className="h-6 w-6 text-primary-foreground" />
        ) : (
          <Sparkles className="h-6 w-6 text-primary-foreground animate-heartbeat" />
        )}
      </button>

      {open && (
        <div className="fixed bottom-28 right-6 z-50 w-[min(92vw,380px)] animate-fade-up">
          <div
            className="overflow-hidden rounded-3xl shadow-[var(--shadow-elev)]"
            style={{ background: "var(--gradient-card)" }}
          >
            <div className="flex items-center gap-3 border-b border-border/60 p-4">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--gradient-primary)]">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </span>
              <div>
                <div className="text-sm font-semibold">ATHITHYAA AI</div>
                <div className="text-[10px] uppercase tracking-wider text-primary">
                  Online · Health assistant
                </div>
              </div>
            </div>

            <div className="max-h-80 overflow-y-auto p-4 space-y-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
                    m.role === "ai"
                      ? "bg-secondary/60 text-foreground"
                      : "ml-auto bg-[var(--gradient-primary)] text-primary-foreground"
                  }`}
                >
                  {m.text}
                </div>
              ))}
            </div>

            <div className="border-t border-border/60 p-3">
              <div className="mb-2 flex flex-wrap gap-1.5">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="rounded-full glass px-2.5 py-1 text-[11px] text-muted-foreground hover:text-foreground"
                  >
                    {s}
                  </button>
                ))}
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  send(input);
                }}
                className="flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1.5"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask anything about your health..."
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
                <button
                  type="submit"
                  className="grid h-8 w-8 place-items-center rounded-full bg-[var(--gradient-primary)] text-primary-foreground"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
