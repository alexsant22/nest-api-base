# NestJS API - Base

Esta é uma API robusta construída com o framework [Nest](https://github.com/nestjs/nest), servindo como base para aplicações escaláveis. O projeto utiliza o **Prisma ORM** para comunicação com um banco de dados **PostgreSQL** e já inclui uma estrutura de relacionamento entre entidades.

## 🚀 Funcionalidades

* **Documentação Automática**: Integrada com Swagger UI.
* **Validação de Dados**: Pipes globais configurados com `class-validator` e `class-transformer`.
* **Persistência de Dados**: PostgreSQL com Prisma ORM.
* **Relacionamentos**: Estrutura de **Um para Muitos (1:N)** entre Usuários e Projetos.

## 🛠️ Tecnologias Utilizadas

* **NestJS** (^11.0.1)
* **Prisma** (^5.19.0)
* **Swagger UI** (^5.0.1)
* **TypeScript** (^5.7.3)

## 📋 Pré-requisitos

Antes de começar, você precisará ter instalado:

* [Node.js](https://nodejs.org/)
* [Docker](https://www.docker.com/) (opcional, para o banco de dados)

## 🔧 Configuração do Projeto

1. **Instalação das dependências:**
```bash
npm install

```


2. **Configuração do Ambiente:**
Crie um arquivo `.env` na raiz do projeto e configure a URL de conexão com seu banco de dados PostgreSQL:
```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco?schema=public"

```


3. **Configuração do Prisma:**
Execute as migrações para criar as tabelas `User` e `Project` no banco de dados:
```bash
npx prisma migrate dev

```



## 💻 Executando a Aplicação

```bash
# Modo de desenvolvimento (watch mode)
npm run start:dev

# Modo de produção
npm run start:prod

```

A aplicação estará disponível em `http://localhost:3000` (ou na porta definida no seu ambiente).

## 📚 Documentação (Swagger)

A documentação interativa da API (Swagger) pode ser acedida através da rota:
`http://localhost:3000/docs`

## 🗄️ Estrutura de Dados

O projeto base possui dois modelos principais:

* **User**: Armazena informações do utilizador (`name`, `idade`, `email`).
* **Project**: Armazena projetos vinculados a um utilizador (`title`, `description`, `userId`).

**Relação**: Um utilizador pode ter vários projetos (1:N), enquanto cada projeto pertence obrigatoriamente a um único utilizador.

## 🧪 Testes

```bash
# Testes unitários
npm run test

# Testes e2e
npm run test:e2e

```

---
