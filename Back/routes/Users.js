const express = require('express');
const router = express.Router();
const User = require('../model/User');

router.get('/user/:id', checkToken, async (req, res) => {
  const id = req.params.id;
  //user existe? esse -password é pra não trazer a senha na resposta
  const user = await User.findById(id, '-password');
  if (!user) return res.status(404).json({ msg: 'Usuário não encontrado' });
  res.status(200).json({ user });
});
function checkToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ msg: 'Acesso negado' });
  }

  try {
    const secret = process.env.SECRET;
    jwt.verify(token, secret);
    next();
  } catch (error) {
    res.status(400).json({ msg: 'Token Inválido' });
  }
}

module.exports = router;
