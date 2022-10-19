const database = require('../database.js');

module.exports = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, genre, picture, artiste } = req.body;

  database
    .query(
      'update album set title = ?, genre = ?, picture = ?, artiste = ? where id = ?',
      [title, genre, picture, artiste, id]
    )

    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send('Not Found');
      } else {
        res.sendStatus(204);
      }
    })

    .catch((err) => {
      console.error(err);
      res.status(500).send('Error editing the album');
    });
};
