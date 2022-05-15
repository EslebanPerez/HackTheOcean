# HackTheOcean 🌊


<span align="center">

![logo](/Web/assets/Logo.png)

</span>
 
# **PLATAFORMA DE VOLUNTARIADO PARA LIMPIEZA DE PLAYAS** 🌞 

## **PROBLEMA** ❔
* _Colaborar en la limpieza de las playas ocasionada por la basura   acumulada y depositada en zonas de playa_.

<span align="center">

![logo](/Web/assets/limpieza.jfif)

</span>

## **PROPUESTA** 💡
* _Crear una plataforma de voluntariado para generar brigadas de limpieza de playas en varias zonas geograficas_.


## **ELEMENTOS ESCALABLES** 
* _Zonas Geograficas._  🌎 
* _Actividades de voluntariado._ 👷
* _Formas de recompensa digital a los voluntariados._ 💸
* _Suscripcion de organismos expertos en cuidado del ambiente._ 🏤 
* _Integracion con redes sociales._ 📲 

## **HERRAMIENTAS A UTILIZAR** 💻 
* _PostgreSQL -> Para almacenar los voluntarios, informacion de los sitios para limpieza, informacion de organizaciones expertas._
* _Pagina de consulta con la informacion de forma sencilla (Frontend), usando HTML, CSS & JAVASCRIPT._
* _Uso de Backend para recibir la informacion de los voluntarios (Express)._

## **DESCRIPCION DE LA PROPUESTA** 📗 
_La funcion principal de la plataforma sera concentrar voluntarios con la intencion de realizar tareas de limpieza en playas, se agruparar por zonas en comun los cuales seran invitados a realizar la limpieza una fecha programada._

_Es necesario que la parte administradora se encargue de definir los lugares en donde llegaran los voluntarios y agendar un servicio de colecta de basura._

_Se requerira la informacion necesaria a los voluntarios y por medio de un correo electronico se les notificara y se les requerira su confirmacion, conforme a la aceptacion de las personas y voluntariados se ampliaran los sitios de limpieza asi como las actividades con la intencion de generar participacion de organizaciones y organizmos especializados para poder brindar alguna recompensa a nuestros voluntarios._


=======
# Technical Documentation 📖

## Installation 🛠

**Compiles and hot-reloads for development**

`npm install`

**Create .env file with the URL for your local DB**

``
DATABASE_URL="postgresql://username:PASSWORD@localhost:5432/database_name?schema=public"
``

**Lints and fixes files**

`npm run lint`

## Dependencies 📦

* Jest - For Unit Testing
* Prisma - To interact with a PostgreSQL database
* Eslint - To review format
* Express - To set a server
* Cors - To enable communication with the frontend

## Test 🔍

The tests are local, they consist on checking the CRUD functionality of the Volunteer and Events Services.

The backend was implemented using **Express** framework and **Prisma** to create and interact with a database in **PostgreSQL**

## Diagrams 📕

**Backend Chart**

```mermaid
graph TD;
A[(Database)] -->|prisma| B(Events Service)
B --> C[Server]
A -->|prisma| D
D(Volunteer Service) -->C
```

```mermaid
classDiagram
class EventsService
EventsService : +getAllEvents()
EventsService : +getEventsById(id)
EventsService : +getEventsByDate(date)
EventsService : +getAmountPeopleInEvents(id)
EventsService : +updateEventsByID(id,data)
EventsService : +addNewEvents(event)
EventsService : +deleteEvents(id)
```
```mermaid
classDiagram
class VolunteerService
VolunteerService : +getAllVolunteers()
VolunteerService : +getVolunteerById(id)
VolunteerService : +getVolunteerByBeach(beach)
VolunteerService : +updateVolunteerByID(id,data)
VolunteerService : +createVolunteer(data)
VolunteerService : +deleteVolunteer(id)
```
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

# Screenshots 


## Team Members 🙋‍♂️

[@EslebanPerez](https://github.com/EslebanPerez)

[@gambii007](https://github.com/gambii007)

[@gumodi35](https://github.com/gumodi35)

[@JonathanJRodriguez](https://github.com/JonathanJRodriguez)

[@Saul-Larios](https://github.com/Saul-Larios)
