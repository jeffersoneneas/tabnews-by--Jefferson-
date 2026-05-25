# 📋 Progresso do Projeto - TabNews Clone

**Data de início:** 28 de março de 2026  
**Status:** 🚀 Em desenvolvimento

## ✅ Concluído

### Setup de Ambiente

- [x] Instalação do Node.js LTS/Hydrogen via nvm
- [x] Verificação de versões disponíveis
- [x] Definição da versão padrão do Node com nvm alias
- [x] Criação do arquivo .nvmrc com lts/hydrogen
- [x] Criação e configuração do arquivo .editorconfig
- [x] Inicialização do projeto npm
- [x] Instalação de dependências (Next.js, React, React DOM)
- [x] Adição do Prettier, configuração de auto save e format on save
- [x] Configuração de scripts `lint:check` e `lint:fix`
- [x] Instalação do Jest na versão ^29.6.2
- [x] Configuração dos scripts `test` e `test:watch` do Jest
- [x] Configuração do script dev no package.json
- [x] Criação da página inicial em pages/index.js
- [x] Execução do servidor de desenvolvimento Next.js

### Cursos

- [x] curso.dev — Aula 7 concluída (16/05/2026)
- [ ] curso.dev — Aula 10 em andamento

---

### Arquitetura do Projeto

```text
root/
├── pages/
│   └── index.js
├── models/
│   ├── users.js
│   ├── content.js
│   └── password.js
├── infra/
│   ├── database.js
│   ├── migrations/
│   └── provisioning/
│       ├── staging/
│       └── production/
└── tests/
```

---

### Registro de Atividades

## 🛠️ Comandos Utilizados

```bash
nvm ls                          # Verificar versões do Node disponíveis
nvm install lts/hydrogen        # Instalar Node.js LTS/Hydrogen
node -v                         # Verificar versão do Node instalada
nvm --help                      # Ver ajuda do nvm
nvm alias default lts/hydrogen  # Definir LTS/Hydrogen como versão padrão
nvm install                     # Instalar versão padrão/configurada
npm init                        # Inicializar projeto npm
npm install next@13.1.6         # Instalar Next.js versão 13.1.6
npm install react@18.2.0        # Instalar React versão 18.2.0
npm install react-dom@18.2.0    # Instalar React DOM versão 18.2.0
npm install -D jest@29.6.2      # Instalar Jest como dependência de desenvolvimento
npm run test                    # Rodar os testes com Jest
npm run test:watch              # Rodar os testes em modo watch
next dev                        # Iniciar servidor de desenvolvimento Next.js
npm run dev                     # Iniciar servidor via script dev do package.json
docker compose up               # Sobe a imagem docker
```

---

## links uteis

https://hub.docker.com/_/postgres/
