## Node.js/Express REST API working with MongoDB

I made this project in order to practice Node.js/Express, also working with MongoDB, so i thought about a common login API able to register an user, an admin, validate the user in the application and save the informations in a database. I chose MongoDB because as a NoSQL DB based in document format, i thinks it's proper to scalability and practicity.

---

### NPM Packages

The API uses as dependencies @hapi/joi, bcryptjs, dotenv, express, jsonwebtoken and mongoose

1. bcryptjs to encrypt the password of the user
2. jsonwebtoken to create a token that will be validated when the user signed in the application, making sure if it is registered and if it is an admin
3. @hapi/joi to extra security the validation before every registration and login of a user
4. mongoose is for the connection with MongoDB cluster, creation of the schemas and everything
5. dotenv was used to hide the relevants information, as the JWT token and the MongoDB connection url

---

### Getting started

Run `npm start` and this is it

---

### Contact

Contact me in juniorgessivam@gmail.com if you want to talk to me about this project, what can i do better or even what should i learn more about.
