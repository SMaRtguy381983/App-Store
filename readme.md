// Here are the endpoints and the results that show via Postman application

GET /api/vi/apps
  // which is designed to Display All Apps Info as an array
  HTTP: http://localhost:3000/api/v1/apps
  // POSTMAN RESULTS
  [
    {
      "id": "0032c47b-4a7b-4232-9cc3-6af718244ea8",
      "title": "Best App Ever",
      "description": "A fast paced side scrolling shooter",
      "artAssets": [
        {
          "title": "Splash Screen",
          "srcLink": "http://i.imgur.com/5e5Ihb6.jpg"
        },
        {
          "title": "Cut Scene",
          "srcLink": "http://i.imgur.com/QQ3O6PO.jpg"
        }
      ],
      "releaseDate": "2016-06-15T22:29:20.000Z",
      "createdAt": "2016-05-15T22:29:20.000Z",
      "updatedAt": "2016-05-15T22:29:20.000Z",
      "user": {
        "id": "ae25e5a4-73db-4969-9f6c-acf8246b7faa",
        "name": "Chapman"
      }
    }
  ]


GET /api/vi/users
  // which is designed to Display All Users Info as an array
  HTTP: http://localhost:3000/api/v1/users
  // POSTMAN RESULTS
  [
    {
      "id": "ae25e5a4-73db-4969-9f6c-acf8246b7faa",
      "name": "Chapman"
    }
  ]


GET /api/vi/apps/:id
  // which is designed to Display Single App Info as an object
  HTTP: http://localhost:3000/api/v1/apps/0032c47b-4a7b-4232-9cc3-6af718244ea8
  // POSTMAN RESULTS
  {
    "id": "0032c47b-4a7b-4232-9cc3-6af718244ea8",
    "title": "Best App Ever",
    "description": "A fast paced side scrolling shooter",
    "artAssets": [
      {
        "title": "Splash Screen",
        "srcLink": "http://i.imgur.com/5e5Ihb6.jpg"
      },
      {
        "title": "Cut Scene",
        "srcLink": "http://i.imgur.com/QQ3O6PO.jpg"
      }
    ],
    "releaseDate": "2016-06-15T22:29:20.000Z",
    "createdAt": "2016-05-15T22:29:20.000Z",
    "updatedAt": "2016-05-15T22:29:20.000Z",
    "user": {
      "id": "ae25e5a4-73db-4969-9f6c-acf8246b7faa",
      "name": "Chapman"
    }
  }


GET /api/vi/users/:id
  // which is designed to Display Single User Info as an object
  HTTP: http://localhost:3000/api/v1/users/ae25e5a4-73db-4969-9f6c-acf8246b7faa
  // POSTMAN RESULTS
  {
    "id": "ae25e5a4-73db-4969-9f6c-acf8246b7faa",
    "name": "Chapman"
  }
