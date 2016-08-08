module.exports = (express) => {
  const router = express.Router();

  router.post('/status', (req, res) => {
    res.json({
      healthy: true,
    })
  });

  // Routes
  router.use('/api/v1', require('./api/app')(express));
  router.use('/api/v1', require('./api/user')(express));

  return router;
}
