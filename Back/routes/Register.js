const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../model/User');

router.post('/register', async (req, res) => {
  const { name, email, password, confirmPassword, task } = req.body;

  //validations
  if (!name) return res.status(422).json({ msg: 'O nome é obrigatório!' });
  if (!email) return res.status(422).json({ msg: 'O email é obrigatório!' });
  if (!password) return res.status(422).json({ msg: 'A senha é obrigatória!' });
  if (!confirmPassword)
    return res
      .status(422)
      .json({ msg: 'A confirmação de senha é obrigatória!' });

  if (password !== confirmPassword)
    return res.status(422).json({ msg: 'As senhas devem ser iguais!' });

  //verificar se o usuário já existe
  const userExist = await User.findOne({ email: email });
  if (userExist)
    res.status(422).json({ msg: 'Esse email já possui cadastro!' });

  //criar password com segurança
  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(password, salt); //dificultar que a senha seja hackeada

  //criar usuário
  const user = new User({ name, email, password: passwordHash });
  try {
    await user.save();
    res.status(200).json({ msg: 'Usuário criado com sucesso!' });
  } catch (error) {
    res.status(500).json({ msg: 'Erro no servidor, tente novamente.' });
  }
});

module.exports = router;
