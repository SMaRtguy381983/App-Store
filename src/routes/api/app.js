const app = require('../../models/app')

module.exports = (express) => {
  const router = express.Router();

  // This route will Read All Applications
  router.get('/apps', (req, res) => {
    app.all( {
      include: [{
        all: true,
        nested: true,
      }]
    }, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  // This route will Read One Application
  router.get('/apps/:id', (req, res) => {
    req.body.id = req.params.id;
    app.one(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });


  // This route will Delete an Application
  router.delete('/apps/:id', (req, res) => {
    req.body.id = req.params.id;
    app.remove(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  // This route will Update an Application
  router.post('/apps/:id', (req, res) => {
    req.body.id = req.params.id;
    app.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  // This route will Create an Application
  router.post('/apps', (req, res) => {
    app.add(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  // This route will Read All Applications for User
  router.get('/users/:id/apps', (req, res) => {
    app.all({
      where: {
        userID: req.params.id
      },
      include: [{
        all: true,
        nested: true,
      }]
    }, req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  return router;
}
