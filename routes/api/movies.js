const express = require('express');
const movies = express.Router();
const { getAllMovies, getMovie, updateMovie, deleteMovie, getAllMoviesWithRatings } = require('../../models/movie');
const sendJSONresponse = (req, res) => res.json(res.rows);
const sendOkResponse = (req, res) => res.status(204).send();

// handle all the routes


movies.route('/')
  .get(getAllMovies, sendJSONresponse);
  // .post();

movies.route('/:id')
  .get(getMovie, sendJSONresponse)
  .put(updateMovie, sendOkResponse)
  .delete(deleteMovie, sendOkResponse);

// movies.route('/:id/:title')
//   .put(updateMovie, sendJSONresponse);







// Get movies withrating BONUS

// Get single movie

module.exports = movies;



// const express = require('express');
// const router = express.Router();
// const { getAllMovies, getMovie, updateMovie, deleteMovie, getAllMoviesWithRatings } = require('../../models/movie');
// const sendJSONresp = (req, res) => res.json(res.rows);
// const sendOKresp = (req, res) => res.status(204).send();

// // handle all the routes
// // router.get('/', (req,res,next) => {
// //   res.json('ALL ROUTES!');()
// // });
// // get all movies
// router.get('/', getAllMovies, (req,res,next) => {
//   res.json(res.rows)
// });
// // Get movies withrating BONUS
// // router.get('/api/movies', getAllMoviesWithRatings, (req,res,next) => {
// //   res.json
// // });

// // Get single movie
// router.get('/:id', getMovie, (req,res,next) => {
//   res.json(res.rows);
// });

// // update movie
// router.put('/:id', updateMovie, (req,res,next) => {
//   res.status(204).send();
// });

// // delete movie
// // router.delete('/:id', deleteMovie);
// router.route

// module.exports = router;
