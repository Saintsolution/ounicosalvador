import { useState } from 'react';
import { verses } from '../data/verses';
import { BookOpen, RefreshCw, Sparkles } from 'lucide-react';

export default function WordWheel() {
  const getRandomVerse = () => {
    return verses[Math.floor(Math.random() * verses.length)];
  };

  const [currentVerse, setCurrentVerse] = useState(getRandomVerse);

  const changeVerse = () => {
    setCurrentVerse(getRandomVerse());
  };

  return (
    <section
      id="palavra"
      className="scroll-mt-20 py-20 bg-gradient-to-b from-[#020b18] via-[#07162c] to-[#020b18]"
    >
      <div className="max-w-5xl mx-auto px-4">
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
            Palavra do Dia
          </h2>

          <p
            className="text-stone-400 max-w-lg mx-auto text-base"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Uma mensagem para iluminar sua caminhada. Receba, medite e siga em paz.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute -inset-8 bg-amber-300/5 blur-3xl rounded-full" />

          <div className="relative bg-gradient-to-br from-[#07162c]/95 to-[#020b18]/95 border border-amber-300/20 rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/40 overflow-hidden text-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,179,106,0.12),transparent_45%)]" />

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 text-amber-300 mb-8">
                <Sparkles size={16} />
                <span
                  className="uppercase tracking-[0.35em] text-xs font-semibold"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  Receba a Palavra
                </span>
                <Sparkles size={16} />
              </div>

              <div className="text-amber-300/70 text-6xl font-serif mb-2 leading-none">
                “
              </div>

              <p
                className="text-stone-100 text-2xl md:text-4xl leading-relaxed mb-8 italic"
                style={{ fontFamily: "'Lora', serif" }}
              >
                {currentVerse.text}
              </p>

              <div className="flex items-center gap-3 mb-8">
                <div className="h-px flex-1 bg-amber-300/20" />
                <span
                  className="text-amber-300 text-sm font-semibold"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {currentVerse.reference}
                </span>
                <div className="h-px flex-1 bg-amber-300/20" />
              </div>

              <button
                onClick={changeVerse}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-amber-300/30 text-amber-200 hover:bg-amber-300/10 hover:border-amber-300/60 transition-all duration-300"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                <RefreshCw size={16} />
                Receber nova palavra
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}