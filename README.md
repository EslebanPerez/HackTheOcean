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

**End Points Events**

| Endpoint | Request | Response |
|---|---|---|
| `localhost:3000/v1/events` | `localhost:3000/v1/events` | Lista de los eventos disponibles |
| `localhost:3000/v1/events/:eventid` | ` localhost:3000/v1/events/eventId` | Lista de todos los Eventos por ID |
| `localhost:3000/v1/events/:eventid` | `localhost:3000/v1/events/events` | Añadir Nuevo Evento |
| `localhost:3000/v1/events/:eventid` | ` localhost:3000/v1/events/eventId` | Actualizar Evento por ID |
| `localhost:3000/v1/events/date/:date` | `localhost:3000/v1/events/date/eventDate` | Lista de Eventos por fecha |
| `localhost:3000/v1/events/:eventid` | `localhost:3000/v1/events/eventId` | Eliminar un Evento |

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

## Team's Members 🙋‍♂️
