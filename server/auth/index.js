const express = require('express');
const router = express.Router();

const cookieController = require('../controllers/cookieController');

/*
  Note: All routes here are set with /auth/ as their base,
    i.e. the route is /auth/ping
*/

//  /auth/ping
router.get('/ping', (_, res) => res.status(200).send({ ping: 'ok' }));

//  /auth/set
router.get('/set', cookieController.setCookie);

module.exports = router;
