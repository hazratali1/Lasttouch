// // src/components/AIChatbot.tsx
// import React, { useEffect, useRef, useState } from "react";
// import { MessageSquare, Send, X, Loader2, Trash2 } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import logo from "@/assets/logo.png";

// // ✅ Your actual n8n chat webhook URL
// const N8N_WEBHOOK_URL =
//   "https://n8n.srv915514.hstgr.cloud/webhook/43b52fda-8dfc-45e7-adac-821938a54844/chat";

// type Msg = { role: "user" | "assistant"; content: string };

// function getChatId() {
//   const key = "lt_chat_id";
//   let id = localStorage.getItem(key);
//   if (!id) {
//     id =
//       (crypto as any).randomUUID?.() ??
//       Math.random().toString(36).slice(2);
//     localStorage.setItem(key, id);
//   }
//   return id;
// }

// export default function AIChatbot() {
//   const [open, setOpen] = useState(false);
//   const [messages, setMessages] = useState<Msg[]>([]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const viewportRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     viewportRef.current?.scrollTo({
//       top: viewportRef.current.scrollHeight,
//       behavior: "smooth",
//     });
//   }, [messages, open]);

//   // 🔄 Reset session: clears chatId + messages
//   function resetSession() {
//     try {
//       localStorage.removeItem("lt_chat_id");
//     } catch {}
//     setMessages([{ role: "assistant", content: "🔁 Session reset. How can I help you now?" }]);
//   }

//   async function send() {
//     const text = input.trim();
//     if (!text || loading) return;

//     setMessages((m) => [...m, { role: "user", content: text }]);
//     setInput("");
//     setLoading(true);

//     try {
//       const res = await fetch(N8N_WEBHOOK_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           message: text,
//           chatId: getChatId(), // will generate a new one after reset
//           page:
//             typeof window !== "undefined"
//               ? window.location.pathname
//               : "/",
//         }),
//       });

//       // Parse n8n’s reply safely (works for both plain text or JSON)
//       const raw = await res.text();
//       let reply = raw;
//       try {
//         const j = JSON.parse(raw);
//         reply = j.reply ?? j.text ?? raw;
//       } catch {
//         // ignore if not JSON
//       }

//       setMessages((m) => [
//         ...m,
//         {
//           role: "assistant",
//           content:
//             reply ||
//             "I’m here to help. Could you share a bit more about what you need?",
//         },
//       ]);
//     } catch {
//       setMessages((m) => [
//         ...m,
//         {
//           role: "assistant",
//           content:
//             "Sorry, I couldn’t reach the assistant right now. You can contact us:\n\n" +
//             "📧 Email: contact.lasttuch@gmail.com\n" +
//             "📱 WhatsApp: +8801614408837\n" +
//             "🌐 Facebook Page: https://www.facebook.com/share/17dQ61nTkJ/?mibextid=wwXIfr",
//         },
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   }

//   function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       send();
//     }
//   }

//   return (
//     <>
//       {/* Floating launcher (very high z-index) */}
//       <button
//         onClick={() => setOpen(true)}
//         aria-label="Open chat"
//         className="fixed bottom-5 right-5 z-[2147483647] rounded-full shadow-lg bg-primary text-primary-foreground p-4 hover:opacity-90 focus:outline-none"
//         id="lt-chat-launch"
//       >
//         <MessageSquare />
//       </button>

//       {/* Chat panel */}
//       {open && (
//         <div className="fixed bottom-5 right-5 z-[2147483647] w-[min(380px,calc(100vw-24px))]">
//           <Card className="border-border bg-card shadow-2xl rounded-2xl overflow-hidden">
//             {/* Header with LastTuch logo + actions */}
//             <div className="flex items-center justify-between p-3 border-b border-border bg-background/70 backdrop-blur">
//               <div className="flex items-center gap-2">
//                 <img
//                   src={logo}
//                   alt="LastTuch logo"
//                   className="w-7 h-7 rounded-full ring-1 ring-primary/50"
//                 />
//                 <div className="leading-tight">
//                   <div className="text-sm font-semibold text-foreground">
//                     LastTuch — AI Assistant
//                   </div>
//                   <div className="text-[11px] text-muted-foreground">
//                     Friendly • Eco-minded • Helpful
//                   </div>
//                 </div>
//               </div>

//               <div className="flex items-center gap-1">
//                 {/* 🗑️ Reset session button */}
//                 <button
//                   className="rounded-md p-1 hover:bg-accent"
//                   aria-label="Reset chat session"
//                   title="Reset session"
//                   onClick={resetSession}
//                 >
//                   <Trash2 size={18} />
//                 </button>

//                 {/* ✖️ Close */}
//                 <button
//                   className="rounded-md p-1 hover:bg-accent"
//                   aria-label="Close"
//                   onClick={() => setOpen(false)}
//                 >
//                   <X size={18} />
//                 </button>
//               </div>
//             </div>

//             <CardContent className="p-0">
//               <div
//                 ref={viewportRef}
//                 className="max-h-[60vh] overflow-y-auto p-3 space-y-3 bg-card"
//               >
//                 {messages.map((m, i) => (
//                   <div
//                     key={i}
//                     className={`flex ${
//                       m.role === "user" ? "justify-end" : "justify-start"
//                     }`}
//                   >
//                     <div
//                       className={`rounded-2xl px-3 py-2 text-sm leading-relaxed shadow-sm whitespace-pre-wrap ${
//                         m.role === "user"
//                           ? "bg-primary text-primary-foreground"
//                           : "bg-muted text-foreground"
//                       }`}
//                       style={{ maxWidth: "85%" }}
//                     >
//                       {m.content}
//                     </div>
//                   </div>
//                 ))}

//                 {loading && (
//                   <div className="flex justify-start">
//                     <div className="rounded-2xl px-3 py-2 text-sm bg-muted text-foreground flex items-center gap-2">
//                       <Loader2 className="animate-spin" size={16} /> Thinking…
//                     </div>
//                   </div>
//                 )}
//               </div>

//               <div className="p-3 border-t border-border flex items-center gap-2 bg-background/60 backdrop-blur">
//                 <Input
//                   value={input}
//                   onChange={(e) => setInput(e.target.value)}
//                   onKeyDown={onKeyDown}
//                   placeholder="Ask about AI, web, cloud, pricing…"
//                   className="bg-background border-border"
//                 />
//                 <Button onClick={send} disabled={loading}>
//                   {loading ? (
//                     <Loader2 className="animate-spin" size={16} />
//                   ) : (
//                     <Send size={16} />
//                   )}
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       )}
//     </>
//   );
// }
