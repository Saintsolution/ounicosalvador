import Footer from '../components/Footer';
import { ShoppingBag, ArrowRight, ArrowLeft } from 'lucide-react';

const NOVIDADES_ITEMS = [
  {
    title: 'Camiseta Não Temas',
    description: 'Conforto e propósito em uma peça exclusiva para vestir sua coragem cristã.',
    price: 'R$ 79,00',
    image: '/objeto01.png',
    link: '#',
  },
  {
    title: 'Adesivos Sortidos (10 unidades)',
    description: 'Pequenos lembretes da luz divina para decorar seus objetos favoritos.',
    price: 'R$ 10,00',
    image: '/objeto02.png',
    link: '#',
  },
  {
    title: 'Camiseta Eu Nasci de Novo',
    description: 'Uma declaração pública de renovação e compromisso com sua nova vida em Cristo.',
    price: 'R$ 59,00',
    image: '/objeto03.png',
    link: '#',
  },
  {
    title: 'Boné Fé Inabalável',
    description: 'Acessório de alta qualidade com bordado minimalista para testemunhar sua fé.',
    price: 'R$ 45,00',
    image: '/objeto01.png', // Substitua pela imagem real depois
    link: '#',
  },
];

export default function Novidades() {
  return (
    <div className="min-h-screen bg-[#020b18] text-stone-100 overflow-x-hidden">
      <main className="py-20 bg-gradient-to-b from-[#020b18] via-[#061428] to-[#020b18]">
        <div className="max-w-6xl mx-auto px-4">
          
          {/* Botão Voltar para a Vitrine ajustado */}
          <a 
            href="/#loja" 
            className="inline-flex items-center gap-2 text-amber-300/60 hover:text-amber-300 transition-colors mb-16 text-sm uppercase tracking-widest font-bold group"
          >
            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" /> 
            Voltar para a Vitrine
          </a>

          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-amber-300/25" />
              <ShoppingBag size={28} className="text-amber-300" />
              <div className="h-px w-12 bg-amber-300/25" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-amber-100 mb-6" style={{ fontFamily: "'Cinzel', serif" }}>
              Especiais
            </h1>
            <p className="text-stone-400 max-w-2xl mx-auto text-lg" style={{ fontFamily: "'Lora', serif" }}>
              Produtos exclusivos e itens de vestuário feitos para quem não tem vergonha de carregar sua fé.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {NOVIDADES_ITEMS.map((product, index) => (
              <a 
                key={index} 
                href={product.link} 
                className="group bg-[#07162c]/75 border border-amber-300/15 rounded-2xl overflow-hidden shadow-2xl hover:border-amber-300/40 transition-all flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#020b18]">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-amber-100 text-xl mb-4 leading-tight" style={{ fontFamily: "'Cinzel', serif" }}>
                    {product.title}
                  </h2>
                  <p className="text-stone-400 text-sm mb-8 flex-1 leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-amber-300 font-bold text-2xl" style={{ fontFamily: "'Cinzel', serif" }}>
                      {product.price}
                    </span>
                    <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-amber-300 text-[#020b18] font-bold group-hover:bg-amber-200 transition-all shadow-lg">
                      Ver Detalhes <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}