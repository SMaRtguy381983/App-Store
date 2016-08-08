# App Store README
#### v1.1.0

## Installation

Install all dependencies
```
npm install
```

Install all command line tools
```
npm i -g mocha

npm i mocha --save-dev

npm i chai --save-dev

npm i -g nodemon
```


## Start the server

To run the server with default setting run
```
node src/server.js

-or-

nodemon src/server.js
```


## Run the Unit tests

To run the unit tests
```
mocha
```


## Routes

### These routes were tested using the Postman application, download it here: https://www.getpostman.com/



#### What this route does:
This route will GET all the apps for a specific user and return the results as an array of objects.

| Method | URL | Link | Response |
|---|---|---|---|
| POST | /api/v1/users | http://localhost:3000/api/v1/users |  |
##### The above response is shown below in it's semantic properly formatted version as it appears via the Postman application:
```
{
  "id": "c8c2f2ce-085b-4aa5-9c05-9fa07b17bafc",
  "name": "name",
  "updatedAt": "2016-08-08T03:44:22.000Z",
  "createdAt": "2016-08-08T03:44:22.000Z"
}
```

#### What this route does:
This route will GET all the apps for a specific user and return the results as an array of objects.

| Method | URL | Link | Response |
|---|---|---|---|
| POST | /api/v1/users/:id | http://localhost:3000/api/v1/users/:id |  |
##### The above response is shown below in it's semantic properly formatted version as it appears via the Postman application:
```
{
  "id": "c8c2f2ce-085b-4aa5-9c05-9fa07b17bafc",
  "name": "name2",
  "createdAt": "2016-08-08T03:44:22.000Z",
  "updatedAt": "2016-08-08T03:44:45.000Z"
}
```

#### What this route does:
This route will GET all the apps for a specific user and return the results as an array of objects.

| Method | URL | Link | Response |
|---|---|---|---|
| DELETE | /api/v1/users | http://localhost:3000/api/v1/users |  |
##### The above response is shown below in it's semantic properly formatted version as it appears via the Postman application:
```
1
```

#### What this route does:
This route will GET all the apps for a specific user and return the results as an array of objects.

| Method | URL | Link | Response |
|---|---|---|---|
| POST | /api/v1/apps | http://localhost:3000/api/v1/apps |  |
##### The above response is shown below in it's semantic properly formatted version as it appears via the Postman application:
```
{
  "id": "d281c58e-4447-48b6-82cd-dc2eb90b5fd6",
  "releaseDate": "2016-08-08T03:47:09.000Z",
  "title": "app title",
  "description": "test",
  "updatedAt": "2016-08-08T03:47:09.000Z",
  "createdAt": "2016-08-08T03:47:09.000Z"
}
```

#### What this route does:
This route will GET all the apps for a specific user and return the results as an array of objects.

| Method | URL | Link | Response |
|---|---|---|---|
| POST | /api/v1/apps/:id | http://localhost:3000/api/v1/apps/:id |  |
##### The above response is shown below in it's semantic properly formatted version as it appears via the Postman application:
```
{
  "id": "d281c58e-4447-48b6-82cd-dc2eb90b5fd6",
  "title": "app title2",
  "description": "tes2t",
  "releaseDate": "2016-08-08T03:47:09.000Z",
  "createdAt": "2016-08-08T03:47:09.000Z",
  "updatedAt": "2016-08-08T03:47:34.000Z",
  "userId": null
}
```

#### What this route does:
This route will GET all the apps for a specific user and return the results as an array of objects.

| Method | URL | Link | Response |
|---|---|---|---|
| DELETE | /api/v1/apps | http://localhost:3000/api/v1/apps |  |
##### The above response is shown below in it's semantic properly formatted version as it appears via the Postman application:
```
1
``



#### What this route does:
This route will GET all the apps for a specific user and return the results as an array of objects.

| Method | URL | Link | Response |
|---|---|---|---|
| GET | /api/v1/users/:id/apps | http://localhost:3000/api/v1/users/ae25e5a4-73db-4969-9f6c-acf8246b7faa/apps |  |
##### The above response is shown below in it's semantic properly formatted version as it appears via the Postman application:
```
[
  {
    "id": "0032c47b-4a7b-4232-9cc3-6af718244ea8",
    "title": "Best App Ever",
    "description": "A fast paced side scrolling shooter",
    "releaseDate": null,
    "createdAt": null,
    "updatedAt": null,
    "userId": "ae25e5a4-73db-4969-9f6c-acf8246b7faa",
    "artAssets": [
      {
        "id": 1,
        "title": "Splash Screen",
        "srcLink": "http://i.imgur.com/5e5Ihb6.jpg",
        "createdAt": null,
        "updatedAt": null,
        "appId": "0032c47b-4a7b-4232-9cc3-6af718244ea8"
      },
      {
        "id": 2,
        "title": "Cut Scene",
        "srcLink": "http://i.imgur.com/QQ3O6PO.jpg",
        "createdAt": null,
        "updatedAt": null,
        "appId": "0032c47b-4a7b-4232-9cc3-6af718244ea8"
      }
    ],
    "user": {
      "id": "ae25e5a4-73db-4969-9f6c-acf8246b7faa",
      "name": "Chapman",
      "createdAt": null,
      "updatedAt": null
    }
  }
]
```

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
    "releaseDate": null,
    "createdAt": null,
    "updatedAt": null,
    "userId": "ae25e5a4-73db-4969-9f6c-acf8246b7faa",
    "artAssets": [
      {
        "id": 1,
        "title": "Splash Screen",
        "srcLink": "http://i.imgur.com/5e5Ihb6.jpg",
        "createdAt": null,
        "updatedAt": null,
        "appId": "0032c47b-4a7b-4232-9cc3-6af718244ea8"
      },
      {
        "id": 2,
        "title": "Cut Scene",
        "srcLink": "http://i.imgur.com/QQ3O6PO.jpg",
        "createdAt": null,
        "updatedAt": null,
        "appId": "0032c47b-4a7b-4232-9cc3-6af718244ea8"
      }
    ],
    "user": {
      "id": "ae25e5a4-73db-4969-9f6c-acf8246b7faa",
      "name": "Chapman",
      "createdAt": null,
      "updatedAt": null
    }
  },
  {
    "id": "32dc545f-bc0f-4879-ad19-d38ca2d59c3c",
    "title": "Best New Test App",
    "description": "none",
    "releaseDate": "2016-08-08T02:58:00.000Z",
    "createdAt": "2016-08-08T02:58:00.000Z",
    "updatedAt": "2016-08-08T02:58:00.000Z",
    "userId": null,
    "artAssets": [],
    "user": null
  },
  {
    "id": "asdf1",
    "title": "asdf",
    "description": "asdf",
    "releaseDate": null,
    "createdAt": null,
    "updatedAt": null,
    "userId": "asdf",
    "artAssets": [],
    "user": {
      "id": "asdf",
      "name": "asdf",
      "createdAt": null,
      "updatedAt": null
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
    "name": "Chapman",
    "createdAt": null,
    "updatedAt": null
  },
  {
    "id": "asdf",
    "name": "asdf",
    "createdAt": null,
    "updatedAt": null
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
  "releaseDate": null,
  "createdAt": null,
  "updatedAt": null,
  "userId": "ae25e5a4-73db-4969-9f6c-acf8246b7faa",
  "artAssets": [
    {
      "id": 1,
      "title": "Splash Screen",
      "srcLink": "http://i.imgur.com/5e5Ihb6.jpg",
      "createdAt": null,
      "updatedAt": null,
      "appId": "0032c47b-4a7b-4232-9cc3-6af718244ea8"
    },
    {
      "id": 2,
      "title": "Cut Scene",
      "srcLink": "http://i.imgur.com/QQ3O6PO.jpg",
      "createdAt": null,
      "updatedAt": null,
      "appId": "0032c47b-4a7b-4232-9cc3-6af718244ea8"
    }
  ],
  "user": {
    "id": "ae25e5a4-73db-4969-9f6c-acf8246b7faa",
    "name": "Chapman",
    "createdAt": null,
    "updatedAt": null
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
  "name": "Chapman",
  "createdAt": null,
  "updatedAt": null
}
```

## Versioning
Visit SemVer to get the latest info on Semantic Versioning: http://semver.org/spec/v2.0.0.html

###### Contributed by <a href="mailto:smrogers@fullsail.edu">Shaun M. Rogers</a>
