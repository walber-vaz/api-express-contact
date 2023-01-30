[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

# 🚀 Criando uma api de cadastro de contatos

👨‍💻 Estudos sobre backend usando express com seus middlewares e construindo um CRUD de cadastro de usuários.

## 🔃 Dependência do projeto

- ✅ Nodejs >= 16.x && Nodejs <= 18.x
- ✅ Express
- ✅ Nodemon
- ✅ Helmet
- ✅ Cors
- ✅ Postgresql
- ✅ Docker
- ✅ Docker Compose

## 📢 Funcionalidades Rotas default

```
// Retorna todos os contatos cadastrados
GET: /contacts

// Retorna um contato pelo id passado por parâmetro
GET: /contacts/:id

// Deleta um contato
DEL: /contacts/:id

// Cadastra um contato
POST: /contacts

  // Body
  {
    "name": "Fulano",
    "email": "fulano@mail.com",
    "phone": "123454321"
    "category_id": "id da categoria cadastra para esse contato"
  }

// Atualizar dados do usuário
PUT: /contacts/:id

  // Body
  {
	"name": "Fulano Sobrenome",
	"email": "fulano@mail.com",
	"phone": "1234657890",
	"category_id": "id da categoria cadastra para esse contato"
  }
```

## 🧪 Stack utilizada

**Front-end:** React

**Back-end:** Node, Express, Postgresql, Docker

## 💡 Contribuindo

Contribuições são sempre bem-vindas!

## 💡 Feedback

Se você tiver algum feedback, por favor nos deixe saber por meio de issues

## 👨‍💻 Autores

- [@walber-vaz](https://www.github.com/walber-vaz)
- [Meu Linkedin](https://www.linkedin.com/in/walber-vaz/)

## 🔥 Licença

[MIT](https://choosealicense.com/licenses/mit/)
