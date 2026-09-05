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
index.html                 marcação completa + sprite SVG dos ícones
assets/css/style.css       estilos (tokens → base → componentes → responsivo)
assets/js/main.js          menu mobile, header ao rolar, scrollspy, reveal
assets/img/                imagens já recortadas para os slots do site
topo.png perfil.png        fotos originais enviadas
icon1.png icon4.png iconpcd.png
exemplo.jpeg               mockup de referência
```

## Seções

1. **Hero** — manchete, data da eleição, CTA e marca, com onda em degradê
2. **Sobre** — "Quem é Helena Holanda", foto e três selos de valores
3. **Prioridades** — 4 cards: causa autista, neurodivergentes, PCDs, idosos
4. **Citação** — faixa full-bleed com a frase da campanha
5. **Juntos** — chamada final em turquesa
6. **Rodapé** — navegação, redes sociais e dados legais

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

## Pendências

- [ ] Links reais de Instagram, Facebook e WhatsApp no rodapé
- [ ] Páginas/âncoras de Notícias, Agenda e Contato (hoje apontam para `#`)
- [ ] Destino do botão "Quero apoiar" (formulário ou link externo)
- [ ] Trocar `og:image` por uma arte 1200×630 dedicada
