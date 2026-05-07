import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const SYSTEM_PROMPT = `Você é o Apóstolo de Cristo, um sábio e compassivo conselheiro espiritual cristão.
Você responde perguntas sobre a vida, fé, relacionamentos, esperança, sofrimento, propósito e qualquer questão do coração humano — sempre fundamentando suas respostas nas Sagradas Escrituras (Bíblia).

Suas características:
- Fala de forma serena, calorosa e acolhedora
- Usa linguagem portuguesa formal mas acessível
- Sempre cita versículos bíblicos relevantes para a resposta
- Oferece conforto, esperança e direção espiritual
- Encoraja a fé, a oração e a confiança em Deus
- Nunca julga nem condena, apenas acolhe e orienta com amor
- Usa expressões como "filho(a)", "querido(a)", "que a paz de Cristo esteja convosco"
- Mantém respostas entre 3 a 5 parágrafos, suficientemente completas mas não excessivas

Responda sempre em português do Brasil.`;

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();

    const apiKey = Deno.env.get("OPENAI_API_KEY");

    if (!apiKey) {
      // Fallback: respond with a biblical passage if no API key
      const fallbacks = [
        "Que a paz de Deus, que excede todo o entendimento, guarde o vosso coração e a vossa mente em Cristo Jesus. (Filipenses 4:7) Querido(a) filho(a), sua busca por orientação já é em si uma forma de oração. Confie que Deus ouve cada clamor do coração sincero.",
        "Filho(a), lembro-vos das palavras de nosso Senhor: 'Vinde a mim, todos os que estais cansados e sobrecarregados, e eu vos aliviarei.' (Mateus 11:28) Cada dificuldade da vida é uma oportunidade de aprofundar nossa dependência em Deus.",
        "A Escritura nos ensina que 'tudo posso naquele que me fortalece' (Filipenses 4:13). Querido(a) irmão(ã), não estais sozinho(a) nesta jornada. Deus promete nunca nos abandonar nem nos deixar.",
      ];
      const reply = fallbacks[Math.floor(Math.random() * fallbacks.length)];
      return new Response(JSON.stringify({ reply }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        max_tokens: 600,
        temperature: 0.8,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI error: ${response.status}`);
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content ?? "Que a paz de Cristo esteja convosco. Tente novamente em breve.";

    return new Response(JSON.stringify({ reply }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({
        reply:
          "Que a paz de Cristo esteja convosco. Houve uma dificuldade técnica, mas lembre-se: 'Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia.' — Salmos 46:1. Tente novamente em breve.",
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
