# Node.js/Express REST API com MongoDB

## Sobre

Fiz este projeto para praticar Node.js/Express, trabalhando também com MongoDB, pensei em uma API de login comum capaz de cadastrar um usuário, um admin, validar o usuário na aplicação e salvar as informações em um banco de dados. Escolhi o MongoDB porque como um banco de dados NoSQL baseado em formato de documento, acho adequado à escalabilidade e praticidade.

O projeto requer algumas melhorias que pretendo commitar com o tempo. Aplicando a um sistema simples de formulário, realizar um CRUD completo e possivelmente persistir dados com uso de cookies.

---

### Dependências

As dependências usadas para esse projeto foram @hapi/joi, bcryptjs, dotenv, express, jsonwebtoken e mongoose.

1. bcryptjs para criptografar a senha do usuário
2. jsonwebtoken para criar um token que será validado quando o usuário logar na aplicação, verificando se está cadastrado e se é administrador
3. @hapi/joi para segurança extra na criptografia dos dados do usuário e comunicação entre interface e servidor
4. mongoose foi usado para conexão com o cluster no MongoDB, criação dos schemas e afins
5. dotenv é usado para ocultar as informações relevantes, como o token JWT e a url de conexão do MongoDB

---

### Inicializando

Com a sua própria url de conexão com o MongoDB, token JWT e porta de servidor, passando o comando `npm start` um script irá rodar e inicializar a API.

