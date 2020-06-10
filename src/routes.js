const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({ first: 'commit' });
});

module.exports = routes;
