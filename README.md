# Poll.io API support.

Added the below environments to `.env` file

```bash
NAME = pollio
USER_NAME = root
PASSWORD = password
HOST = localhost
```

## Dependencies :

- `.env` into root directory
- ubuntu
- node > 16
- npm
- docker
- docker-compose

## Voter

| Method | End point      | Header | Body                                     | Response                                                  |
| ------ | -------------- | ------ | ---------------------------------------- | --------------------------------------------------------- |
| GET    | /api/voter     | null   | null                                     | [click Here](#response-of-getting-the-list-of-all-voters) |
| GET    | /api/voter/:id | null   | null                                     | [click Here](#response-of-getting-voters-by-id)           |
| POST   | /api/voter     | null   | [click Here](#body-for-creating-a-voter) | [click Here](#response-of-voters-creation)                |
| PUT    | /api/voter/:id | null   | [click Here](#body-for-voter-updation)   | [click Here](#response-of-voter-updation)                 |

### response of getting the list of all voters

```JSON

[
  {
    "id": "voter1",
    "name": "Mohit",
    "verified": false,
    "photoUrl": "www.url.com",
    "email": "singh.rohitsingh2k@gmail.com",
    "createdAt": "2022-06-12T06:07:43.000Z",
    "updatedAt": "2022-06-12T06:08:27.000Z",
    "PollId": "first"
  }
]

```
### response of getting voters by id

```JSON

{
  "id": "voter1",
  "name": "Mohit",
  "verified": false,
  "photoUrl": "www.url.com",
  "email": "singh.rohitsingh2k@gmail.com",
  "createdAt": "2022-06-12T06:07:43.000Z",
  "updatedAt": "2022-06-12T06:08:27.000Z",
  "PollId": "first"
}

```
### body for creating a voter

```JSON

{
    "id": "six",
    "name": "Rohit",
    "verfied" : false,         // Optional
    "pollId": "mypoll",        // Optional
    "photoUrl": "www.url.com", // must be a valid url;
    "email": "my@gmail.com",
    "PollId": "first"          // Optional
}

```

### response of voters creation

```JSON

{
  "verified": false,
  "id": "sec",
  "name": "Rohit",
  "photoUrl": "www.url.com",
  "email": "my@gmail.com",
  "updatedAt": "2022-06-12T06:56:40.369Z",
  "createdAt": "2022-06-12T06:56:40.369Z"
}

```

### body for voter updation

```JSON

{
    "field-name" : "value"
}

```

### response of voter updation

```JSON

{
  "message": "voter updated successfully!"
}

```


## Candidate

| Method | End point          | Header | Body                                        | Response                                                      |
| ------ | ------------------ | ------ | ------------------------------------------- | ------------------------------------------------------------- |
| GET    | /api/candidate     | null   | null                                        | [click Here](#response-of-getting-the-list-of-all-candidates) |
| GET    | /api/candidate/:id | null   | null                                        | [click Here](#response-of-getting-candidate-by-id)            |
| POST   | /api/candidate     | null   | [click Here](#body-for-creating-candidates) | [click Here](#response-of-candidate-creation)                 |
| PUT    | /api/candidate/:id | null   | [click Here](#body-for-candidate-updation)  | [click Here](#response-of-candidate-updation)                 |

### response of getting the list of all candidates

```JSON

[
  {
    "id": "my candidate",
    "name": "Himanshu",
    "imageUrl": "www.url.com",
    "voteCount": 0,
    "description": null,
    "createdAt": "2022-06-12T06:26:07.000Z",
    "updatedAt": "2022-06-12T06:26:07.000Z",
    "PollId": "first"
  }
]

```
### response of getting candidate by id

```JSON

{
  "id": "my candidate",
  "name": "Himanshu",
  "imageUrl": "www.url.com",
  "voteCount": 0,
  "description": null,
  "createdAt": "2022-06-12T06:26:07.000Z",
  "updatedAt": "2022-06-12T06:26:07.000Z",
  "PollId": "first",
  "Poll": {
    "id": "first",
    "name": "Anuj",
    "status": "Created",
    "startDate": "2022-06-25 10:12:00",
    "endDate": "2022-06-26 10:12:00",
    "pollType": "Public",
    "createdAt": "2022-06-12T05:53:47.000Z",
    "updatedAt": "2022-06-12T06:04:53.000Z",
    "OrganiserId": "hello"
  }
}

```
### body for creating candidates

```JSON

{
    "id": "first",
    "name": "Rohit Singh",
    "PollId": null,             // Optional
    "imageUrl": "www.hi.com",   
    "voteCount": 0,             // Optional
    "description": null         // optional
}

```

### response of candidate creation

```JSON

{
  "voteCount": 0,
  "id": "second",
  "name": "Himanshu",
  "imageUrl": "www.url.com",
  "PollId": "first",
  "updatedAt": "2022-06-12T06:49:48.655Z",
  "createdAt": "2022-06-12T06:49:48.655Z"
}

```

### body for candidate updation

```JSON

{
    "field-name" : "value"
}

```

### response of candidate updation

```JSON

{
  "message": "candidate updated successfully!"
}

```

## Organiser

| Method | End point          | Header | Body                                        | Response                                                      |
| ------ | ------------------ | ------ | ------------------------------------------- | ------------------------------------------------------------- |
| GET    | /api/organizer     | null   | null                                        | [click Here](#response-of-getting-the-list-of-all-organisers) |
| GET    | /api/organizer/:id | null   | null                                        | [click Here](#response-of-getting-organiser-by-id)            |
| POST   | /api/organizer     | null   | [click Here](#body-for-creating-organiser)  | [click Here](#response-of-organisers-creation)                |
| PUT    | /api/organizer/:id | null   | [click Here](#body-for-organisers-updation) | [click Here](#response-of-organisers-updation)                |

### response of getting the list of all organisers

```JSON

[
  {
    "id": "hello",
    "name": "Anuj",
    "address": "something",
    "phone": 7003257593,
    "email": "hello@gmail.com",
    "createdAt": "2022-06-12T05:56:31.000Z",
    "updatedAt": "2022-06-12T05:56:31.000Z"
  }
]
```
### response of getting organiser by id

```JSON

{
  "id": "hello",
  "name": "Anuj",
  "address": "something",
  "phone": 7003257593,
  "email": "hello@gmail.com",
  "createdAt": "2022-06-12T05:56:31.000Z",
  "updatedAt": "2022-06-12T05:56:31.000Z",
  "Polls": [
    {
      "id": "first",
      "name": "Anuj",
      "status": "Created",
      "startDate": "2022-06-25 10:12:00",
      "endDate": "2022-06-26 10:12:00",
      "pollType": "Public",
      "createdAt": "2022-06-12T05:53:47.000Z",
      "updatedAt": "2022-06-12T06:04:53.000Z",
      "OrganiserId": "hello"
    }
  ]
}

```
### body for creating organiser

```JSON

{
    "id": "first",
    "name": "Rohit Singh",
    "address": "something",
    "phone": 7003257593,
    "email": "singh.rohit@gamil.com"
}

```

### response of organisers creation

```JSON

{
  "id": "org2",
  "name": "Rohit Singh",
  "address": "something",
  "phone": 7003257593,
  "email": "singh.rohit@gamil.com",
  "updatedAt": "2022-06-12T06:59:40.751Z",
  "createdAt": "2022-06-12T06:59:40.751Z"
}

```

### body for organisers updation

```JSON

{
    "field-name" : "value"
}

```

### response of organisers updation

```JSON

{
  "message": "organizer updated successfully!"
}

```

## Poll

| Method | End point     | Header | Body                                  | Response                                                 |
| ------ | ------------- | ------ | ------------------------------------- | -------------------------------------------------------- |
| GET    | /api/poll     | null   | null                                  | [click Here](#response-of-getting-the-list-of-all-polls) |
| GET    | /api/poll/:id | null   | null                                  | [click Here](#response-of-getting-poll-by-id)            |
| POST   | /api/poll     | null   | [click Here](#body-for-creating-poll) | [click Here](#response-of-poll-creation)                 |
| PUT    | /api/poll/:id | null   | [click Here](#body-for-poll-updation) | [click Here](#response-of-poll-updation)                 |


### response of getting the list of all polls

```JSON

[
  {
    "id": "first",
    "name": "Anuj",
    "status": "Created",
    "startDate": "2022-06-25 10:12:00",
    "endDate": "2022-06-26 10:12:00",
    "pollType": "Public",
    "createdAt": "2022-06-12T05:53:47.000Z",
    "updatedAt": "2022-06-12T06:04:53.000Z",
    "OrganiserId": "hello"
  }
]

```
### response of getting poll by id

```JSON

{
  "id": "first",
  "name": "Anuj",
  "status": "Created",
  "startDate": "2022-06-25 10:12:00",
  "endDate": "2022-06-26 10:12:00",
  "pollType": "Public",
  "createdAt": "2022-06-12T05:53:47.000Z",
  "updatedAt": "2022-06-12T06:04:53.000Z",
  "OrganiserId": "hello",
  "Organiser": {
    "id": "hello",
    "name": "Anuj",
    "address": "something",
    "phone": 7003257593,
    "email": "hello@gmail.com",
    "createdAt": "2022-06-12T05:56:31.000Z",
    "updatedAt": "2022-06-12T05:56:31.000Z"
  },
  "Candidates": [
    {
      "id": "my candidate",
      "name": "Himanshu",
      "imageUrl": "www.url.com",
      "voteCount": 0,
      "description": null,
      "createdAt": "2022-06-12T06:26:07.000Z",
      "updatedAt": "2022-06-12T06:26:07.000Z",
      "PollId": "first"
    },
    {
      "id": "second",
      "name": "Himanshu",
      "imageUrl": "www.url.com",
      "voteCount": 0,
      "description": null,
      "createdAt": "2022-06-12T06:49:48.000Z",
      "updatedAt": "2022-06-12T06:49:48.000Z",
      "PollId": "first"
    }
  ],
  "Voters": [
    {
      "id": "voter1",
      "name": "Mohit",
      "verified": false,
      "photoUrl": "www.url.com",
      "email": "singh.rohitsingh2k@gmail.com",
      "createdAt": "2022-06-12T06:07:43.000Z",
      "updatedAt": "2022-06-12T06:08:27.000Z",
      "PollId": "first"
    }
  ]
}

```
### body for creating poll

```JSON

{
  "id": "somethig12",
  "name": "First-Poll",
  "status": "Created",                  // Optional
  "startDate": "2022-01-17T04:33:12Z",
  "endDate": "2022-01-17T04:33:12Z",
  "pollType": "Public",                 // Optional
  "OrganiserId": "hello",               // Optional
}

```

### response of poll creation

```JSON

{
  "status": "Created",
  "pollType": "Public",
  "id": "somethig12",
  "name": "First-Poll",
  "startDate": "2022-01-17T04:33:12Z",
  "endDate": "2022-01-17T04:33:12Z",
  "updatedAt": "2022-06-12T06:53:56.932Z",
  "createdAt": "2022-06-12T06:53:56.932Z"
}

```

### body for poll updation

```JSON

{
    "field-name" : "value"
}

```

### response of poll updation

```JSON

{
  "message": "poll updated successfully!"
}

```

## Image upload


| Method | End point   | Header | Body                                 | Response                                |
| ------ | ----------- | ------ | ------------------------------------ | --------------------------------------- |
| POST   | /api/upload | null   | [click Here](#body-for-image-upload) | [click Here](#response-of-image-upload) |

### body for image upload

```HTML
    <form action="http://localhost:3000/api/upload" method="post" enctype="multipart/form-data">
        <input type="file" name="field-name"/>
        <input type="submit"/>
    </form>
```

### response of image upload

```JSON

{
  "success": true,
  "message": "Image uploaded successfully!",
  "url": "http://localhost:3000/uploads/image/1654939889947..png"
}

```