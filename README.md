# Projeto Pombos

## Resumo

O **Projeto Pombos** é um sistema completo de gerenciamento de envio de cartas utilizando um conceito inspirado em pombos-correio digitais. O objetivo principal é facilitar o controle, cadastro e monitoramento de remetentes (clientes), pombos (meio de entrega) e cartas (mensagens enviadas).

O sistema permite o cadastro detalhado dos clientes, controle do status e atributos dos pombos-correio, além do gerenciamento das cartas enviadas, incluindo o acompanhamento do status de entrega. A aplicação é ideal para quem deseja uma solução simples e eficiente para organizar processos de envio de mensagens físicas ou digitais, com uma interface moderna em React, comunicação com backend via API REST, e persistência de dados com MongoDB.

---

## Tecnologias utilizadas

- **Frontend:** React com Vite, TypeScript, Styled Components e TailwindCSS
- **Backend:** Node.js, Express, MongoDB (Mongoose)
- **Bibliotecas:** Axios para requisições HTTP, UUID para geração de IDs, ESLint para qualidade de código
- **Outros:** Json-server para simulação rápida da API durante o desenvolvimento

---

## Scripts disponíveis

- `dev` — Executa o projeto em modo de desenvolvimento com Vite.
- `build` — Compila o projeto TypeScript e gera a build otimizada.
- `lint` — Executa o ESLint para análise e correção de padrões de código.
- `preview` — Visualiza a build otimizada localmente.
- `json-server` — Inicia o servidor JSON para mockar a API utilizando o arquivo `db.json`.

---

## Estrutura do projeto

- `src/` — Código-fonte da aplicação React.
- `api/` — Configuração de chamadas HTTP via Axios.
- `contexts/` — Contextos React para gerenciamento global de estados.
- `models/` — Modelos Mongoose para o MongoDB.
- `controllers/` — Controladores Express para lidar com rotas e lógica do backend.

---

## Como rodar o projeto

1. Clone o repositório.
2. Instale as dependências:

```bash
npm install
```

```bash
npm run json-server
```

```bash
npm run dev
```

## Considerações finais

Este projeto serve como uma base robusta para sistemas de gerenciamento de entregas, com potencial para extensões e integrações futuras, incluindo upload de arquivos, autenticação e funcionalidades avançadas de dashboard.

## Ponto de Melhoria

Uma melhoria seria implementação de um sistema de login autenticado, com bcrypt para hash de senhas e
jwt token para geração de um token de autenticação para usuários

Autor: João Pedro Barbosa Duarte Ferreira
Data: 2025
