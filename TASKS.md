# Tasks — portfólio como prova de venda

> **Status:** P0, P1 e P2 aplicados no código. O WhatsApp já está preenchido.
> Restam 2 pendências que dependem de dados que só você tem, listadas em
> "Pendências" no fim do arquivo. Enquanto o **domínio de produção** não for
> preenchido, o link colado no chat aparece sem imagem de preview.


**Contexto:** a página é enviada 1:1 para clientes com quem a conversa já começou (WhatsApp, e-mail, LinkedIn).
Não é página de captação. O objetivo é **um só**: quem abrir o link precisa concluir em 30 segundos que
vale a pena fechar com o Renato.

**Consequências disso:**
- Sem formulário, sem captação de lead.
- SEO não é prioridade — mas **Open Graph é**, porque o link é colado em chat.
- Preço fica de fora da página (vai na proposta, personalizado).
- Links quebrados são fatais: a pessoa específica **vai** clicar.
- A própria página é a demonstração do serviço. Performance e instrumentação viram argumento.

---

## P0 — Fazem a página funcionar como prova

### 1. Open Graph + preview do link
Hoje não existe nenhuma tag OG. Quando o link é colado no WhatsApp/LinkedIn, aparece preview vazio.
É literalmente a primeira impressão, antes do clique.

- [x] Adicionar `og:title`, `og:description`, `og:url`, `og:type`
- [x] Criar `og:image` 1200x630 — nome + "Landing pages e sites institucionais" + marcas atendidas
- [x] Adicionar `twitter:card` = `summary_large_image`
- [ ] Testar o preview real: colar o link num chat consigo mesmo antes de mandar pra cliente

**Pronto quando:** colar o link no WhatsApp mostra card com imagem, título e descrição.

---

### 2. Consertar os links do portfólio
Credibilidade morre aqui. O cliente clica.

- [x] `Campari Academy` → agora aponta para `campariacademy.com/pt-br` (site real)
- [x] `Batavo` → artigo do squad no LinkedIn, rotulado "Ver case"
- [x] `Coca-Cola Shoes` → artigo do squad no LinkedIn, rotulado "Ver case"
- [x] `Mercopar` → artigo do squad no LinkedIn, rotulado "Ver case"

**Decisão do Renato:** os 3 projetos sem site público apontam para o mesmo
artigo do LinkedIn sobre o squad de tecnologia da DZ. Ficam rotulados
"Ver case" (e não "Ver site ao vivo") para o clique ser honesto sobre o
destino. Se um dia houver um case individual por projeto, é o lugar de trocar.

**Pronto quando:** todo link abre algo, e o rótulo diz a verdade sobre o destino.

---

### 3. Reescrever o hero para tráfego quente
Hoje: *"Crio soluções digitais e landing pages para marcas que querem se destacar. Páginas bonitas, rápidas e fáceis de usar."*
Adjetivo genérico que todo concorrente também diz. E quem abre o link **já sabe** quem você é —
não precisa de "Olá, eu sou o Renato", precisa de motivo pra confiar.

- [x] Trocar headline por promessa concreta (resultado + rastreamento + velocidade)
- [x] ~~Subheadline puxando GA4/Pixel/Clarity~~ — revertido junto com a seção 5
- [x] Substituir CTA "Falar comigo" por retorno à conversa: `Continuar no WhatsApp`
- [x] Manter `Ver projetos` como CTA secundário

**Pronto quando:** o hero responde "por que ele e não a agência?" sem usar adjetivo vago.

---

### 4. Faixa de marcas logo abaixo do hero
Coca-Cola Shoes, Campari, Batavo, Neugebauer, Kempinski estão enterrados no meio da página,
com o mesmo peso visual de tudo. É o ativo mais forte que você tem.

- [x] Faixa horizontal de nomes (ou logos, se puder usar) direto abaixo do hero
- [x] Uma linha de contexto: "Projetos que ajudei a colocar no ar"

**Pronto quando:** os nomes grandes aparecem antes de qualquer scroll relevante.

---

### 5. ~~Seção de rastreamento~~ — REVERTIDA

A seção de medição chegou a ser construída e depois foi removida a pedido.
Junto com ela saíram todas as menções a GA4, Pixel e Clarity do texto da
página: hero, `<title>`, tags OG, lista de serviços, passo 4 do processo e a
imagem de preview do link — senão a página prometeria no topo o que não
entregava embaixo.

O posicionamento agora se apoia em três pernas: **as marcas atendidas**,
**velocidade** e **você fala direto com quem escreve o código**.

`js/analytics.js` continua no projeto. Ele instrumenta a sua própria página
(útil pra você saber se o cliente abriu e até onde leu) e não promete nada ao
cliente. Se quiser tirar de vez, é remover o arquivo e a tag `<script>`.

---

## P1 — Aumentam a taxa de fechamento

### 6. Portfólio: menos cards, mais substância
9 cards repetindo `"Desenvolvimento de software no squad tech da DZ Estúdio"` 9 vezes.
A repetição vira ruído e o leitor para de ler no terceiro. Nenhum card diz o que melhorou.

- [x] 8 projetos, ordenados por força de marca (Coza removido a pedido)
- [ ] Reescrever cada um como mini-case: desafio → o que eu fiz → resultado
- [ ] Trocar a linha repetida por descrição real da sua atuação naquele projeto
- [x] Onde não houver métrica, descrever a entrega técnica — **não inventar número**

**Pronto quando:** dá pra ler 4 cards seguidos sem sensação de repetição.

---

### 7. Seção "o que eu entrego" (sem preço)
Hoje não há nada dizendo o escopo do serviço. O cliente já em conversa quer confirmar
que você faz exatamente o que ele precisa.

- [x] Três blocos: landing page de conversão · site institucional · otimização de página existente
- [x] O que está incluso em cada um (design, dev, publicação, suporte pós-entrega)
- [x] **Sem valores** — preço vai na proposta

**Pronto quando:** o cliente reconhece o próprio problema em um dos três blocos.

---

### 8. "Como funciona" — reduzir risco percebido
Freelancer sozinho gera medo de sumiço. Processo visível mata isso.

- [x] 5 passos: conversa → proposta fechada → desenvolvimento com link ao vivo → entrega testada → acompanhamento
- [ ] Preencher prazos reais

**Pronto quando:** o cliente sabe o que acontece da assinatura até o pós-entrega.

---

### 9. Reescrever "Sobre" — cortar currículo
"Trajetória" com formação técnica de ensino médio não vende landing page. É seção de LinkedIn.

- [x] ~~Remover a timeline de empregos~~ — **revertido a pedido**. A trajetória
      voltou porque dá lastro ao "squad tech DZ Estúdio" que aparece nos 8 cards.
      Só a formação técnica de ensino médio ficou de fora.
- [x] Reduzir formação a uma linha discreta
- [x] Adicionar o trunfo contra agência: *"você fala direto com quem escreve o código"*
- [ ] **Em aberto:** as datas expõem que todo o portfólio é 2021–2023 (DZ) e que
      hoje você está na FUNDATEC. O cliente vai pensar "ele tem emprego fixo,
      vai ter tempo pro meu projeto?". Vale ter a resposta pronta na conversa,
      já que a página levanta a pergunta sem respondê-la.

**Pronto quando:** a trajetória comprova a experiência sem abrir flanco sobre disponibilidade.

---

### 10. Contato: parar de pedir desculpa
Hoje: *"Vamos conversar quando fizer sentido para você. Sem pressa e sem compromisso."*
Isso comunica baixa demanda. Você está se desculpando por existir — para alguém que **já** te procurou.

- [x] Novo título com direção clara ("Me manda o que você precisa")
- [x] Adicionar **WhatsApp** como canal principal (hoje só tem e-mail e LinkedIn)
- [ ] Informar tempo de resposta real
- [x] Manter e-mail e LinkedIn como secundários, menores

**Pronto quando:** o CTA devolve a pessoa pra conversa que já existe, em um clique.

---

## P2 — A página como demonstração do serviço

### 11. Instrumentar a própria página
Argumento comercial, não só técnico. O cliente que abrir o DevTools e ver GA4 + Clarity rodando
já foi convencido antes de ler qualquer texto. E te dá dado real pra usar como case.

- [ ] Instalar GA4
- [ ] Instalar Microsoft Clarity (gratuito — a gravação de sessão é a demo mais vendedora)
- [ ] Meta Pixel se houver intenção de tráfego pago
- [x] Eventos:
  - `whatsapp_click` — conversão principal
  - `cta_hero_click`
  - `portfolio_link_click` (com o nome da marca como parâmetro)
  - `scroll_75` — leitura profunda
  - `secao_vista` — mede até onde o cliente leu (portfólio, serviços, processo, contato)
- [ ] Marcar `whatsapp_click` como conversão no GA4
- [ ] Consentimento de cookies se for necessário pro seu contexto

**Pronto quando:** você consegue abrir o Clarity e assistir à sessão de um cliente real que recebeu o link.

---

### 12. Performance impecável — é o produto
Você vende "páginas rápidas". A sua precisa provar isso quando o cliente rodar o PageSpeed.

- [x] Rodar Lighthouse e mirar 95+ em Performance, Acessibilidade, Best Practices
- [x] Converter os PNGs do portfólio para WebP/AVIF (`imgs/` tem 9 prints)
- [x] Otimizar `imgs/photo.jpeg` (1125x1613 servida no hero)
- [x] Auto-hospedar as fontes ou reduzir os pesos carregados — hoje são 4 pesos de Hanken + 5 variações de Newsreader
- [x] `width`/`height` em todas as imagens pra evitar layout shift
- [ ] Testar em 4G real, não só no desktop

**Pronto quando:** dá pra mandar o print do Lighthouse junto com a proposta.

---

### 13. Checagem final antes de enviar o link
- [ ] Testar em celular real (é onde o cliente vai abrir, vindo do WhatsApp)
- [ ] Verificar todos os links externos
- [x] Conferir se o `<title>` faz sentido na aba
- [ ] Confirmar que o preview do link renderiza certo
- [ ] Ler a página inteira em voz alta procurando adjetivo vago ("bonito", "moderno", "elegante", "sofisticado")

---

## Fora de escopo (decidido)

- ~~Formulário de contato~~ — cliente já está em conversa
- ~~Captação de lead / newsletter~~
- ~~Preço na página~~ — vai na proposta
- ~~SEO / ranqueamento~~ — tráfego é direto, não orgânico

---

# Pendências — dependem de dados que só você tem

## 🔴 Bloqueiam o envio do link

**1. ~~WhatsApp~~ ✅ RESOLVIDO**
Os dois botões (hero e contato) apontam para `https://wa.me/5551985896322`.
O card de contato também exibe o número formatado, igual ao e-mail e ao LinkedIn.

**2. Domínio de produção** — `index.html` linhas 20, 23, 31, 34
Trocar `SEU-DOMINIO.vercel.app` pela URL real nas tags `og:url`, `og:image`,
`twitter:image` e `canonical`. **`og:image` precisa de URL absoluta** — caminho
relativo não renderiza preview nenhum.
Depois: colar o link num chat consigo mesmo e confirmar que o card aparece.

**3. Sua atuação em cada projeto** — `index.html`, 6 comentários `⚠️ PREENCHER`
Todos os cards estão com `"Desenvolvimento front-end · squad tech DZ Estúdio"`,
que é a mesma repetição do arquivo antigo, só que menos vezes. Escrever o que
você fez de fato em cada um — é o que separa "participei" de "eu construí".

## 🟡 Melhoram, mas não bloqueiam

**4. IDs de medição** — `js/analytics.js`, objeto `MEDICAO` no topo
GA4, Clarity e Meta Pixel. Enquanto ficarem vazios nada é carregado (nenhum
erro no console, nenhum cookie), mas a página também não mede nada. Depois de
preencher, marcar `contato_whatsapp` como conversão no painel do GA4.

**5. Prazos e tempo de resposta**
A seção "Processo" e o texto de contato foram escritos sem número justamente
para não inventar promessa. Se você tiver prazo típico ("proposta em 48h",
"LP em 10 dias úteis"), incluir — número específico converte mais que
"rápido". Só coloque o que você cumpre.

**6. Consentimento de cookies**
Sem banner hoje. Para uma página enviada 1:1 é uma escolha defensável, mas se
for rodar tráfego pago ou atender cliente com exigência de LGPD, precisa entrar.

**7. Foto do hero**
`imgs/photo.jpeg` é uma selfie de camisa de time, tirada de cima no chão de
casa. Numa página que serve de prova para cliente pagante, ela trabalha contra
todo o resto do texto. Uma foto simples, de frente, com fundo neutro resolve —
não precisa de estúdio.

**8. Testes finais**
Abrir num celular de verdade (é de lá que o cliente vem), clicar em todos os
links externos e rodar o PageSpeed na URL de produção — o número local não
vale, roda sem throttling de rede.

---

# O que foi feito nesta rodada

**Copy** — hero, faixa de marcas, portfólio, medição, serviços, processo,
sobre e contato reescritos. Timeline de empregos e formação removida.

**Estrutura** — 3 seções novas (medição, serviços, processo). Portfólio cortado
de 9 para 6 cards. Bettanin, Queijos President e Mercopar saíram — se quiser
de volta, estão no histórico do git.

**Links** — os 4 quebrados foram removidos (Campari ia para `#`; Batavo,
Coca-Cola Shoes e Mercopar caíam todos no mesmo artigo do LinkedIn). Os 3 cards
com site real mantiveram o link.

**Open Graph** — tags completas + imagem 1200x630 gerada. `og-image.html` na
raiz é o gerador: editar e tirar screenshot de página inteira para refazer.

**Medição** — `js/analytics.js` com GA4, Clarity e Pixel carregados sob demanda,
eventos em todos os CTAs, profundidade de scroll e visualização de seção.

**Performance** — 9 prints convertidos para WebP (3,7 MB → 306 KB), foto do hero
1125px → 505px (302 KB → 32 KB), fontes reduzidas de 9 para 3 variações.
Lighthouse: Acessibilidade 100, SEO 100, Best Practices 96, CLS 0.00.

**Acessibilidade** — `<main>` adicionado; 3 combinações de cor que falhavam em
contraste foram corrigidas (`--cor-texto-fraco`, `--cor-escuro-muted` e o rótulo
do botão de WhatsApp).

**Mobile** — a foto vinha antes do título, então a primeira tela era 100% retrato.
Invertido: título, subtítulo e os dois CTAs agora cabem sem rolar.
