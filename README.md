# HackTheOcean 🌊


Proyecto para Hackatón Launch X 2022
=======

## Problem definition 💡

## Instalation 🛠

**Compiles and hot-reloads for development**

`npm install`

**Create .env file with the URL**

``
DATABASE_URL="postgresql://username:PASSWORD@localhost:5432/database_name?schema=public"
``

**Lints and fixes files**

`npm run lint`

## Dependencies 📦

## Test 🔍

## Documentation 📖


```mermaid
graph TD;
F(Server)
A(Axios http-common.js)
B(volunteerService)
C(Componets)
D(Router)
E(main.js)
F-->|conect|A
A-->|import|B
B-->|import methods|C
C-->|import componets|D
D-->|import|E
```

```mermaid
graph TD;
Component(Component)
addvolunteer(addvolunteer)
volunteer(volunteer)

savevolunteer(savevolunteer)
deletevolunteer(deletevolunteer)
editvolunteer(editvolunteer)
updatevolunteer(updatevolunteer)
getAllvolunteer(getAllvolunteer)

volunteerList(volunteerList)
Component --> addvolunteer
Component --> volunteer
Component --> volunteerList

addvolunteer --> savevolunteer

volunteer --> deletevolunteer
volunteer --> editvolunteer
volunteer --> updatevolunteer

volunteerList --> getAllvolunteer
```
# Backend Documentation.

The backend was implemented using **Express** framework and **Prisma** to create and interact with a database in **PostgreSQL**

## Data dictionary 📕

**Volunteers Table**

| Column           | Data type    | Description                                                 |
| ---------------- | ------------ | ----------------------------------------------------------- |
| volunteerId      | Int          | Primary key                                                 |
| firstName        | Varchar(255) | The first name of the volunteer                             |
| lastName         | Varchar(255) | The last name of the volunteer                              |
| email            | Varchar(255) | The email of the volunteer                                  |
| age              | Int          | The age of the volunteer                                    |
| city             | Varchar(255) | The city where the volunteer lives                          |
| dateCreated      | Datetime     | Date time of creation of this volunteer                     |
| avMonday         | Boolean      | Monday availability                                         |
| avTuesday        | Boolean      | Tuesday availability                                        |
| avWednesday      | Boolean      | Wednesday availability                                      |
| avThursday       | Boolean      | Thursday availability                                       |
| avFriday         | Boolean      | Friday availability                                         |
| avSaturday       | Boolean      | Saturday availability                                       |
| avSunday         | Boolean      | Sunday availability                                         |
| eventIdMonday    | Int          | The id of the event confirmed by the volunteer on Monday    |
| eventIdTuesday   | Int          | The id of the event confirmed by the volunteer on Tuesday   |
| eventIdWednesday | Int          | The id of the event confirmed by the volunteer on Wednesday |
| eventIdThursday  | Int          | The id of the event confirmed by the volunteer on Thursday  |
| eventIdFriday    | Int          | The id of the event confirmed by the volunteer on Friday    |
| eventIdSaturday  | Int          | The id of the event confirmed by the volunteer on Saturday  |
| eventIdSunday    | Int          | The id of the event confirmed by the volunteer on Sunday    |
| beaches          | Varchar(255) | List of beaches for the volunteer                           |

**Events Table**

| Column      | Data type    | Description                               |
| ----------- | ------------ | ----------------------------------------- |
| eventId     | Int          | Primary Key                               |
| eventDate   | Datetime     | The date of the event                     |
| eventDay    | Varchar(255) | Weekday of the event (Monday to Sunday)   |
| beach       | Varchar(255) | The beach where the event will take place |
| dateCreated | Datetime     | Event registration date                   |

## Endpoints 📌

**Endpoints Volunteers**

| Method HTTP | Endpoint | Request | Response |
|---|---|---|---|
| GET  | `localhost:3000/v1/volunteers/` | `localhost:3000/v1/volunteers` | Obtain all volunteers registred |
| GET | `localhost:3000/v1/volunteers/:volunteerId` | `localhost:3000/v1/volunteers/1` | Obtain a volunteer by id |
| GET | `localhost:3000/v1/volunteers/:beach` | `localhost:3000/v1/volunters/cozumel` | Obtain volunteers by beach |
| POST | `localhost:3000/v1/volunteers/` | `localhost:3000/v1/volunteers` | Create a new volunteer |
| PUT | `localhost:3000/v1/volunteers/:volunteerId` | `localhost:3000/v1/volunteers/1` | Update a volunteer |
| DELETE | `localhost:3000/v1/volunteers/:volunteerId` | `localhost:3000/v1/volunteers/1` | Delete a volunteer |

**Endpoints Events**

| Method HTPP | Endpoint | Request | Response |
|---|---|---|---|
| GET | `localhost:3000/v1/events` | `localhost:3000/v1/events` | Events list |
| GET | `localhost:3000/v1/events/:eventId` | ` localhost:3000/v1/events/2205141` | Event list by ID |
| GET | `localhost:3000/v1/events/date/:date` | `localhost:3000/v1/events/date/220514` | Event list by Date |
| PUT | `localhost:3000/v1/events/:eventId` | ` localhost:3000/v1/events/2205141` | Update Event by ID |
| POST | `localhost:3000/v1/events/:eventId` | `localhost:3000/v1/events/2205142` | Add new Event |
| DELETE | `localhost:3000/v1/events/:eventId` | `localhost:3000/v1/events/2205141` | Delete Event |


## Team's Members 🙋‍♂️
