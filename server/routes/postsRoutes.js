const express = require('express');
const bcrypt = require('bcrypt');
const { default: Axios } = require('axios');

const router = express.Router();

router.get('/', async (req, res) => {
  const postsRes = await Axios.get(
    'https://my-json-server.typicode.com/gmayc/posts-code-challenge/posts',
  );
  console.log('postsRes', postsRes.data);
  if (postsRes.data.length) {
    return res.send({
      message: 'posts retrieved successfully!',
      status: 200,
      posts: postsRes.data,
    });
  }
  return res.send({ message: 'no posts available!', status: 204 });
});

module.exports = router;
