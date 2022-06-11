# Poll.io API support.


## Voter

| Method | End point      | Header | Body           | Response       |
| ------ | -------------- | ------ | -------------- | -------------- |
| GET    | /api/voter     | null   | null           | [click Here]() |
| GET    | /api/voter/:id | null   | null           | [click Here]() |
| POST   | /api/voter     | null   | [click Here]() | [click Here]() |
| PUT    | /api/voter/:id | null   | [click Here]() | [click Here]() |

### response of getting the list of all voters

```JSON

[
  {
    "id": "first",
    "name": "Rohit",
    "verified": false,
    "pollId": "mypoll",
    "photoUrl": "/url",
    "email": "my@gmail.com",
    "createdAt": "2022-06-10T03:58:05.000Z",
    "updatedAt": "2022-06-10T03:58:05.000Z"
  }
]

```
### response of getting voters by id

```JSON

{
    "id": "first",
    "name": "Rohit",
    "verified": false,
    "pollId": "mypoll",
    "photoUrl": "/url",
    "email": "my@gmail.com",
    "createdAt": "2022-06-10T03:58:05.000Z",
    "updatedAt": "2022-06-10T03:58:05.000Z"
}

```
### body for creating a voter

```JSON

{
    "id": "six",
    "name": "Rohit",
    "verfied" : false,         // Optional
    "pollId": "mypoll",        // Optional
    "photoUrl": "www.url.com", // must be a valid ur;
    "email": "my@gmail.com"
}

```

### response of voters creation

```JSON

{
  "verified": false,
  "id": "six",
  "name": "Rohit",
  "pollId": "mypoll",
  "photoUrl": "www.url.com",
  "email": "my@gmail.com",
  "updatedAt": "2022-06-11T09:18:38.752Z",
  "createdAt": "2022-06-11T09:18:38.752Z"
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

| Method | End point          | Header | Body           | Response       |
| ------ | ------------------ | ------ | -------------- | -------------- |
| GET    | /api/candidate     | null   | null           | [click Here]() |
| GET    | /api/candidate/:id | null   | null           | [click Here]() |
| POST   | /api/candidate     | null   | [click Here]() | [click Here]() |
| PUT    | /api/candidate/:id | null   | [click Here]() | [click Here]() |

### response of getting the list of all candidates

```JSON

[
  {
    "id": "first",
    "name": "Rohit Singh",
    "pollId": null,
    "imageUrl": "hi",
    "voteCount": 0,
    "description": null,
    "createdAt": "2022-06-10T05:49:38.000Z",
    "updatedAt": "2022-06-10T05:51:02.000Z"
  }
]

```
### response of getting candidate by id

```JSON

{
    "id": "first",
    "name": "Rohit Singh",
    "pollId": null,
    "imageUrl": "hi",
    "voteCount": 0,
    "description": null,
    "createdAt": "2022-06-10T05:49:38.000Z",
    "updatedAt": "2022-06-10T05:51:02.000Z"
}

```
### body for creating candidates

```JSON

{
    "id": "first",
    "name": "Rohit Singh",
    "pollId": null,             // Optional
    "imageUrl": "www.hi.com",   
    "voteCount": 0,             // Optional
    "description": null         // optional
}

```

### response of candidate creation

```JSON

{
  "voteCount": 0,
  "id": "ten",
  "name": "Rohit Singh",
  "imageUrl": "www.hi.com",
  "updatedAt": "2022-06-11T09:23:49.893Z",
  "createdAt": "2022-06-11T09:23:49.893Z"
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

| Method | End point          | Header | Body           | Response       |
| ------ | ------------------ | ------ | -------------- | -------------- |
| GET    | /api/organizer     | null   | null           | [click Here]() |
| GET    | /api/organizer/:id | null   | null           | [click Here]() |
| POST   | /api/organizer     | null   | [click Here]() | [click Here]() |
| PUT    | /api/organizer/:id | null   | [click Here]() | [click Here]() |

### response of getting the list of all organisers

```JSON

[
  {
    "id": "first",
    "name": "Rohit Singh",
    "address": "something",
    "phone": 7003257593,
    "email": "singh.rohit@gamil.com",
    "createdAt": "2022-06-10T05:44:45.000Z",
    "updatedAt": "2022-06-10T05:45:32.000Z"
  }
]

```
### response of getting organiser by id

```JSON

{
    "id": "first",
    "name": "Rohit Singh",
    "address": "something",
    "phone": 7003257593,
    "email": "singh.rohit@gamil.com",
    "createdAt": "2022-06-10T05:44:45.000Z",
    "updatedAt": "2022-06-10T05:45:32.000Z"
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
  "id": "ten",
  "name": "Rohit Singh",
  "address": "something",
  "phone": 7003257593,
  "email": "singh.rohit@gamil.com",
  "updatedAt": "2022-06-11T09:26:55.989Z",
  "createdAt": "2022-06-11T09:26:55.989Z"
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

| Method | End point     | Header | Body                                   | Response                                  |
| ------ | ------------- | ------ | -------------------------------------- | ----------------------------------------- |
| GET    | /api/poll     | null   | null                                   | [click Here]()                            |
| GET    | /api/poll/:id | null   | null                                   | [click Here]()                            |
| POST   | /api/poll     | null   | [click Here]()                         | [click Here]()                            |
| PUT    | /api/poll/:id | null   | [click Here](#-body-for-poll-updation) | [click Here](#-response-of-poll-updation) |


### response of getting the list of all polls

```JSON

[
  {
    "id": "somethig",
    "name": "First-Poll",
    "status": "Created",
    "startDate": "2022-01-17T04:33:12Z",
    "endDate": "2022-01-17T04:33:12Z",
    "pollType": "Public",
    "createdAt": "2022-06-10T05:35:49.000Z",
    "updatedAt": "2022-06-10T05:35:49.000Z"
  }
]

```
### response of getting poll by id

```JSON

{
  "id": "somethig",
  "name": "First-Poll",
  "status": "Created",
  "startDate": "2022-01-17T04:33:12Z",
  "endDate": "2022-01-17T04:33:12Z",
  "pollType": "Public",
  "createdAt": "2022-06-10T05:35:49.000Z",
  "updatedAt": "2022-06-10T05:35:49.000Z"
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
  "pollType": "Public"                  // Optional
}

```

### response of poll creation

```JSON

{
  "id": "somethig12",
  "name": "First-Poll",
  "status": "Created",
  "startDate": "2022-01-17T04:33:12Z",
  "endDate": "2022-01-17T04:33:12Z",
  "pollType": "Public",
  "updatedAt": "2022-06-11T09:29:21.423Z",
  "createdAt": "2022-06-11T09:29:21.423Z"
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


| Method | End point   | Header | Body                                    | Response                                   |
| ------ | ----------- | ------ | --------------------------------------- | ------------------------------------------ |
| POST   | /api/upload | null   | [click Here](###-body-for-image-upload) | [click Here](###-response-of-image-upload) |

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