import { Instagram, Youtube } from 'lucide-react';

function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.77 1.54V6.79a4.85 4.85 0 01-1-.1z" />
    </svg>
  );
}

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Conversa', href: '#conversa' },
  { label: 'Palavra do Dia', href: '#palavra' },
  { label: 'Louvores', href: '#louvores' },
  { label: 'Loja', href: '#loja' },
];

export default function Footer() {
  return (
    <footer className="relative bg-black overflow-hidden border-t border-amber-300/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.14),transparent_55%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 py-14">
        <div className="text-center">
          <h3
            className="text-3xl md:text-4xl text-amber-100 mb-3"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            O Único Salvador
          </h3>

          <p
            className="text-stone-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed mb-8"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Um espaço de fé, reflexão, louvor e fortalecimento espiritual.
          </p>

          <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-stone-400 hover:text-amber-200 transition-colors text-sm"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="max-w-md mx-auto mb-10 rounded-3xl border border-amber-300/15 bg-[#07162c]/60 p-6 shadow-2xl shadow-black/30">
            <p
              className="text-amber-200 text-lg mb-3"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Apoie esta missão
            </p>

            <p
              className="text-stone-400 text-sm leading-relaxed mb-5"
              style={{ fontFamily: "'Lora', serif" }}
            >
              Para manter esta página funcionando, cobrindo os custos de IA e
              permitindo que mais pessoas recebam uma palavra de fé, sua
              contribuição é bem-vinda.
            </p>

            <img
              src="/qrcode.png"
              alt="QR Code Pix"
              className="w-40 h-40 mx-auto rounded-xl bg-white p-2 mb-4"
            />

            <p className="text-stone-500 text-xs mb-1">Chave Pix</p>

            <p className="text-amber-300 text-sm break-all">
              contato@saintsolution.com.br
            </p>
          </div>

          <div className="flex items-center justify-center gap-5 mb-10">
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#07162c]/80 border border-amber-300/15 hover:border-amber-300/50 hover:bg-[#0b2344] text-stone-300 hover:text-amber-200 flex items-center justify-center transition-all duration-300 shadow-lg shadow-black/30" aria-label="Instagram">
              <Instagram size={20} />
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#07162c]/80 border border-amber-300/15 hover:border-amber-300/50 hover:bg-[#0b2344] text-stone-300 hover:text-amber-200 flex items-center justify-center transition-all duration-300 shadow-lg shadow-black/30" aria-label="TikTok">
              <TikTokIcon size={20} />
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#07162c]/80 border border-amber-300/15 hover:border-amber-300/50 hover:bg-[#0b2344] text-stone-300 hover:text-amber-200 flex items-center justify-center transition-all duration-300 shadow-lg shadow-black/30" aria-label="YouTube">
              <Youtube size={20} />
            </a>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-300/20 to-transparent mb-6" />

          <div
            className="flex flex-col md:flex-row items-center justify-between gap-3 w-full text-stone-600 text-xs"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            <p>© {new Date().getFullYear()} O Único Salvador. Todos os direitos reservados.</p>
            <p className="text-stone-700">Caminho • Verdade • Vida</p>
          </div>
        </div>
      </div>
    </footer>
  );
}