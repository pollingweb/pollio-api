# Poll.io API support.

## Environment varibles

```bash
NAME = pollio
USER_NAME = root
PASSWORD = password
HOST = localhost
SERVER_PORT = 4000
```

## Dependencies :

- `.env` into root directory
- ubuntu
- node > 16
- npm
- docker
- docker-compose

## Steps to run this api.

1. Clone this github repo to your local machine.
2. Go to the project folder.
3. Add a `.env` file
4. Add [environment variables](#environment-varibles) into `.env`
5. Build docker-compose `sudo docker-compose build`
6. Run containers `sudo docker-compose up`

## API List


### Database

| Name            | Method | End point    | Header | Body | Response                            |
| --------------- | ------ | ------------ | ------ | ---- | ----------------------------------- |
| drop all tables | POST   | /api/db/drop | null   | null | [click Here](#db-drop-response)     |
| sync all tables | POST   | /api/db/sync | null   | null | [click Here](#db-creation-response) |


### Image upload

| Name                 | Method | End point          | Header | Body                                        | Response                                |
| -------------------- | ------ | ------------------ | ------ | ------------------------------------------- | --------------------------------------- |
| upload image as file | POST   | /api/upload        | null   | [click Here](#body-for-image-upload)        | [click Here](#response-of-image-upload) |
| upload base64 image  | POST   | /api/upload/base64 | null   | [click Here](#body-for-base64-image-upload) | [click Here](#response-of-image-upload) |


### Voter

| Name                | Method | End point                        | Header | Body                                         | Response                                                  |
| ------------------- | ------ | -------------------------------- | ------ | -------------------------------------------- | --------------------------------------------------------- |
| fetch all           | GET    | /api/voter                       | null   | null                                         | [click Here](#response-of-getting-the-list-of-all-voters) |
| fetch by id         | GET    | /api/voter/:id                   | null   | null                                         | [click Here](#response-of-getting-voters-by-id)           |
| sign up             | POST   | /api/voter                       | null   | [click Here](#body-for-creating-a-voter)     | [click Here](#response-of-voters-creation)                |
| update              | PUT    | /api/voter/:id                   | null   | [click Here](#body-for-voter-updation)       | [click Here](#response-of-voter-updation)                 |
| login               | POST   | /api/voter/login                 | null   | [click Here](#login-body-of-voter/organizer) | `LOGGED IN`                                               |
| verify access token | POST   | /api/voter/verify                | null   | null                                         | [click Here](#access-token-verification-response)         |
| mark as voted       | PUT    | /api/voter/:voterId/poll/:pollId | null   | null                                         | [click Here](#mark-voted-for-a-poll-response)             |

### Candidate

| Name        | Method | End point          | Header | Body                                        | Response                                                      |
| ----------- | ------ | ------------------ | ------ | ------------------------------------------- | ------------------------------------------------------------- |
| fetch all   | GET    | /api/candidate     | null   | null                                        | [click Here](#response-of-getting-the-list-of-all-candidates) |
| fetch by id | GET    | /api/candidate/:id | null   | null                                        | [click Here](#response-of-getting-candidate-by-id)            |
| add         | POST   | /api/candidate     | null   | [click Here](#body-for-creating-candidates) | [click Here](#response-of-candidate-creation)                 |
| update      | PUT    | /api/candidate/:id | null   | [click Here](#body-for-candidate-updation)  | [click Here](#response-of-candidate-updation)                 |


### Organiser

| Name                | Method | End point             | Header | Body                                         | Response                                                      |
| ------------------- | ------ | --------------------- | ------ | -------------------------------------------- | ------------------------------------------------------------- |
| fetch all           | GET    | /api/organizer        | null   | null                                         | [click Here](#response-of-getting-the-list-of-all-organisers) |
| fetch by id         | GET    | /api/organizer/:id    | null   | null                                         | [click Here](#response-of-getting-organiser-by-id)            |
| sign up             | POST   | /api/organizer        | null   | [click Here](#body-for-creating-organiser)   | [click Here](#response-of-organisers-creation)                |
| update              | PUT    | /api/organizer/:id    | null   | [click Here](#body-for-organisers-updation)  | [click Here](#response-of-organisers-updation)                |
| login               | POST   | /api/organizer/login  | null   | [click Here](#login-body-of-voter/organizer) | "LOGGED IN"                                                   |
| verify access-token | POST   | /api/organizer/verify | null   | null                                         | [click Here](#access-token-verification-response)             |

### Poll

| Name          | Method | End point                               | Header | Body                                  | Response                                                 |
| ------------- | ------ | --------------------------------------- | ------ | ------------------------------------- | -------------------------------------------------------- |
| fetch all     | GET    | /api/poll                               | null   | null                                  | [click Here](#response-of-getting-the-list-of-all-polls) |
| fetch by id   | GET    | /api/poll/:id                           | null   | null                                  | [click Here](#response-of-getting-poll-by-id)            |
| create        | POST   | /api/poll                               | null   | [click Here](#body-for-creating-poll) | [click Here](#response-of-poll-creation)                 |
| update        | PUT    | /api/poll/:id                           | null   | [click Here](#body-for-poll-updation) | [click Here](#response-of-poll-updation)                 |
| check isVoted | GET    | /api/poll/:pollId/voter/:voterId/verify | null   | null                                  | [click Here](#isvoted-response)                          |



## Response and body list


### db drop response

```JSON

{
  "success" : true,
  "message" : "All tables are droped"
}

```

### db creation response

```JSON

{
  "success" : true,
  "message" : "All tables are altered"
}

```

-------


### login body of voter/organizer

```JSON

{
  "email" : "first@gmail.com",
  "passowrd" : "first-one"
}

```

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
        "voterId": "first-voter",
        "isVoted": false
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

### mark voted for a poll response

```JSON

{ 
  "success": true, 
  "message": "You have voted successfully!" 
}

```

### access token verification response

```JSON

{ 
  "verified" : true / false 
}

```

----------

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

-----------------


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

---------------

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
        "voterId": "first-voter",
        "isVoted": false
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

### isvoted response

```JSON

{
  "isVoted" : true / false
}

```

------------

### body for image upload

```HTML
    <form action="http://localhost:3000/api/upload" method="post" enctype="multipart/form-data">
        <input type="file" name="field-name"/>
        <input type="submit"/>
    </form>
```

### body for base64 image upload

```json

{
  "name" : "some.png",
  "base64" : "base64 string"

}
```

### response of image upload

```JSON

{
  "success": true,
  "message": "Image uploaded successfully!",
  "url": "http://localhost:3000/uploads/image/1654939889947..png"
}

```


