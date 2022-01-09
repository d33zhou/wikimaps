/*
 * All routes for Maps are defined here
 * Since this file is loaded in server.js into api/maps,
 *   these routes are mounted onto /maps
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const { query } = require('express');
const express = require('express');
const app = express();
const router  = express.Router();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

const mapsRouter = (db) => {

  // GET /maps/
  router.get('/', (req, res) => {
    const queryString = `
      SELECT * FROM maps;
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

  // GET /maps/create
  router.get('/create', (req, res) => {
    res
      .status(200)
      .send("Create a new map here");
  });

  // GET /maps/:id
  router.get('/:id', (req, res) => {
    const queryString = `
      SELECT * FROM maps
      WHERE id = $1;
      `;

    db.query(queryString, [req.params.id])
      .then(res => {
        res.json(res.rows[0]);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  // POST /maps/create
  router.post('/create', (req, res) => {
    const queryString = `
      INSERT INTO maps (creator_id, title, description)
      VALUES ($1, $2, $3)
      RETURNING id;`
    const values = [req.body.id, req.body.title, req.body.description];

    db.query(queryString, values)
      .then(res => {
        res
          .status(200)
          .send("Added!");
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  return router;
};

module.exports = mapsRouter;
