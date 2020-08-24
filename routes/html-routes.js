// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const express = require("express");
const app = express();
module.exports = function(app) {
  app.get("/", (req,res) => {
    res.render("index.html")
  })
}