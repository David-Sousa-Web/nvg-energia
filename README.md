# Otto's Arquitetura e Engenharia — site

Site institucional da Otto's (antiga NVG Energia): arquitetura, engenharia elétrica, grupos geradores, laudos e segurança do trabalho.

Feito em React (Create React App), página única.

## Rodar localmente

```bash
npm install
npm start
```

Abre em http://localhost:3000. Para gerar a versão de produção: `npm run build` (sai na pasta `build/`).

## Onde alterar

- **Telefone, e-mail, WhatsApp, Instagram e cidade:** `src/data/empresa.js`
- **Cores e fontes:** variáveis no início de `src/App.css`
- **Textos e serviços:** cada seção fica em `src/components/<seção>/`
- **Fotos e logo:** `public/assets/` (`ottos-logo-dark.png` / `ottos-logo-light.png` e `ottos-mark-*.png` são a logo com fundo transparente)
- **Formulário de contato:** usa o Formspree (`useForm('xqkvkjlv')` em `src/components/contato/Contato.jsx`)
