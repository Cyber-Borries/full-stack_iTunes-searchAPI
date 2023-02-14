//load express library
const express = require("express");
//create an apiRouter
const apiRouter = express.Router();

//create an empty array where the data returned from the api will be stored
let apiData = [];

//setting dummy values for the search params
let searchTerm = "";
let amount = 10;
let mediaType = "";

//this post method receives info from the frontend to make the correct api call to itunes
apiRouter.post("/search", function (req, res) {
  console.log(req.body);
  console.log("App posted");
  searchTerm = req.body.searchTerm;
  amount = req.body.amount;
  mediaType = req.body.mediaType;
  return res.json({ message: "Request received" });
});

//the get request fetches the data from the api
apiRouter.get("/api", function (req, res) {
  console.log("GET API");
  fetch(
    `https://itunes.apple.com/search?term=${searchTerm}&limit=${amount}&entity=${mediaType}`
  )
    .then((res) => res.json())
    .then((json) => {
      apiData = json.results;
      res.json(apiData);
    });
});

module.exports = apiRouter;
