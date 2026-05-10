import Footer from '../components/Footer';
import { ShoppingBag, ArrowRight, ArrowLeft } from 'lucide-react';

const LIVROS_ITEMS = [
  {
    title: 'Café com Deus Pai Vol. 6 - 2026: Porções Diárias de Amor',
    description: 'Que tal desfrutar de um momento íntimo com alguém que te ama e tem as respostas para todas as suas aflições? Essa é a experiência que você encontra em cada página de Café com Deus Pai.',
    price: 'R$ 35,00',
    image: 'https://m.media-amazon.com/images/I/61YmetiyksL._SY522_.jpg',
    link: 'https://amzn.to/4u45UC8',
  },
  {
    title: 'Bíblia de Estudo Thomas Nelson NVI',
    description: 'A Bíblia de Estudo Thomas Nelson (BETN) é um marco na história das Bíblias comentadas, focada na teologia bíblica com mais de 50 mil recursos.',
    price: 'R$ 241,46',
    image: 'https://m.media-amazon.com/images/I/51Tjn7my04L._SY522_.jpg',
    link: 'https://amzn.to/4tjznGR',
  },
  {
    title: 'Cristianismo puro e simples Capa dura',
    description: 'C.S. Lewis explica as bases da fé cristã de forma simples e clara, em uma obra que se tornou um clássico da literatura espiritual.',
    price: 'R$ 32,10',
    image: 'https://m.media-amazon.com/images/I/91WAGXw7Y4L._SY522_.jpg',
    link: 'https://amzn.to/4nkRLhn',
  },
  {
    title: 'O Peregrino - Edição Luxo',
    description: 'A clássica alegoria de John Bunyan sobre a jornada da vida cristã, agora em uma edição especial para sua biblioteca.',
    price: 'R$ 49,90',
    image: 'https://m.media-amazon.com/images/I/81shY89662L._SY522_.jpg',
    link: 'https://amzn.to/3ZInR5K',
  },
];

export default function Livros() {
  return (
    <div className="min-h-screen bg-[#020b18] text-stone-100 overflow-x-hidden">
      <main className="py-20 bg-gradient-to-b from-[#020b18] via-[#061428] to-[#020b18]">
        <div className="max-w-6xl mx-auto px-4">
          
          {/* Botão Voltar para a Vitrine */}
          <a 
            href="/#loja" 
            className="inline-flex items-center gap-2 text-amber-300/60 hover:text-amber-300 transition-colors mb-16 text-sm uppercase tracking-widest font-bold group"
          >
            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" /> 
            Voltar para a Vitrine
          </a>

          {/* Cabeçalho da Página */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-amber-300/25" />
              <ShoppingBag size={28} className="text-amber-300" />
              <div className="h-px w-12 bg-amber-300/25" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-amber-100 mb-6" style={{ fontFamily: "'Cinzel', serif" }}>
              Livraria
            </h1>
            <p className="text-stone-400 max-w-2xl mx-auto text-lg" style={{ fontFamily: "'Lora', serif" }}>
              Obras selecionadas para iluminar sua caminhada e fortalecer sua jornada espiritual.
            </p>
          </div>

          {/* Grid de Produtos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {LIVROS_ITEMS.map((product, index) => (
              <a 
                key={index} 
                href={product.link} 
                target="_blank" 
                rel="noopener noreferrer"
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
                  <h4 className="text-amber-100 text-xl mb-4 leading-tight" style={{ fontFamily: "'Cinzel', serif" }}>
                    {product.title}
                  </h4>
                  <p className="text-stone-400 text-sm mb-8 flex-1 leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-amber-300 font-bold text-2xl" style={{ fontFamily: "'Cinzel', serif" }}>
                      {product.price}
                    </span>
                    <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-amber-300 text-[#020b18] font-bold group-hover:bg-amber-200 transition-all shadow-lg">
                      Comprar <ArrowRight size={16} />
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