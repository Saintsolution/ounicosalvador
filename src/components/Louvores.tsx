import { useState } from 'react';
import { Music, Play } from 'lucide-react';

interface Short {
  id: string;
  title: string;
  artist: string;
}

const shorts: Short[] = [
  { id: 'g54SFNNW2m8', title: 'Vai Ficar Tudo Bem', artist: 'Raquel Olliver' },
  { id: 'fYq6rFPeMt4', title: 'Ninguém Explica Deus', artist: 'Gabriela Rocha' },
  { id: 'qWmQlXY4pQY', title: 'Todavia Me Alegrarei', artist: 'Sarah Farias' },
  { id: 'GMhCuHo3sNM', title: 'Meu Mestre', artist: 'Lázaro' },
  { id: 'yhTwh1WEj70', title: 'Uma Nova História', artist: 'Fernandinho' },
  { id: 'qVtAq1d3KBw', title: 'Sem Palavras', artist: 'Cassiane' },
  { id: 'aBlwnOwSmQs', title: 'Tá Chorando Por Quê?', artist: 'Jeyzer Maia' },
  { id: 'yjvDi6sX7cU', title: 'Acalma Minha Tempestade', artist: 'Frei Gilson' },
];

export default function Louvores() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  return (
    <section
  id="louvores"
  className="scroll-mt-20 py-20 bg-gradient-to-b from-[#020b18] via-[#061428] to-[#020b18]"
>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px flex-1 bg-amber-300/25" />
            <Music size={22} className="text-amber-300" />
            <div className="h-px flex-1 bg-amber-300/25" />
          </div>

          <h2
            className="text-4xl font-bold text-amber-100 mb-3"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Louvores
          </h2>

          <p
            className="text-stone-400 max-w-xl mx-auto text-base"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Louvores para acalmar a alma, fortalecer a fé e aproximar o coração de Deus.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {shorts.map((short) => (
            <div
              key={short.id}
              className="group bg-[#07162c]/75 border border-amber-300/15 rounded-2xl overflow-hidden shadow-xl shadow-black/30 hover:border-amber-300/40 transition-all duration-300"
            >
              <div className="relative aspect-[9/16] bg-black overflow-hidden">
                {playingId === short.id ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${short.id}?autoplay=1&rel=0`}
                    title={short.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img
                      src={`https://img.youtube.com/vi/${short.id}/hqdefault.jpg`}
                      alt={short.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />

                    <button
                      onClick={() => setPlayingId(short.id)}
                      className="absolute inset-0 flex items-center justify-center"
                      aria-label={`Tocar ${short.title}`}
                    >
                      <div className="w-14 h-14 rounded-full bg-amber-300/90 flex items-center justify-center shadow-lg shadow-black/40 group-hover:scale-110 transition-transform duration-300">
                        <Play size={21} className="text-[#020b18] ml-1" fill="#020b18" />
                      </div>
                    </button>
                  </>
                )}
              </div>

              <div className="p-4">
                <h3
                  className="text-amber-100 font-semibold text-sm mb-1"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {short.title}
                </h3>

                <p
                  className="text-stone-400 text-xs"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  {short.artist}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}