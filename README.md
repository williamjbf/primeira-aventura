# Primeira Aventura

**Primeira Aventura** é uma plataforma web que conecta jogadores de RPG de mesa, permitindo que encontrem, criem e gerenciem mesas de jogo em um só lugar.

---

## Tecnologias Utilizadas

- **Frontend**: [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/)
- **Empacotamento**: [Vite](https://vitejs.dev/)
- **Componentização**: [Storybook](https://storybook.js.org/)

---

## Como rodar o projeto localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/primeira-aventura.git
cd primeira-aventura

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

---

## Para vizualizar os componentes do StoryBook

```bash
# Inicie o servidor do storybook
npm run storybook
```

---

## Para rodar os testes

```bash
# Testes unitarios
npm run test

# Testes 2e2
npm run storybook

npx playwright install 

npx playwright test ./tests/2e2/*
```