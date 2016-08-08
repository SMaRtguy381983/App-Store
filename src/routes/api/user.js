const user = require('../../models/user')

module.exports = (express) => {
  const router = express.Router();

  // This route will Read All Users
  router.get('/users', (req, res) => {
    user.all( (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  // This route will Read a User
  router.get('/users/:id', (req, res) => {
    req.body.id = req.params.id;
    user.one(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });


  // This route will Delete a User
  router.delete('/users/:id', (req, res) => {
    req.body.id = req.params.id;
    user.remove(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  // This route will Update a User
  router.post('/users/:id', (req, res) => {
    req.body.id = req.params.id;
    user.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  // This route will Create a User
  router.post('/users', (req, res) => {
    user.add(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  return router;
}
