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
      {/* Banner */}
      <div className="relative w-full overflow-hidden bg-[#020b18]">
        <img
          src="/banner_site.png"
          alt="O Único Salvador"
          className="w-full h-auto block"
        />

        {/* Vinheta suave */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-[#020b18]/70" />
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
          {/* Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-2 text-amber-300 font-bold tracking-widest text-xs sm:text-sm uppercase hover:text-amber-200 transition-colors"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            <Cross size={18} />
            <span>O Único Salvador</span>
          </a>

          {/* Desktop menu */}
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

          {/* Mobile button */}
          <button
            className="md:hidden text-stone-300 hover:text-amber-300 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
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