const db = require('../lib/dbConnect');

// Your middleware MUST allow limit and offset to be sent
// via query parameters to the db for filtering

// default limit
const limit = 10;
// default offset
const offset = 0;

function getAllMovies(req, res, next) {
// implement get all movies
  db.any('SELECT * FROM movies')
  .then((allMovies) => {
    res.rows = allMovies;
    next();
  })
  .catch(function(err) {
    return next(err);
  })
}

function getMovie(req, res, next) {
// implement get single movie
  const movieID = parseInt(req.params.id);
  db.one('SELECT * FROM movies WHERE id=$1', movieID)
  .then((movie) => {
    res.rows = movie;
    next();
    })
  .catch(function(err) {
    return next(err);
  });
}

function updateMovie(req, res, next) {
  req.body.id = parseInt(req.params.id);
  db.none(`UPDATE movies
    SET title=$1
    WHERE id=$2`
    [
    req.body.title,
    req.body.id
    ])
  .then((update) => {
    next();
  })
  .catch(function(err) {
    return next(err);
  })
// implement update
}

function deleteMovie(req, res, next) {
// implement delete
req.body.id = Number.parseInt(req.params.id);
db.none(`
  DELETE FROM movies
  WHERE id = $/id/
  `, req.body)
  .then((data) => {
    next();
  })
  .catch((err) => {
    next(err)
  })
}


// BONUS
function getAllMoviesWithRatings(req, res, next) {

}

module.exports = {
  getAllMovies,
  getMovie,
  updateMovie,
  deleteMovie,
  getAllMoviesWithRatings
};
