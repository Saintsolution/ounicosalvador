import { useState, useRef, useEffect } from 'react';
import { Send, BookOpen } from 'lucide-react';

interface Message {
  role: 'user' | 'apostle';
  content: string;
  timestamp: Date;
}

export default function ChatSection() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'apostle',
      content:
        'A paz esteja contigo. Aproxima-te com calma. O que pesa em teu coração hoje?',
      timestamp: new Date(),
    },
  ]);

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  }, [messages, loading]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = {
      role: 'user',
      content: text,
      timestamp: new Date(),
    };

    const nextMessages = [...messages, userMsg];

    setMessages(nextMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: nextMessages.map((m) => ({
            role: m.role === 'apostle' ? 'assistant' : 'user',
            content: m.content,
          })),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `Erro HTTP ${response.status}`);
      }

      setMessages((prev) => [
        ...prev,
        {
          role: 'apostle',
          content:
            data.reply ||
            'Permanece em paz. Houve silêncio por um instante, mas a luz não se apagou.',
          timestamp: new Date(),
        },
      ]);
    } catch (error) {
      console.error('Erro no chat:', error);

      setMessages((prev) => [
        ...prev,
        {
          role: 'apostle',
          content:
            'Permanece em paz. Um obstáculo surgiu neste diálogo. Respira, silencia um instante e tenta novamente.',
          timestamp: new Date(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="conversa"
      className="scroll-mt-20 py-20 bg-gradient-to-b from-[#020b18] via-[#061428] to-[#020b18]"
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px flex-1 bg-amber-300/25" />
            <BookOpen size={22} className="text-amber-300" />
            <div className="h-px flex-1 bg-amber-300/25" />
          </div>

          <h2
            className="text-4xl font-bold text-amber-100 mb-3"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Conversa com o Mestre
          </h2>

          <p
            className="text-stone-400 text-base max-w-xl mx-auto"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Faça suas perguntas sobre a vida, fé e propósito. O Apóstolo de Cristo
            responderá com serenidade e sabedoria espiritual.
          </p>
        </div>

        <div className="flex gap-6 items-start flex-col md:flex-row">
          <div className="w-full md:w-44 flex-shrink-0 flex flex-col items-center justify-center">
  <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-amber-300/40 shadow-xl shadow-amber-300/10 mb-3 bg-[#061428] mx-auto">
              <img
                src="/apostolo.png"
                alt="Apóstolo de Cristo"
                className="w-full h-full object-cover"
              />
            </div>

            <p
              className="text-amber-300 font-semibold text-sm text-center"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Apóstolo
              <br />
              de Cristo
            </p>

            <p
              className="text-stone-500 text-xs text-center mt-1"
              style={{ fontFamily: "'Lora', serif" }}
            >
              Reflexões de fé
              <br />
              e esperança
            </p>
          </div>

          <div className="flex-1 flex flex-col w-full">
            <div
              className="bg-[#020b18]/70 border border-amber-300/15 rounded-3xl flex flex-col shadow-2xl shadow-black/40 overflow-hidden"
              style={{ height: '440px' }}
            >
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${
                      msg.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-amber-300/15 text-amber-50 rounded-br-sm border border-amber-300/25'
                          : 'bg-[#07162c]/90 text-stone-200 rounded-bl-sm border border-amber-300/10'
                      }`}
                      style={{ fontFamily: "'Lora', serif" }}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}

                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-[#07162c]/90 border border-amber-300/10 rounded-2xl rounded-bl-sm px-4 py-3">
                      <span className="flex gap-1">
                        <span className="w-2 h-2 bg-amber-300 rounded-full animate-bounce" />
                        <span
                          className="w-2 h-2 bg-amber-300 rounded-full animate-bounce"
                          style={{ animationDelay: '150ms' }}
                        />
                        <span
                          className="w-2 h-2 bg-amber-300 rounded-full animate-bounce"
                          style={{ animationDelay: '300ms' }}
                        />
                      </span>
                    </div>
                  </div>
                )}

                <div ref={bottomRef} />
              </div>

              <div className="border-t border-amber-300/15 p-3 flex gap-2 bg-[#020b18]/80">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Faça sua pergunta ao Apóstolo..."
                  className="flex-1 bg-[#07162c]/80 border border-amber-300/15 rounded-xl px-4 py-2.5 text-stone-200 placeholder-stone-500 text-sm focus:outline-none focus:border-amber-300/50 transition-colors"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                />

                <button
                  onClick={sendMessage}
                  disabled={loading || !input.trim()}
                  className="bg-amber-300 hover:bg-amber-200 disabled:opacity-50 disabled:cursor-not-allowed text-[#020b18] rounded-xl px-4 py-2.5 transition-colors flex items-center gap-1.5 text-sm font-medium"
                >
                  <Send size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}