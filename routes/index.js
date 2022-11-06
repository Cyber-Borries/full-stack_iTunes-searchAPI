//this will be the routes index

//post fetch request from front end
//get response from third party API

//load express library
const express = require("express");
//create an apiRouter
const apiRouter = express.Router();

//search parameters
// const searchTerm = "";
// const amount = "";
// const mediaType = "";

//base URl for requesting the data from iTunes

// apiRouter.get(
//   fetch(BASE_URL)
//     .then((response) => response.json())
//     .then((data) => {
//       console.table(data.results);
//     }),
//   function (req, res) {
//     console.log("App.get");
//     res.json(frontEndRequest);
//   }
// );

let apiData = [];

// fetch("https://itunes.apple.com/search?term=jack+johnson.")
//   .then((res) => res.json())
//   .then((json) => {
//     apiData = json.results;
//     console.log(apiData);
//   });

// searchTerm: searchTerm,
// amount: amount,
// mediaType: mediaType,

// let searchTerm = "";
// let amount = 10;
// let mediaType = "";

// apiRouter.post("/search", function (req, res) {
//   console.log(req.body);
//   console.log("App posted");
//   let searchTerm = req.body.searchTerm;
//   let amount = req.body.amount;
//   let mediaType = req.body.mediaType;
//   // req.body; //i get the info from frontend (searchterm, amount, genre)
//   return res.json({ message: "Hello Adriaan" });
// });
// //move the fetch method to the above function
// apiRouter.get("/api", function (req, res) {
//   fetch(
//     `https://itunes.apple.com/search?term=${searchTerm}&limit=${amount}&entity=${mediaType}`
//   )
//     .then((res) => res.json())
//     .then((json) => {
//       apiData = json.results;
//       // console.log(apiData);
//     });
//   res.json(apiData);
// });

let searchTerm = "";
let amount = 10;
let mediaType = "";

apiRouter.post("/search", function (req, res) {
  console.log(req.body);
  console.log("App posted");
  searchTerm = req.body.searchTerm;
  amount = req.body.amount;
  mediaType = req.body.mediaType;
  // req.body; //i get the info from frontend (searchterm, amount, genre)
  return res.json({ message: "Request received" });
});
//move the fetch method to the above function
apiRouter.get("/api", function (req, res) {
  console.log("GET API");
  fetch(
    `https://itunes.apple.com/search?term=${searchTerm}&limit=${amount}&entity=${mediaType}`
  )
    .then((res) => res.json())
    .then((json) => {
      apiData = json.results;
    });
  console.log(apiData);
  res.json(apiData);
});

// let searchTerm = "";
// let amount = 10;
// let mediaType = "";

// apiRouter.post("/search", function (req, res) {
//   // console.log(req.body);
//   console.log("App posted");
//   searchTerm = req.body.searchTerm;
//   amount = req.body.amount;
//   mediaType = req.body.mediaType;
//   res.json({ message: "Request received" });
//   fetch(
//     `https://itunes.apple.com/search?term=${searchTerm}&limit=${amount}&entity=${mediaType}`
//   ).then((res) => res.json());
//   console.log(res.json()).then((json) => {
//     apiData = json.results;
//     // console.log(apiData);
//   });
//   res.json(apiData);
//   // req.body; //i get the info from frontend (searchterm, amount, genre)
// });
//move the fetch method to the above function
// apiRouter.get("/search", function (req, res) {
//   fetch(
//     `https://itunes.apple.com/search?term=${searchTerm}&limit=${amount}&entity=${mediaType}`
//   ).then((res) => res.json());
//   console.log(res.json()).then((json) => {
//     apiData = json.results;
//     // console.log(apiData);
//   });
//   res.json(apiData);
// });

// apiData.trackId
// apiData.artistName
// apiData.trackName
// apiData.primaryGenreName
// console.table(apiData);
// apiRouter.post("/", function (req, res) {
//   req.body; //i get the info from frontend (searchterm, amount, genre)
//   let frontEndRequest = apiData; //is an object.
//   console.log(frontEndRequest);
//   res.send(apiData);
// });

module.exports = apiRouter;
