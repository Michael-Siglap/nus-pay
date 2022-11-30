const express = require("express");

let router = express.Router();

router.get("/users/all", (request, response) => {
  let users = data.get_all_users();
  response.send(users);
});

router.get("/users/by-id", (request, response) => {
  let user = data.get_user_by_user_id(parseInt(request.query.user_id));
  response.send(user);
});

module.exports = { router };