# App Store README

## Installation

Install all dependencies
```
npm install
```

Install all command line tools
```
npm i -g mocha nodemon
```


## Start the server

To run the server with default setting run
```
npm start
```


## Run the Unit tests

To run the unit tests
```
npm test
```


## Routes

### These routes were tested using the Postman application, download it here: https://www.getpostman.com/

#### What this route does:
This route will GET all the apps and return the results as an array of objects.

| Method | URL | Link | Response |
|---|---|---|---|
| GET | /api/v1/apps | http://localhost:3000/api/v1/apps | [{"id": "0032c47b-4a7b-4232-9cc3-6af718244ea8","title": "Best App Ever","description": "A fast paced side scrolling shooter","artAssets": [{"title": "Splash Screen","srcLink": "http://i.imgur.com/5e5Ihb6.jpg"},{"title": "Cut Scene","srcLink": "http://i.imgur.com/QQ3O6PO.jpg"}],"releaseDate": "2016-06-15T22:29:20.000Z","createdAt": "2016-05-15T22:29:20.000Z","updatedAt": "2016-05-15T22:29:20.000Z","user": {"id": "ae25e5a4-73db-4969-9f6c-acf8246b7faa","name": "Chapman"}}] |
##### The above response is shown below in it's semantic properly formatted version as it appears via the Postman application:
```
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
```

#### What this route does:
This route will GET all the users and return the results as an array of objects.

| Method | URL | Link | Response |
|---|---|---|---|
| GET | /api/v1/users | http://localhost:3000/api/v1/users | [{"id": "ae25e5a4-73db-4969-9f6c-acf8246b7faa","name":"Chapman"}]|
##### The above response is shown below in it's semantic properly formatted version as it appears via the Postman application:
```
[
  {
    "id": "ae25e5a4-73db-4969-9f6c-acf8246b7faa",
    "name": "Chapman"
  }
]
```

#### What this route does:
This route will GET one (1) app and return the result as an object.

| Method | URL | Link | Response |
|---|---|---|---|
| GET | /api/v1/apps/id: | http://localhost:3000/api/v1/apps/0032c47b-4a7b-4232-9cc3-6af718244ea8 | {"id": "0032c47b-4a7b-4232-9cc3-6af718244ea8","title": "Best App Ever","description": "A fast paced side scrolling shooter","artAssets": [{"title": "Splash Screen","srcLink": "http://i.imgur.com/5e5Ihb6.jpg"},{"title": "Cut Scene","srcLink": "http://i.imgur.com/QQ3O6PO.jpg"}],"releaseDate": "2016-06-15T22:29:20.000Z","createdAt": "2016-05-15T22:29:20.000Z","updatedAt": "2016-05-15T22:29:20.000Z","user": {"id": "ae25e5a4-73db-4969-9f6c-acf8246b7faa","name": "Chapman"}} |
##### The above response is shown below in it's semantic properly formatted version as it appears via the Postman application:
```
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
```

#### What this route does:
This route will GET one (1) user and return the result as an object.

| Method | URL | Link | Response |
|---|---|---|---|
| GET | /api/v1/users/id: | http://localhost:3000/api/v1/users/ae25e5a4-73db-4969-9f6c-acf8246b7faa | {"id": "ae25e5a4-73db-4969-9f6c-acf8246b7faa","name": "Chapman"} |
##### The above response is shown below in it's semantic properly formatted version as it appears via the Postman application:
```
{
  "id": "ae25e5a4-73db-4969-9f6c-acf8246b7faa",
  "name": "Chapman"
}
```

## Versioning
http://semver.org/spec/v2.0.0.html

###### Contributed by <a href="mailto:smrogers@fullsail.edu">Shaun M. Rogers</a>
