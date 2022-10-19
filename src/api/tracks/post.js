const database = require('../database.js');

module.exports = (req, res) => {
  const { title, youtube_url, id_album} = req.body;

  database
    .query(
      'INSERT INTO track(title, youtube_url, id_album) VALUES (?, ?, ? )',
      [title, youtube_url, id_album]
    )
    .then(([result]) => {
      res.location(`/api/tracks/${result.insertId}`).sendStatus(201);
    })

    .catch((err) => {
      console.error(err);

      res.status(500).send('Error saving the track');
    });
};
