# projeto-youtubePage

Projeto front-end inspirado no YouTube, criado para me desafiar e consolidar conhecimentos em JavaScript logo após finalizar o módulo de Fundamentos JS do Dev Quest (curso certificado pelo MEC) e o curso Dev Art do Gustavo Campelo. Foram 3 semanas intensas de código, aprendizado e dúvidas. O fluxo de OAuth foi, sem exagero, a parte mais desafiadora, entender cada etapa e fazer tudo funcionar foi um divisor de águas. Este projeto marca essa evolução, com uma interface real, dados dinâmicos, autenticação e responsividade.

## História do projeto

Eu queria algo maior do que exercícios de aula. Algo que parecesse real, com impacto visual e com dados reais vindo da API. A escolha foi óbvia: o YouTube. A cada etapa, da primeira barra de busca até a autenticação, eu testava limites e corrigia detalhes. O resultado é uma página interativa que conversa com o Google, carrega dados do usuário e transforma esses dados em uma experiência fluida. Esse projeto não é o fim, é o começo do próximo passo.

## Objetivo

Simular a experiência do YouTube e treinar JavaScript na prática, com foco em consumo de API, manipulação do DOM e organização de código em módulos.

## O que o projeto faz

- Renderiza um layout inspirado no YouTube (header, sidebar, filtros e grade de vídeos).
- Autentica com Google OAuth 2.0 e guarda o token com expiração no `localStorage`.
- Busca dados do canal logado e inscrições via YouTube Data API v3.
- Lista vídeos curtidos pelo usuário, com duração e tempo relativo formatados.
- Cria dinamicamente elementos no DOM e atualiza a UI após o login.
- Abre pesquisa no YouTube usando o texto digitado na barra de busca.

## Interações implementadas

- Barra de pesquisa interativa (enter e clique na lupa).
- Sidebar com botões interativos e comportamento de “mostrar mais”.
- Inscrições renderizadas de forma dinâmica e interativa.
- Vídeos clicáveis levando ao vídeo real curtido pelo usuário.
- Botões de criação, notificações e perfil com estados visuais.

## Tecnologias e conceitos praticados

- HTML sem frameworks, com semântica e estrutura modular.
- CSS com foco em layout flex, sticky e ajustes de responsividade.
- JavaScript moderno (ES Modules, `import` e `export`).
- Funções assíncronas com `async` e `await`.
- `fetch` com headers de autenticação para a API do YouTube.
- Persistência local com `localStorage` e controle de expiração do token.
- Manipulação intensa de DOM (criação, alteração e remoção de elementos).
- Formatação de tempo e duração a partir dos dados da API.
- Organização em camadas (services, data, DOM e components).
- Tratamento de erros e verificações básicas de segurança.

## Como usar (passo a passo)

1. Abra o projeto em um servidor local (ex: Live Server).
2. Acesse `index.html` no navegador.
3. Clique em “Entrar com Google”.
4. Faça login na sua conta.
5. Conclua a autenticação e permita o acesso solicitado.
6. Após a permissão, o projeto carrega os seus dados e libera todas as interações.

> Observação: o acesso a dados reais depende do OAuth e da permissão concedida pelo usuário.

## Estrutura de pastas (completa)

```
.
├─ .git/
├─ .gitignore
├─ .vscode/
│  └─ settings.json
├─ assets/
│  ├─ favicon/
│  │  └─ favicon.ico
│  ├─ icons/
│  │  ├─ filled/
│  │  │  ├─ ajuda_Filled.svg
│  │  │  ├─ bandeirinha_Filled.svg
│  │  │  ├─ feedback_Fillled.svg
│  │  │  ├─ games_Filled.svg
│  │  │  ├─ home_Filled.svg
│  │  │  ├─ Liked_videoFilled.svg
│  │  │  ├─ login_filled.svg
│  │  │  ├─ movie_Filled.svg
│  │  │  ├─ myVideo_filled.svg
│  │  │  ├─ news_Filled.svg
│  │  │  ├─ notiffication_filled.svg
│  │  │  ├─ school_filled.svg
│  │  │  ├─ settings_Filled.svg
│  │  │  ├─ shops_filled.svg
│  │  │  ├─ sports_filled.svg
│  │  │  ├─ subscriptions_filled.svg
│  │  │  └─ watchLater_Filled.svg
│  │  ├─ geral/
│  │  │  ├─ add_Icon.svg
│  │  │  ├─ arrow_Down.svg
│  │  │  ├─ arrow_Right.svg
│  │  │  ├─ arrow_Up.svg
│  │  │  ├─ audio_Microfone.svg
│  │  │  ├─ clips_Youtube.svg
│  │  │  ├─ close.svg
│  │  │  ├─ historico_Search.svg
│  │  │  ├─ keyboard_Search.svg
│  │  │  ├─ lupa_Search.svg
│  │  │  ├─ menu_Hamburguer.svg
│  │  │  ├─ music.svg
│  │  │  ├─ playlist.svg
│  │  │  ├─ podcast.svg
│  │  │  ├─ shorts_IconYoutube.svg
│  │  │  ├─ subscribe_Icon.svg
│  │  │  ├─ tres_points.svg
│  │  │  ├─ youtube-color-icon.svg
│  │  │  ├─ youtube-kids-icon.svg
│  │  │  ├─ youtube-music-icon.svg
│  │  │  ├─ youtube-shorts-icon.svg
│  │  │  └─ youtube-studio-icon.svg
│  │  └─ unfilled/
│  │     ├─ ajuda_Unfilled.svg
│  │     ├─ bandeirinha_Unfilled.svg
│  │     ├─ feedback_Unfilled.svg
│  │     ├─ games_Unfilled.svg
│  │     ├─ home_Unfilled.svg
│  │     ├─ Liked_videoUnfilled.svg
│  │     ├─ live_unfilled.svg
│  │     ├─ login_unfilled.svg
│  │     ├─ movie_Unfilled.svg
│  │     ├─ myVideos_unfilled.svg
│  │     ├─ news_Unfilled.svg
│  │     ├─ notification_unfillled.svg
│  │     ├─ school_unfilled.svg
│  │     ├─ settings_Unfilled.svg
│  │     ├─ shops_unfilled.svg
│  │     ├─ sports_unfilled.svg
│  │     ├─ subscription_unfilled.svg
│  │     └─ watchLater_Unfilled.svg
│  └─ logo-Header/
│     └─ youtube.svg
├─ js/
│  ├─ components/
│  │  ├─ filters.js
│  │  ├─ hamburguer.js
│  │  ├─ header.js
│  │  ├─ search.js
│  │  ├─ sidebar.js
│  │  └─ videoCard.js
│  ├─ DOM/
│  │  ├─ dom.js
│  │  └─ variables.js
│  ├─ services/
│  │  ├─ datas_API.js
│  │  ├─ oauth.js
│  │  └─ youtube_API_requests.js
│  └─ main.js
├─ styles/
│  ├─ base/
│  │  ├─ global.css
│  │  ├─ reset.css
│  │  └─ variables.css
│  └─ layout/
│     ├─ filters.css
│     ├─ header.css
│     ├─ sidebar.css
│     ├─ sidebarSLIM.css
│     └─ video-grid.css
├─ index.html
└─ README.md
```

## O que eu pratiquei com este código

- Integração real com APIs externas e fluxo completo de OAuth 2.0.
- Modularização de lógica e separação de responsabilidades.
- Atualização reativa do DOM com dados recebidos da API.
- Controle de estado simples no front-end.
- Depuração de assincronismo e timing de renderização.
- Formatação de dados para apresentação (datas, durações, textos).
- Adaptação visual para diferentes tamanhos de tela.

## Conquistas pessoais

Esse projeto foi meu primeiro desafio grande após os cursos e me provou que eu consigo transformar teoria em produto. Entender o OAuth foi uma virada, e o resultado final mostra minha evolução técnica e minha persistência.

## Vamos nos conectar

Se curtiu o projeto, me chama no LinkedIn. Isso é só o começo de muita coisa que vem por aí.
