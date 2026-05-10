import Footer from '../components/Footer';
import { ShoppingBag, ArrowRight, ArrowLeft } from 'lucide-react';

const DIGITAIS_ITEMS = [
  {
    title: 'Fundamentos da Fé Cristã - Pastor Leandro Martinez',
    description: 'Uma jornada essencial para compreender com profundidade as bases da fé cristã em um curso completo.',
    price: 'R$ 197,00',
    image: 'https://static-media.hotmart.com/TV4K9XloJdDKV9dWnLkmJ156Nlg=/filters:quality(100):format(webp)/klickart-prod/uploads/media/file/9405358/fundamentos_por_pr.jpg',
    link: 'https://go.hotmart.com/Q105763225D',
  },
  {
    title: 'O Panorama Bíblico Completo – Guia de A a Z',
    description: '280 páginas de conteúdo profundo e transformador, percorrendo de Gênesis a Apocalipse de forma clara.',
    price: 'R$ 39,90',
    image: 'https://static-media.hotmart.com/1c8aESk_lgJ-ZFmBv7urAfQmZ4c=/filters:background_color(white)/hotmart/product_pictures/6fed0346-466e-4ce2-ad4f-44c113517fb2/2.jpg',
    link: 'https://go.hotmart.com/X105763319V',
  },
  {
    title: 'COMBO EXCLUSIVO - 7 EBOOKS PARA LIBERTAÇÃO',
    description: 'Um arsenal espiritual para romper limitações e avançar em direção ao seu propósito de vida.',
    price: 'R$ 77,00',
    image: 'https://static-media.hotmart.com/Ep_BExb-Hdk61YHGtKOnxQrUm2U=/filters:background_color(white)/hotmart/product_pictures/ae595092-bfae-490a-8684-7baa1c003208/Designsemnome4.png',
    link: 'https://go.hotmart.com/I105763407I?dp=1',
  },
];

export default function ProdutosDigitais() {
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
              Digitais
            </h1>
            <p className="text-stone-400 max-w-2xl mx-auto text-lg" style={{ fontFamily: "'Lora', serif" }}>
              Conteúdos práticos, guias e cursos para levar a Palavra onde quer que você esteja.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {DIGITAIS_ITEMS.map((product, index) => (
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
                      Acessar <ArrowRight size={16} />
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