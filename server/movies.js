const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/", async (req, res) => {
  let query = req.body.search;
  let movies = await axios.get("https://api.themoviedb.org/3/search/movie?api_key=10890e631b111b12cada1832defa316e&language=en-US&page=1&include_adult=false&query=" + query);
  results = movies.data.results;
  let response = [];
  for (let i = 0; i < 10; ++i) {
    tmp = results[i];
    if (tmp === null || tmp == undefined) break;
    response[i] = {
      movie_id: results[i].id,
      title: results[i].title,
      poster_image_url: "https://image.tmdb.org/t/p/w500/" + results[i].poster_path,
      popularity_summary: results[i].popularity + " out of " + results[i].vote_count
    };
  }
  return res.status(200).send(response);
});

module.exports = {
  routes: router
};
