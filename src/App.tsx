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