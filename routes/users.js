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

  // GET /users/contributions

  // GET /users/login

  // GET /users/logout

  // GET /users/register

  return router;
};

module.exports = userRouter;
