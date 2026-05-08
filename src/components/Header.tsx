import { useState, useEffect } from 'react';
import { Menu, X, Cross } from 'lucide-react';

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Conversa com o Mestre', href: '#conversa' },
  { label: 'Palavra do Dia', href: '#palavra' },
  { label: 'Louvores', href: '#louvores' },
  { label: 'Loja', href: '#loja' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header id="inicio" className="relative bg-[#020b18]">
      {/* Banner com texto em código */}
      <div className="relative w-full overflow-hidden bg-[#020b18] h-[300px] sm:h-[420px] md:h-[560px] lg:h-[680px]">
        <img
          src="/banner_site.png"
          alt="O Único Salvador"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center center' }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#020b18]/75 via-[#020b18]/30 to-[#020b18]/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[#020b18]/85" />

        <div className="absolute inset-0 flex items-center">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
            <div className="max-w-[620px] text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4 text-amber-300">
                <div className="h-px w-16 bg-amber-300/50" />
                <Cross size={22} />
                <div className="h-px w-16 bg-amber-300/50" />
              </div>

              <h1
                className="text-[42px] sm:text-6xl md:text-7xl lg:text-8xl text-amber-100 leading-[0.95] tracking-wide drop-shadow-2xl"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                O Único
                <br />
                Salvador
              </h1>

              <p
                className="mt-5 text-xs sm:text-base md:text-xl text-stone-300 tracking-[0.22em] uppercase"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Uma jornada de fé, reflexão e esperança.
              </p>

              <p
                className="hidden sm:block mt-8 text-stone-400 text-sm md:text-base leading-relaxed max-w-lg"
                style={{ fontFamily: "'Lora', serif" }}
              >
                “Porque há um só Deus, e um só mediador entre Deus e os homens,
                Jesus Cristo, homem.”
                <br />
                <span className="text-amber-300/80">1 Timóteo 2:5</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 border-y border-amber-300/10 ${
          scrolled
            ? 'bg-[#020b18]/95 backdrop-blur-md shadow-lg shadow-black/30'
            : 'bg-[#020b18]/90 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
          <a
            href="#inicio"
            className="flex items-center gap-2 text-amber-300 font-bold tracking-widest text-xs sm:text-sm uppercase hover:text-amber-200 transition-colors"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            <Cross size={18} />
            <span>O Único Salvador</span>
          </a>

          <ul className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-stone-300 hover:text-amber-300 transition-colors text-sm font-medium tracking-wide"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden text-stone-300 hover:text-amber-300 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[#020b18] border-t border-amber-300/10 px-4 py-4">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-stone-300 hover:text-amber-300 transition-colors text-sm font-medium"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}