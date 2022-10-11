const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../model/User');

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  //validações
  if (!email)
    return res.status(422).json({ msg: 'O email não pode ser vazio!' });
  if (!password)
    return res.status(422).json({ msg: 'A senha não pode ser vazia!' });

  //checar se o usuário existe
  const user = await User.findOne({ email: email });
  if (!user) return res.status(404).json({ msg: 'Usuário não encontrado' });
  //chcear se a senha está correta
  const checkPassword = await bcrypt.compare(password, user.password);
  if (!checkPassword) return res.status(422).json({ msg: 'Senha Inválida' });
  //logar usuário
  try {
    const secret = process.env.SECRET;
    const token = jwt.sign(
      {
        id: user._id,
      },
      secret
    );
    res.status(200).json({ msg: 'Autenticação realizada com sucesso!', token });
  } catch (error) {
    res.status(500).json({ msg: 'Erro no servidor, tente novamente.' });
  }
});

module.exports = router;
