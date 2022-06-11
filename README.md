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

```
### response of getting voters by id

```JSON

```
### body for creating a voter

```JSON

```

### response of voters creation

```JSON

```

### body for voter updation

```JSON

```

### response of voter updation

```JSON

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

```
### response of getting candidate by id

```JSON

```
### body for creating candidates

```JSON

```

### response of candidate creation

```JSON

```

### body for candidate updation

```JSON

```

### response of candidate updation

```JSON

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

```
### response of getting organiser by id

```JSON

```
### body for creating organiser

```JSON

```

### response of organisers creation

```JSON

```

### body for organisers updation

```JSON

```

### response of organisers updation

```JSON

```

## Poll

| Method | End point     | Header | Body           | Response       |
| ------ | ------------- | ------ | -------------- | -------------- |
| GET    | /api/poll     | null   | null           | [click Here]() |
| GET    | /api/poll/:id | null   | null           | [click Here]() |
| POST   | /api/poll     | null   | [click Here]() | [click Here]() |
| PUT    | /api/poll/:id | null   | [click Here]() | [click Here]() |


### response of getting the list of all polls

```JSON

```
### response of getting poll by id

```JSON

```
### body for creating poll

```JSON

```

### response of poll creation

```JSON

```

### body for poll updation

```JSON

```

### response of poll updation

```JSON

```

## Image upload


| Method | End point   | Header | Body           | Response       |
| ------ | ----------- | ------ | -------------- | -------------- |
| POST   | /api/upload | null   | [click Here]() | [click Here]() |

### body for image upload

```JSON

```

### response of image upload

```JSON

```

### call this api like 👇️

```HTML
    <form action="http://localhost:3000/api/upload" method="post" enctype="multipart/form-data">
        <input type="file" name="field-name"/>
        <input type="submit"/>
    </form>
```