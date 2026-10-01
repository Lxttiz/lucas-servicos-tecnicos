# Lucas Serviços Técnicos — projeto para Antigravity

Versão final salva em 30/09/2026. Página em português, feita com HTML, CSS e JavaScript, sem dependências npm e sem etapa de compilação.

## Abrir no Antigravity

1. Esta pasta já contém o site completo, sem compactação.
2. No Antigravity, adicione esta pasta `lucas-antigravity` ao projeto pela opção **Add Folder**. No editor que usa **Open Folder**, selecione a mesma pasta.
3. Edite `index.html`, `styles.css` e `script.js` conforme necessário.

Abra a pasta como projeto; não é necessário extrair ou descompactar nenhum arquivo.

## Ver a página

Você pode abrir `index.html` diretamente no navegador. Para trabalhar com uma prévia local, tendo Node.js e npm disponíveis, execute no terminal da pasta:

```sh
npm run dev
```

Abra `http://127.0.0.1:4187`. Não é necessário executar `npm install`.

Se a porta já estiver ocupada, no PowerShell use:

```powershell
$env:PORT = '4190'
npm run dev
```

Nesse caso, abra `http://127.0.0.1:4190`. O servidor de prévia aceita conexões somente no computador local. Para conferir a sintaxe do JavaScript, execute `npm run check`.

## Arquivos

- `index.html`: conteúdo da página, ícones SVG e galeria.
- `styles.css`: aparência e adaptação para computador, tablet e celular.
- `script.js`: links de WhatsApp, menu, botão flutuante e visualizador de fotos.
- `images/`: sete fotos usadas na página e a logomarca com os seis serviços em tópicos.
- `licenses/`: documentação das licenças dos ícones e fotos ilustrativas.
- `preview.mjs`: servidor de prévia local.
- `docs/`: prévias visuais e estimativa comercial.

## Conteúdo e funções atuais

A marca tipográfica é **LUCAS**, sem gota e sem ponto. A logomarca completa aparece na primeira seção, ao lado da chamada principal, com os serviços em tópicos, “Segurança e serviço de qualidade”, o WhatsApp **+55 (84) 99645-5274** e a frase de efeito **24 horas no ar**, nas cores do site. A foto de ar-condicionado permanece no portfólio. A página apresenta ar-condicionado, combate a incêndio, gás e cozinha/exaustão, com portfólio, atendimento e contato. Os links de cada serviço preenchem uma mensagem específica. A galeria amplia as fotos; o menu funciona no celular; o botão flutuante aparece quando os botões principais de orçamento não estão visíveis.

Quatro fotos foram fornecidas pelo usuário como trabalhos de Lucas. As fotos de coifa, fogão e exaustor compacto são ilustrativas em CC0, sem exigência de atribuição. A página não exibe créditos ou links de fontes das imagens. Preserve a documentação das licenças ao redistribuir o projeto.

Fontes Manrope e DM Sans são carregadas pelo Google Fonts; sem internet, a página usa as fontes alternativas definidas no CSS. As imagens estão locais.

## Hospedagem

Para publicar, envie `index.html`, `styles.css`, `script.js`, `images/` e `licenses/` a uma hospedagem estática, mantendo essa estrutura. O servidor `preview.mjs` é apenas para prévia local. Este pacote não contém domínio ou hospedagem contratados.

## Pontos ainda a confirmar com Lucas

- Cidade, região de atendimento e nome comercial definitivo.
- Titularidade e funcionamento do número de WhatsApp fornecido.
- Qualificações, garantias e depoimentos reais, caso queira adicioná-los.

Não há painel de edição, formulário, CRM, Analytics, Pixel ou rastreamento de conversões configurado. A conversão e o desempenho em hospedagem pública ainda não foram medidos.
