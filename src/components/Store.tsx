import { ShoppingBag, ArrowRight } from 'lucide-react';

// --- 1. ÁREA DE CONFIGURAÇÃO (Altere os dados aqui) ---

const LIVROS_ITEMS = [
  {
    title: 'Café com Deus Pai Vol. 6 - 2026: Porções Diárias de Amor',
    description: 'Que tal desfrutar de um momento íntimo com alguém que te ama e tem as respostas para todas as suas aflições? Essa é a experiência que você encontra em cada página de Café com Deus Pai. ',
    price: 'R$ 35,00',
    image: 'https://m.media-amazon.com/images/I/61YmetiyksL._SY522_.jpg',
    link: 'https://amzn.to/4u45UC8', // Link para a página específica
  },
  {
    title: 'Bíblia de Estudo Thomas Nelson NVI, Capa luxo azul, Leitura Perfeita | Bíblia com mais de 50 mil recursos',
    description: 'A Bíblia de Estudo Thomas Nelson (BETN) é um marco na história das Bíblias comentadas. Diferentemente de outras Bíblias de estudo, a BETN tem como fio guia a teologia bíblica.',
    price: 'R$ 241,46',
    image: 'https://m.media-amazon.com/images/I/51Tjn7my04L._SY522_.jpg',
    link: 'https://amzn.to/4tjznGR',
  },
  {
    title: 'Cristianismo puro e simples Capa dura',
    description: 'Em um dos períodos mais sombrios da humanidade, a Segunda Guerra Mundial, C.S. Lewis foi convidado pela BBC a fazer uma série de palestras pelo rádio com o intuito de explicar bases da fé cristã de forma simples e clara.',
    price: 'R$ 32,10',
    image: 'https://m.media-amazon.com/images/I/91WAGXw7Y4L._SY522_.jpg',
    link: 'https://amzn.to/4nkRLhn',
  },
];

const DIGITAIS_ITEMS = [
  {
    title: 'Fundamentos da Fé Cristã - Por: Pastor Leandro Martinez',
    description: 'O curso Fundamentos da Fé Cristã é uma jornada essencial para todos que desejam compreender com profundidade as bases da fé cristã.',
    price: 'R$ 197,00',
    image: 'https://static-media.hotmart.com/TV4K9XloJdDKV9dWnLkmJ156Nlg=/filters:quality(100):format(webp)/klickart-prod/uploads/media/file/9405358/fundamentos_por_pr.jpg',
    link: 'https://go.hotmart.com/Q105763225D',
  },
  {
    title: 'O Panorama Bíblico Completo – Guia de Estudo da Bíblia de A a Z',
    description: 'O Panorama Bíblico Completo é um eBook digital com 280 páginas de conteúdo profundo, prático e transformador, que conduz o leitor em uma jornada de Gênesis a Apocalipse, explicando a Bíblia de forma clara e acessível.',
    price: 'R$ 39,90',
    image: 'https://static-media.hotmart.com/1c8aESk_lgJ-ZFmBv7urAfQmZ4c=/filters:background_color(white)/hotmart/product_pictures/6fed0346-466e-4ce2-ad4f-44c113517fb2/2.jpg',
    link: 'https://go.hotmart.com/X105763319V',
  },
  {
    title: 'COMBO EXCLUSIVO - 7 EBOOKS PARA SUA LIBERTAÇÃO PESSOAL E ESPIRITUAL!',
    description: 'Você sente que há algo te prendendo e quer conquistar a verdadeira liberdade? Chegou a hora de romper com as limitações e avançar em direção ao seu propósito! ',
    price: 'R$ 77,00',
    image: 'https://static-media.hotmart.com/Ep_BExb-Hdk61YHGtKOnxQrUm2U=/filters:background_color(white)/hotmart/product_pictures/ae595092-bfae-490a-8684-7baa1c003208/Designsemnome4.png',
    link: 'https://go.hotmart.com/I105763407I?dp=1',
  },
];

const NOVIDADES_ITEMS = [
  {
    title: 'Camiseta Jesus Vive',
    description: 'Camiseta Masculina Jesus Vive Moda Evangélica Camisa 100% Algodão',
    price: 'R$ 39,90',
    image: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-lwbq36i6yjrma2@resize_w900_nl.webp',
    link: 'https://s.shopee.com.br/1LcWP6XmGl?share_channel_code=1',
  },
  {
    title: 'Camiseta Jesus Cristo',
    description: 'Blusa Jesus Cristo Moda Evangélica Feminina Gospel 100% Algodão',
    price: 'R$ 30,81',
    image: 'https://down-br.img.susercontent.com/file/br-11134207-81z1k-meiovcpz943k14@resize_w900_nl.webp',
    link: 'https://s.shopee.com.br/4VZYB2etSM?share_channel_code=1',
  },
  {
    title: 'Adesivos Cristãos',
    description: 'Cartela Adesivo Vinil Cristão Gospel Jesus Biblia carro moto notebook bicicleta',
    price: 'R$ 19,90',
    image: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-lvdpl0grn8epce.webp',
    link: 'https://s.shopee.com.br/70Gt9lvhmG?share_channel_code=1',
  },
];

// --- 2. DEFINIÇÃO DE ESTRUTURA ---

interface Product {
  title: string;
  description: string;
  price: string;
  image: string;
  link: string;
}

interface Section {
  title: string;
  subtitle: string;
  pageLink: string;
  buttonLabel: string;
  items: Product[];
}

const sections: Section[] = [
  {
    title: 'Livros',
    subtitle: 'Leituras para fortalecer sua fé e sua caminhada.',
    pageLink: '/livros', // Link do botão principal da seção
    buttonLabel: 'Ver livros',
    items: LIVROS_ITEMS,
  },
  {
    title: 'Produtos Digitais',
    subtitle: 'PDFs e devocionais para oração, estudo e reflexão diária.',
    pageLink: '/produtos-digitais',
    buttonLabel: 'Ver digitais',
    items: DIGITAIS_ITEMS,
  },
  {
    title: 'Novidades',
    subtitle: 'Objetos, camisetas, brindes e itens especiais.',
    pageLink: '/novidades',
    buttonLabel: 'Ver novidades',
    items: NOVIDADES_ITEMS,
  },
];

// --- 3. COMPONENTE VISUAL ---

export default function Store() {
  return (
    <section
      id="loja"
      // Alterado de scroll-mt-20 para scroll-mt-24 para compensar a altura do header fixo
      className="scroll-mt-24 py-20 bg-gradient-to-b from-[#020b18] via-[#061428] to-[#020b18]"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px flex-1 bg-amber-300/25" />
            <ShoppingBag size={22} className="text-amber-300" />
            <div className="h-px flex-1 bg-amber-300/25" />
          </div>
          <h2 className="text-4xl font-bold text-amber-100 mb-3" style={{ fontFamily: "'Cinzel', serif" }}>
            Loja
          </h2>
          <p className="text-stone-400 max-w-2xl mx-auto text-base" style={{ fontFamily: "'Lora', serif" }}>
            Livros, conteúdos digitais e objetos para fortalecer sua caminhada espiritual.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-16">
          {sections.map((section) => (
            <div key={section.title}>
              <div className="mb-7 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                  <a href={section.pageLink}>
                    <h3 className="text-2xl md:text-3xl text-amber-200 hover:text-amber-100 transition-colors" style={{ fontFamily: "'Cinzel', serif" }}>
                      {section.title}
                    </h3>
                  </a>
                  <p className="text-stone-400 text-sm md:text-base mt-2" style={{ fontFamily: "'Lora', serif" }}>
                    {section.subtitle}
                  </p>
                </div>
                <a
                  href={section.pageLink}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-amber-300/25 text-amber-200 hover:bg-amber-300/10 hover:border-amber-300/50 transition-all text-sm font-semibold"
                >
                  {section.buttonLabel}
                  <ArrowRight size={15} />
                </a>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((product) => (
                  <a
                    key={product.title}
                    href={product.link}
                    className="group bg-[#07162c]/75 border border-amber-300/15 rounded-2xl overflow-hidden shadow-xl shadow-black/30 hover:border-amber-300/40 transition-all duration-300 flex flex-col"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#020b18]">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020b18]/65 via-transparent to-transparent" />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h4 className="text-amber-100 text-lg mb-2 group-hover:text-amber-200 transition-colors" style={{ fontFamily: "'Cinzel', serif" }}>
                        {product.title}
                      </h4>
                      <p className="text-stone-400 text-sm leading-relaxed mb-5 flex-1" style={{ fontFamily: "'Lora', serif" }}>
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-amber-300 font-bold text-xl" style={{ fontFamily: "'Cinzel', serif" }}>
                          {product.price}
                        </span>
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-300 text-[#020b18] group-hover:bg-amber-200 transition-all duration-300 text-sm font-semibold">
                          Ver
                          <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}