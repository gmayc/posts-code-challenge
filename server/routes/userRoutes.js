const express = require('express');
const bcrypt = require('bcrypt');
const { default: Axios } = require('axios');

const router = express.Router();

router.post('/signin', async (req, res) => {
  const { username, password } = req.body;
  console.log('username, password', username, password);
  const hashedPassword = await new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, function (err, hash) {
      if (err) reject(err);
      resolve(hash);
    });
  });
  console.log('hashedPassword', hashedPassword);
  const usersRes = await Axios.get(
    'https://my-json-server.typicode.com/gmayc/posts-code-challenge/users',
  );

  const filteredUser = usersRes.data.filter(
    (user) => user.username === username,
  )[0];
  console.log('user', filteredUser);
  const compare = await bcrypt.compare(password, filteredUser.password);
  console.log('compare', compare);
  if (compare) {
    return res.send({
      status: 200,
      user: filteredUser,
      message: 'successful login',
    });
  }
  return res.send({ status: 401, message: 'invalid credentials' });
});

module.exports = router;
