require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
//configuração para o express ler json
app.use(express.json());

//Models

//Credenciais
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

mongoose
  .connect(
    `mongodb+srv://${dbUser}:${dbPass}@cluster0.rz6q0sf.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(4000);
    console.log('Conectado ao banco');
  })
  .catch((err) => console.log(err));

//Public Route
app.get('/', (req, res) => {
  res.status(200).json({ msg: 'Bem vindo a API' });
});

//Declaração de Rotasa
const register = require('./routes/Register');
const login = require('./routes/Login');
const users = require('./routes/Users');

//Rotas
app.use('/auth', register);
app.use('/auth', login);
app.use(users);
