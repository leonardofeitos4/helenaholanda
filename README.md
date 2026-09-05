# Helena Holanda 5508 — Landing Page

Landing page de campanha (PSD · Deputada Federal · CNPJ 68.491.829/0001-78),
construída em HTML, CSS e JavaScript puros — sem build, sem dependências.

## Rodar

Abra o `index.html` no navegador. Para testar com servidor local:

```bash
python -m http.server 8000
# depois acesse http://localhost:8000
```

## Estrutura

```
index.html                 página principal
historia.html              "Minha história" — trajetória de Helena
causa-autista.html         \
neurodivergentes.html       |  uma página por prioridade,
pcds.html                   |  abertas pelo "Saiba mais" dos cards
idosos.html                /
assets/css/style.css       estilos (tokens → base → componentes → responsivo)
assets/js/main.js          menu mobile, header ao rolar, scrollspy, reveal
assets/img/                imagens já recortadas para os slots do site
topo.png perfil.png        fotos originais enviadas
icon1.png icon4.png iconpcd.png
exemplo.jpeg               mockup de referência
```

Não há build: header, rodapé e sprite de ícones são repetidos em cada arquivo.
Ao mexer em um deles, replique nos demais.

## Seções

1. **Hero** — manchete, data da eleição, CTA e marca, com onda em degradê
2. **Sobre** — "Quem é Helena Holanda", foto e três selos de valores
3. **Prioridades** — 4 cards: causa autista, neurodivergentes, PCDs, idosos
4. **Citação** — faixa full-bleed com a frase da campanha
5. **Juntos** — chamada final em turquesa
6. **Rodapé** — marca, bloco legal da propaganda eleitoral e contatos

O bloco legal fica na mesma linha da marca, no formato exigido:
`Eleição 2026` / `Helena Maria Duarte de Holanda – Deputada Federal` /
`CNPJ 68.491.829/0001-78`. Para alterá-lo é preciso editar **os 6 arquivos HTML**.

## Identidade

Definida em tokens CSS no topo de `assets/css/style.css`:

| Token | Cor | Uso |
|---|---|---|
| `--pink` | `#e93a5d` | "Helena", botões, destaques |
| `--orange` | `#f5a623` | "Holanda", "5508", linhas de apoio |
| `--teal` | `#2bb8c9` | faixa "Juntos, podemos" |
| `--teal-logo` | `#35c6d8` | slogan "sempre fez o bem" |
| `--purple` | `#7e5fa8` | card "Dignidade aos idosos" |
| `--navy` / `--footer` | `#1f4e79` / `#0c2c4a` | títulos e rodapé |

**Fontes** (Google Fonts): `Fredoka` na marca, `Kaushan Script` no slogan e
nos títulos manuscritos, `Poppins` no restante.

O logo é montado em CSS (`.logo`, em `index.html`), não é imagem — escala pelo
`font-size` do bloco (`.logo--hero`, `.logo--footer`, etc.).

## Trocar as imagens

Substitua os arquivos em `assets/img/` mantendo os nomes:

| Arquivo | Onde aparece | Proporção ideal |
|---|---|---|
| `helena-hero.jpg` | fundo do hero | paisagem, ≥1600px de largura |
| `helena-sobre.jpg` | seção "Sobre" | retrato ~11:10 |
| `helena-citacao.jpg` | faixa da citação | paisagem panorâmica |
| `prioridade-1..4.jpg` | cards | paisagem ~3:2 |

As atuais foram recortadas das fotos originais; ao receber os arquivos em alta
resolução, é só sobrescrever.

## Contatos usados no site

- Instagram: <https://www.instagram.com/helenaholandahh/>
- WhatsApp: <https://wa.me/5583993287247> — (83) 99328-7247

Todos os botões "Quero apoiar", "Quero apoiar essa causa" e "Quero fazer parte"
abrem o WhatsApp com mensagem pré-preenchida. **Notícias** e **Agenda**, no menu,
apontam provisoriamente para o Instagram — troque quando existirem páginas próprias.

## Conteúdo da página "Minha história"

Escrito a partir de fontes públicas, listadas no rodapé da própria página
(Prefeitura de João Pessoa, Câmara Municipal de João Pessoa, imprensa local e
o registro de candidatura na Justiça Eleitoral). As propostas das 4 páginas de
prioridade são texto de campanha e **precisam ser revisadas e aprovadas** antes
de publicar.

## Pendências

- [ ] Revisar o texto das propostas com a candidata
- [ ] Facebook: não há link — o ícone foi retirado do rodapé
- [ ] Páginas próprias de Notícias e Agenda
- [ ] Trocar `og:image` por uma arte 1200×630 dedicada
- [ ] Fotos em alta resolução (as atuais foram recortadas dos materiais enviados)
