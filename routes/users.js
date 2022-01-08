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
      SELECT * FROM users;
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
      SELECT * FROM users;
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
    const queryString = `
      SELECT * FROM users;
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

  // GET /users/logout
  router.get('/logout', (req, res) => {
    const queryString = `
      SELECT * FROM users;
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

  // GET /users/register
  router.get('/register', (req, res) => {
    const queryString = `
      SELECT * FROM users;
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

  return router;
};

module.exports = userRouter;
