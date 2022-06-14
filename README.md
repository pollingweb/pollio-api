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
    "id": "first-voter",
    "name": "my first voter",
    "verified": false,
    "photoUrl": "www.first.com",
    "email": "first-voter@gmail.com",
    "password": "$2b$10$LzWe9Q2dI4iNgZj1oHUtD.Psj/oDqhSg.bQBdHZkhBgaFSlhlXvyC",
    "createdAt": "2022-06-14T05:48:38.000Z",
    "updatedAt": "2022-06-14T05:48:38.000Z"
  }
]

```
### response of getting voters by id

```JSON

{
  "id": "first-voter",
  "name": "my first voter",
  "verified": false,
  "photoUrl": "www.first.com",
  "email": "first-voter@gmail.com",
  "password": "$2b$10$LzWe9Q2dI4iNgZj1oHUtD.Psj/oDqhSg.bQBdHZkhBgaFSlhlXvyC",
  "createdAt": "2022-06-14T05:48:38.000Z",
  "updatedAt": "2022-06-14T05:48:38.000Z",
  "polls": [
    {
      "id": "first-poll",
      "name": "my first poll",
      "status": "Created",
      "startDate": "2022-06-14 10:12:00",
      "endDate": "2022-06-14 14:12:00",
      "pollType": "Public",
      "createdAt": "2022-06-14T05:23:54.000Z",
      "updatedAt": "2022-06-14T05:23:54.000Z",
      "organizerId": null,
      "poll_voter": {
        "id": 1,
        "pollId": "first-poll",
        "voterId": "first-voter"
      }
    }
  ]
}

```
### body for creating a voter

```JSON

{
    "id": "first-voter",
    "name": "my first",
    "verfied" : false,            // Optional
    "photoUrl": "www.first.com",  // must be a valid url;
    "password" : "first-voter",
    "email" : "first-voter@gmail.com"
}

```

### response of voters creation

```JSON

{
  "verified": false,
  "id": "first-voter",
  "name": "my first voter",
  "photoUrl": "www.first.com",
  "email": "first-voter@gmail.com",
  "password": "$2b$10$LzWe9Q2dI4iNgZj1oHUtD.Psj/oDqhSg.bQBdHZkhBgaFSlhlXvyC",
  "updatedAt": "2022-06-14T05:48:38.815Z",
  "createdAt": "2022-06-14T05:48:38.815Z"
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
    "pollId": "first-poll"
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
  "updatedAt": "2022-06-14T06:19:15.000Z",
  "pollId": "first-poll",
  "poll": {
    "id": "first-poll",
    "name": "my first poll",
    "status": "Created",
    "startDate": "2022-06-14 10:12:00",
    "endDate": "2022-06-14 14:12:00",
    "pollType": "Public",
    "createdAt": "2022-06-14T05:23:54.000Z",
    "updatedAt": "2022-06-14T06:12:20.000Z",
    "organizerId": "first-organiser"
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
    "id": "first-organiser",
    "name": "first org",
    "address": "default",
    "phone": 1234569870,
    "email": "first-org@gmail.com",
    "password": "$2b$10$TbDPMPlqX6SawTT8CWVEIeQaqa4BcM6z6nNKVOrSUfJfU4.kLbGf2",
    "createdAt": "2022-06-14T06:09:57.000Z",
    "updatedAt": "2022-06-14T06:09:57.000Z"
  }
]
```
### response of getting organiser by id

```JSON

{
  "id": "first-organiser",
  "name": "first org",
  "address": "default",
  "phone": 1234569870,
  "email": "first-org@gmail.com",
  "password": "$2b$10$TbDPMPlqX6SawTT8CWVEIeQaqa4BcM6z6nNKVOrSUfJfU4.kLbGf2",
  "createdAt": "2022-06-14T06:09:57.000Z",
  "updatedAt": "2022-06-14T06:09:57.000Z",
  "polls": [
    {
      "id": "first-poll",
      "name": "my first poll",
      "status": "Created",
      "startDate": "2022-06-14 10:12:00",
      "endDate": "2022-06-14 14:12:00",
      "pollType": "Public",
      "createdAt": "2022-06-14T05:23:54.000Z",
      "updatedAt": "2022-06-14T06:12:20.000Z",
      "organizerId": "first-organiser"
    }
  ]
}

```
### body for creating organiser

```JSON

{
    "id" :"first-organiser",
    "name" : "first org",
    "phone" : 1234569870,
    "email" : "first-org@gmail.com",
    "address" : "default",
    "password" :"defult-pass"
}

```

### response of organisers creation

```JSON

{
  "id": "first-organiser",
  "name": "first org",
  "phone": 1234569870,
  "email": "first-org@gmail.com",
  "address": "default",
  "password": "$2b$10$TbDPMPlqX6SawTT8CWVEIeQaqa4BcM6z6nNKVOrSUfJfU4.kLbGf2",
  "updatedAt": "2022-06-14T06:09:57.924Z",
  "createdAt": "2022-06-14T06:09:57.924Z"
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
    "id": "first-poll",
    "name": "my first poll",
    "status": "Created",
    "startDate": "2022-06-14 10:12:00",
    "endDate": "2022-06-14 14:12:00",
    "pollType": "Public",
    "createdAt": "2022-06-14T05:23:54.000Z",
    "updatedAt": "2022-06-14T05:23:54.000Z",
    "organizerId": null
  }
]

```
### response of getting poll by id

```JSON

{
  "id": "first-poll",
  "name": "my first poll",
  "status": "Created",
  "startDate": "2022-06-14 10:12:00",
  "endDate": "2022-06-14 14:12:00",
  "pollType": "Public",
  "createdAt": "2022-06-14T05:23:54.000Z",
  "updatedAt": "2022-06-14T06:12:20.000Z",
  "organizerId": "first-organiser",
  "organizer": {
    "id": "first-organiser",
    "name": "first org",
    "address": "default",
    "phone": 1234569870,
    "email": "first-org@gmail.com",
    "password": "$2b$10$TbDPMPlqX6SawTT8CWVEIeQaqa4BcM6z6nNKVOrSUfJfU4.kLbGf2",
    "createdAt": "2022-06-14T06:09:57.000Z",
    "updatedAt": "2022-06-14T06:09:57.000Z"
  },
  "candidates": [
    {
      "id": "my candidate",
      "name": "Himanshu",
      "imageUrl": "www.url.com",
      "voteCount": 0,
      "description": null,
      "createdAt": "2022-06-12T06:26:07.000Z",
      "updatedAt": "2022-06-14T06:19:15.000Z",
      "pollId": "first-poll"
    }
  ],
  "voters": [
    {
      "id": "first-voter",
      "name": "my first voter",
      "verified": false,
      "photoUrl": "www.first.com",
      "email": "first-voter@gmail.com",
      "createdAt": "2022-06-14T05:48:38.000Z",
      "updatedAt": "2022-06-14T05:48:38.000Z",
      "poll_voter": {
        "id": 1,
        "pollId": "first-poll",
        "voterId": "first-voter"
      }
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
  "organiserId": "hello",               // Optional
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