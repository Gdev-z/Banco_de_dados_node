Aqui vai uma descrição pronta (estilo README curto) para colocar no GitHub 👇

---

## 🚀 API de Usuários com Node.js, Express e Prisma

Este projeto é uma API REST simples para gerenciamento de usuários, desenvolvida com **Node.js**, **Express** e **Prisma ORM**.
A aplicação realiza operações CRUD completas conectadas a um banco de dados via Prisma.

### ✨ Funcionalidades

A API permite:

* 📄 Listar todos os usuários
* ➕ Criar um novo usuário
* ✏️ Atualizar dados de um usuário existente
* 🗑️ Deletar um usuário

### 🛠️ Tecnologias utilizadas

* Node.js
* Express
* Prisma ORM
* JavaScript (ES Modules)

### 📌 Rotas da API

| Método | Rota            | Descrição               |
| ------ | --------------- | ----------------------- |
| GET    | `/usuarios`     | Lista todos os usuários |
| POST   | `/usuarios`     | Cria um novo usuário    |
| PUT    | `/usuarios/:id` | Atualiza um usuário     |
| DELETE | `/usuarios/:id` | Remove um usuário       |

### 📥 Exemplo de JSON para criação/edição

```json
{
  "name": "Gabriel",
  "email": "gabriel@email.com",
  "age": 25
}
```

### ▶️ Como rodar o projeto

1. Instale as dependências:

```bash
npm install
```

2. Gere o client do Prisma:

```bash
npx prisma generate
```

3. Inicie o servidor:

```bash
node server.js
```

O servidor será iniciado em:

```
http://localhost:3000
```
