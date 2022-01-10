/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const app = express();
const router  = express.Router();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

let cookieSession = require('cookie-session');
app.use(cookieSession({
  name: "session",
  keys: ['key1', 'key2']
}));

const userRouter = (db) => {

  // GET /users/favourites
  router.get('/favourites', (req, res) => {
    const queryString = `
      SELECT * FROM favourites
      WHERE user_id = $1;
      `;

    db.query(queryString, [req.session.user_id])
      .then(result => {
        res.json(result.rows);
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
      WHERE creator_id = $1;
      `;

    db.query(queryString, [req.session.user_id])
      .then(result => {
        res.json(result.rows);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  // GET /users/login
  router.get('/login/:id', (req, res) => {

    // assign cookie credentials
    //test
    req.session.user_id = req.params.id;

    //redirect to homepage
    res
      .status(200)
      .redirect('/');
  });

  // GET /users/logout
  router.get('/logout', (req, res) => {

    //clear cookies
    req.session = null;

    //redirect to homepage
    res
      .status(200)
      .redirect('/');
  });

  return router;
};

module.exports = userRouter;
