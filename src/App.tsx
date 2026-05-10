import { useEffect } from 'react';
import Header from './components/Header';
import ChatSection from './components/ChatSection';
import WordWheel from './components/WordWheel';
import Louvores from './components/Louvores';
import Store from './components/Store';
import Footer from './components/Footer';

import Livros from './pages/Livros';
import ProdutosDigitais from './pages/ProdutosDigitais';
import Novidades from './pages/Novidades';

export default function App() {
  const path = window.location.pathname;

  // Gerencia o scroll ao carregar a página ou voltar para a home
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const hash = window.location.hash;
    if (hash) {
      // Se houver um #loja na URL, espera o componente montar e rola suavemente
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // Se for carregamento limpo (sem #), garante o topo absoluto
      window.scrollTo(0, 0);
    }
  }, [path]); // Executa sempre que o caminho mudar

  if (path === '/livros') return <Livros />;
  if (path === '/produtos-digitais') return <ProdutosDigitais />;
  if (path === '/novidades') return <Novidades />;

  return (
    <div className="min-h-screen bg-[#020b18] text-stone-100 overflow-x-hidden">
      <Header />
      <ChatSection />
      <WordWheel />
      <Louvores />
      <Store />
      <Footer />
    </div>
  );
}