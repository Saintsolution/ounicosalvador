import { ShoppingBag, ArrowRight } from 'lucide-react';

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
    pageLink: '/livros',
    buttonLabel: 'Ver livros',
    items: [
      {
        title: 'Onde Está Seu Coração?',
        description: 'Uma reflexão sobre prioridades, fé e escolhas da alma.',
        price: 'R$ 45,00',
        image: '/livro01.png',
        link: '/livros',
      },
      {
        title: 'Eu e Minha Boca Grande',
        description: 'Um chamado ao domínio da língua e à sabedoria no falar.',
        price: 'R$ 39,00',
        image: '/livro02.png',
        link: '/livros',
      },
      {
        title: 'Paulo, o Maior Líder do Cristianismo',
        description: 'A jornada, coragem e liderança espiritual do apóstolo Paulo.',
        price: 'R$ 69,00',
        image: '/livro03.png',
        link: '/livros',
      },
    ],
  },
  {
    title: 'Produtos Digitais',
    subtitle: 'PDFs e devocionais para oração, estudo e reflexão diária.',
    pageLink: '/produtos-digitais',
    buttonLabel: 'Ver digitais',
    items: [
      {
        title: 'Uma Vida com Propósitos',
        description: 'Um guia digital para alinhar sua rotina com fé e direção.',
        price: 'R$ 25,00',
        image: '/pdf01.png',
        link: '/produtos-digitais',
      },
      {
        title: 'Pão Diário',
        description: 'Reflexões simples para alimentar o coração todos os dias.',
        price: 'R$ 39,00',
        image: '/pdf02.png',
        link: '/produtos-digitais',
      },
      {
        title: 'Bom Dia Espírito Santo',
        description: 'Meditações para começar o dia com presença, paz e oração.',
        price: 'R$ 29,00',
        image: '/pdf03.png',
        link: '/produtos-digitais',
      },
    ],
  },
  {
    title: 'Novidades',
    subtitle: 'Objetos, camisetas, brindes e itens especiais.',
    pageLink: '/novidades',
    buttonLabel: 'Ver novidades',
    items: [
      {
        title: 'Camiseta Não Temas',
        description: 'Uma peça de fé para vestir coragem e esperança.',
        price: 'R$ 79,00',
        image: '/objeto01.png',
        link: '/novidades',
      },
      {
        title: 'Adesivos Sortidos (10)',
        description: 'Mensagens cristãs para compartilhar luz em pequenos detalhes.',
        price: 'R$ 10,00',
        image: '/objeto02.png',
        link: '/novidades',
      },
      {
        title: 'Camiseta Eu Nasci de Novo',
        description: 'Uma declaração de renovação, fé e nova caminhada.',
        price: 'R$ 59,00',
        image: '/objeto03.png',
        link: '/novidades',
      },
    ],
  },
];

export default function Store() {
  return (
    <section
      id="loja"
      className="scroll-mt-20 py-20 bg-gradient-to-b from-[#020b18] via-[#061428] to-[#020b18]"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px flex-1 bg-amber-300/25" />
            <ShoppingBag size={22} className="text-amber-300" />
            <div className="h-px flex-1 bg-amber-300/25" />
          </div>

          <h2
            className="text-4xl font-bold text-amber-100 mb-3"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Loja
          </h2>

          <p
            className="text-stone-400 max-w-2xl mx-auto text-base"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Livros, conteúdos digitais e objetos para fortalecer sua caminhada espiritual.
          </p>
        </div>

        <div className="space-y-16">
          {sections.map((section) => (
            <div key={section.title}>
              <div className="mb-7 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                  <a href={section.pageLink}>
                    <h3
                      className="text-2xl md:text-3xl text-amber-200 hover:text-amber-100 transition-colors"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      {section.title}
                    </h3>
                  </a>

                  <p
                    className="text-stone-400 text-sm md:text-base mt-2"
                    style={{ fontFamily: "'Lora', serif" }}
                  >
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
                      <h4
                        className="text-amber-100 text-lg mb-2 group-hover:text-amber-200 transition-colors"
                        style={{ fontFamily: "'Cinzel', serif" }}
                      >
                        {product.title}
                      </h4>

                      <p
                        className="text-stone-400 text-sm leading-relaxed mb-5 flex-1"
                        style={{ fontFamily: "'Lora', serif" }}
                      >
                        {product.description}
                      </p>

                      <div className="flex items-center justify-between gap-3">
                        <span
                          className="text-amber-300 font-bold text-xl"
                          style={{ fontFamily: "'Cinzel', serif" }}
                        >
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