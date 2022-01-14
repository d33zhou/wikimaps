// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const express = require("express");

const app = express();
const morgan = require("morgan");

// PG database client/connection setup
const { Pool } = require("pg");
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const dbParams = require("./lib/db.js");

const db = new Pool(dbParams);
db.connect().then(() => {
  console.log('We have connected to the database.');
}).catch((err) => {
  console.log('Error: ', err);
});

// body parser set-up
const sassMiddleware = require("./lib/sass-middleware");

// encrypt cookies
app.use(cookieSession({
  name: "session",
  keys: ['key1', 'key2'],
}));

app.use(bodyParser.urlencoded({ extended: true }));

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(
  "/styles",
  sassMiddleware({
    source: `${__dirname}/styles`,
    destination: `${__dirname}/public/styles`,
    isSass: false, // false => scss, true => sass
  }),
);

app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const mapsRoutes = require("./routes/maps");

// Redirections for route paths
app.use('/users', usersRoutes(db));
app.use('/maps', mapsRoutes(db));

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get("/", (req, res) => {
  const queryString = `
  SELECT maps.*, users.name AS created_by
      FROM maps
      JOIN users ON users.id = maps.creator_id
      ORDER BY id DESC
  LIMIT 3;`;

  const queryString1 = `
  SELECT map_id
  FROM favourites
  WHERE user_id = $1;`;

  db.query(queryString1,[req.session.user_id])
    .then(result1 => result1.rows)
    .then(result1 => {
      db.query(queryString)
        .then((result) => res.render("index", {
          user: req.session.user_id,
          topMapsObj: result.rows,
          favMapsObj:result1
        }));
    })
    .catch((err) => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

app.listen(PORT, () => {
  console.log(`Wiki Maps listening on port ${PORT}`);
});
