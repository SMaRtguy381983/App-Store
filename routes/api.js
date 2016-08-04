module.exports = (express) => {
	const router = express.Router();

// This is example code provided for testing
	const example =
	{
  "id": "0032c47b-4a7b-4232-9cc3-6af718244ea8",
  "title": "Best App Ever",
  "description": "A fast paced side scrolling shooter",
  "artAssets": [
    { "title": "Splash Screen", "srcLink": "http://i.imgur.com/5e5Ihb6.jpg" },
    { "title": "Cut Scene", "srcLink": "http://i.imgur.com/QQ3O6PO.jpg" }
  ],
  "releaseDate": "2016-06-15T22:29:20.000Z",
  "createdAt": "2016-05-15T22:29:20.000Z",
  "updatedAt": "2016-05-15T22:29:20.000Z",
  "user": {
    "id": "ae25e5a4-73db-4969-9f6c-acf8246b7faa",
    "name": "Chapman"
  }
};

// This code will set up a route that will run a test that will display All Apps Info
	router.get('/apps', (req, res) => {
		return res.json();
	});

// This code will set up a route that will run a test that will display All User Info
	router.get('/users', (req, res) => {
		return res.json();
	});

// This code will set up a route that will run a test that will display Single App Info
	router.get('/apps/:id', (req, res) => {
		if (req.params.id && req.params.id == example) {
    	return res.json(example);
		}
    return res.status(404).json({});
	});

// This code will set up a route that will run a test that will display Single User Info
  router.get('/users/:id', (req, res) => {
		if (req.params.id && req.params.id == example.user.id){
    	return res.json(example.user);
		}
    return res.status(404).json({});
  });

	// This line returns the router so all of the information from the API is displayed
	return router;
}
