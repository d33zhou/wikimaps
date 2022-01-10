/*
 * All routes for Maps are defined here
 * Since this file is loaded in server.js into api/maps,
 *   these routes are mounted onto /maps
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const { query } = require('express');
const express = require('express');

const app = express();
const router = express.Router();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

const cookieSession = require('cookie-session');
app.use(cookieSession({
  name: "session",
  keys: ['key1', 'key2']
}));

const mapsRouter = (db) => {
  // GET /maps/
  router.get('/', (req, res) => {
    const queryString = `
      SELECT maps.*, users.name AS created_by
      FROM maps
      JOIN users ON users.id = maps.creator_id
      ORDER BY id DESC;
      `;

    return db
      .query(queryString)
      .then((result) => {
        // res.json(result.rows);
        res.render('maps', { mapList: result.rows });
      })
      .catch((err) => {
        res
          .status(500)
          .json({ error: err.message });
      });

    // res.render('maps', { mapList: result.rows });
  });

  // GET /maps/create
  router.get('/create', (req, res) => {
    if (!req.session.user_id) {
      res.redirect('/');
    }
    res
      .status(200)
      .send("Create a new map here");
  });

  // GET /maps/:id
  router.get('/:id', (req, res) => {
    const queryString = `
      SELECT maps.*,
        users.name AS created_by,
        points.title AS point_name,
        points.description AS point_description,
        points.image AS point_img,
        points.latitude AS latitude,
        points.longitude AS longitude
      FROM maps
       JOIN users ON users.id = maps.creator_id
       JOIN points ON points.creator_id = maps.creator_id
       WHERE maps.id = $1
       ORDER BY maps.id;
      `;

    db.query(queryString, [req.params.id])
      .then((result) => {
        res.render('map_id', { mapData: result.rows });
      })
      .catch((err) => {
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
      RETURNING id;`;
    const values = [req.body.id, req.body.title, req.body.description];

    db.query(queryString, values)
      .then((result) => {
        res
          .status(200)
          .send("Added!");
      })
      .catch((err) => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  return router;
};

module.exports = mapsRouter;
