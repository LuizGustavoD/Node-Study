# Aula 12 - API REST com Node.js, TypeScript e MySQL

Nesta aula foi montada uma API CRUD de usuarios usando Express + TypeScript + mysql2, com execucao local e por Docker Compose.

## Tecnologias

- Node.js
- TypeScript
- Express
- MySQL 8.4
- Docker Compose

## Estrutura principal

```text
src/
  app.ts
  server.ts
  config/DBConnect.ts
  repository/UserRepository.ts
  service/CrudService.ts
  routes/
    CrudRoutes.ts
    statusRoutes.ts
    dto/user.dto.ts
```

## Pre-requisitos

- Node.js 20+
- NPM
- Docker Desktop (para subir app + banco com compose)

## Variaveis de ambiente

Arquivo `.env` (app local):

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=123456
DB_PORT=3306
DB_NAME=node_study
```

Arquivo `db.env` (container do MySQL):

```env
MYSQL_ROOT_PASSWORD=123456
MYSQL_DATABASE=node_study
```

## Scripts NPM

- `npm run dev`: sobe a API local em modo watch
- `npm run build`: compila TypeScript para `dist`
- `npm run start`: executa build compilado
- `npm run compose:up`: sobe app + banco com Docker Compose
- `npm run compose:down`: derruba containers e rede do compose
- `npm run compose:logs`: acompanha logs dos containers

## Como executar

### Opcao 1 - local (Node)

1. Instale dependencias:

```bash
npm install
```

2. Rode em desenvolvimento:

```bash
npm run dev
```

API local: `http://localhost:3000`

### Opcao 2 - Docker Compose (app + banco)

1. Suba os containers:

```bash
npm run compose:up
```

2. Veja logs (opcional):

```bash
npm run compose:logs
```

API no container: `http://localhost:3001`

3. Para parar:

```bash
npm run compose:down
```

## Endpoints

### Healthcheck

- `GET /status`

Resposta esperada:

```json
{ "status": "ok" }
```

### Usuarios

- `GET /users`
- `GET /users/:id`
- `POST /users`
- `PUT /users/:id`
- `DELETE /users/:id`

Payload para criar/atualizar usuario:

```json
{
  "name": "Luiz",
  "email": "luiz@example.com",
  "password": "123456"
}
```

## SQL para criar tabela users

Caso precise criar manualmente dentro do container MySQL:

```sql
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Troubleshooting rapido

- Erro `ENOENT package.json` em `npm run dev`:
  execute o comando dentro da pasta `aula 12`.
- Erro `500` em `/users`:
  verifique se o banco esta ativo e se a tabela `users` existe.
- Erro `400` no POST pelo terminal:
  geralmente e JSON malformado por escape incorreto.
