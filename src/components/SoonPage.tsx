import { ArrowLeft, Sparkles } from 'lucide-react';

interface SoonPageProps {
  title: string;
  subtitle?: string;
}

export default function SoonPage({ title, subtitle }: SoonPageProps) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#020b18] to-[#061428] text-stone-100">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-100 transition-colors text-sm"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          <ArrowLeft size={18} />
          Voltar para O Único Salvador
        </a>

        <section className="min-h-[75vh] flex items-center justify-center text-center">
          <div className="relative max-w-2xl">
            <div className="absolute -inset-10 bg-amber-300/5 blur-3xl rounded-full" />

            <div className="relative bg-[#07162c]/70 border border-amber-300/15 rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/40">
              <Sparkles className="w-12 h-12 text-amber-300 mx-auto mb-6" />

              <p className="uppercase tracking-[0.35em] text-xs text-amber-300 mb-4">
                {title}
              </p>

              <h1
                className="text-4xl md:text-5xl text-amber-100 mb-5"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Em Breve Teremos Novidades
              </h1>

              <p
                className="text-stone-400 text-base md:text-lg leading-relaxed"
                style={{ fontFamily: "'Lora', serif" }}
              >
                {subtitle ||
                  'Estamos preparando esta área com carinho para fortalecer ainda mais sua caminhada espiritual.'}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}