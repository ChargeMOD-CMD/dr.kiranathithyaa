import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ from: "you" | "us"; text: string }[]>([
    { from: "us", text: "Good day. How may the duty pathologist help you?" },
  ]);
  const [text, setText] = useState("");

  const send = (msg?: string) => {
    const v = (msg ?? text).trim();
    if (!v) return;
    setMessages((m) => [...m, { from: "you", text: v }]);
    setText("");
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          from: "us",
          text: "Noted. A member of our team will write back personally within the hour. For urgent matters please dial +91 70103 58445.",
        },
      ]);
    }, 900);
  };

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open assistant"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full pl-4 pr-3 py-2.5 mono text-[0.68rem] uppercase tracking-[0.24em] shadow-[var(--shadow-paper)]"
        style={{ background: "var(--ink)", color: "var(--paper)" }}
      >
        {open ? <X className="h-3.5 w-3.5" /> : <MessageCircle className="h-3.5 w-3.5" />}
        {open ? "Close" : "Ask the desk"}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[min(360px,92vw)] ink-card rounded-sm overflow-hidden animate-fade-up">
          <div className="border-b border-[var(--rule)] p-4">
            <div className="mono text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">
              Front desk · MMXXVI
            </div>
            <div className="serif text-lg mt-0.5">Ask the pathologist</div>
          </div>
          <div className="max-h-72 overflow-y-auto p-4 space-y-3 text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] ${m.from === "you" ? "ml-auto" : ""}`}
              >
                <div className="mono text-[0.58rem] uppercase tracking-[0.26em] text-muted-foreground mb-1">
                  {m.from === "you" ? "You" : "Front desk"}
                </div>
                <div
                  className={`rounded-sm p-3 leading-relaxed ${
                    m.from === "you"
                      ? "bg-[var(--ink)] text-[var(--paper)]"
                      : "bg-[var(--secondary)]"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-[var(--rule)] p-3 flex items-center gap-2">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Write a note…"
              className="flex-1 bg-transparent text-sm border-0 focus:outline-none focus:ring-0"
            />
            <button
              onClick={() => send()}
              className="grid h-8 w-8 place-items-center rounded-full"
              style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
              aria-label="Send"
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
