const database = require('../database.js');

module.exports = (req, res) => {
  const { title, genre, picture, artiste } = req.body;

  database
    .query(
      'INSERT INTO album(title, genre, picture, artiste) VALUES (?, ?, ?, ?)',
      [title, genre, picture, artiste]
    )
    .then(([result]) => {
      res.location(`/api/movies/${result.insertId}`).sendStatus(201);
    })

    .catch((err) => {
      console.error(err);

      res.status(500).send('Error saving the movie');
    });
};
