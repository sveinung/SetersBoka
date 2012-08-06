app.post('/session/new', function(req, res) {
  res.status(200).send(req.body);
});

