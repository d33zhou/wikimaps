/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

const userRouter = (db) => {

  // GET /users/favourites
  router.get('/favourites', (req, res) => {
    const queryString = `
      SELECT * FROM favourites;
      `;

    db.query(queryString)
      .then(res => {
        res.json(res.rows);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  // GET /users/contributions
  router.get('/contributions', (req, res) => {
    const queryString = `
      SELECT * FROM points
      JOIN users ON users.id = creator_id;
      `;

    db.query(queryString)
      .then(res => {
        res.json(res.rows);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  // GET /users/login
  router.get('/login', (req, res) => {
    res
      .status(200)
      .send('Login page');
  });

  // GET /users/logout
  router.get('/logout', (req, res) => {

    //clear cookies/user handling for logout to be implemented

    res
      .status(200)
      .render('/');
  });

  // GET /users/register
  router.get('/register', (req, res) => {
    res
      .status(200)
      .send('Register page');
  });

  // POST /users/login
  router.post('/login', (req, res) => {
    //login handling logic to be implemented

    res
      .status(200)
      .send('Logged in --> update route afterwards');
  });

  // POST /users/register
  router.post('/register', (req, res) => {
    //new registration handling logic to be implemented

    res
      .status(200)
      .send('Registered --> update route afterwards');
  });

  return router;
};

module.exports = userRouter;
