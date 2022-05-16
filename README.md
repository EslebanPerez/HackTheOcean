<span align="center">
<h1>HackTheOcean 🌊</h1>

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
* _Zonas Geográficas._  🌎 
* _Actividades de voluntariado._ 👷
* _Formas de recompensa digital a los voluntariados._ 💸
* _Suscripción de organismos expertos en cuidado del ambiente._ 🏤 
* _Integración con redes sociales._ 📲 
* _Control de eventos de limpieza de playas._ 🏝

## **HERRAMIENTAS A UTILIZAR** 💻 
* _PostgreSQL -> Para almacenar los voluntarios, información de los sitios para limpieza, información de organizaciones expertas._
* _Pagina de consulta con la información de forma sencilla (Frontend), usando HTML, CSS & JAVASCRIPT._
* _Uso de Backend para recibir la información de los voluntarios (Express)._
* _Uso de Azure para hospedar la base de datos de PostgreSQL._

## **DESCRIPCIÓN DE LA PROPUESTA** 📗 
_La función principal de la plataforma será concentrar voluntarios con la intención de realizar tareas de limpieza en playas, se agruparan por zonas en común los cuales serán invitados a realizar la limpieza una fecha programada._

_Es necesario que la parte administradora se encargue de definir los lugares en donde llegaran los voluntarios y agendar un servicio de colecta de basura._

_Se requerirá la información necesaria a los voluntarios y por medio de un correo electronico se les notificará y se les requerirá su confirmacion, conforme a la aceptación de las personas y voluntariados se ampliaran los sitios de limpieza así como las actividades con la intención de generar participación de organizaciones y organizmos especializados para poder brindar alguna recompensa a nuestros voluntarios._


=======
# Technical Documentation 📖

## Instalación 🛠

**Compiles and hot-reloads for development**

`npm install`

**Create .env file with the URL for your local DB**

``
DATABASE_URL="postgresql://username:PASSWORD@localhost:5432/database_name?schema=public"
``

**Lints and fixes files**

`npm run lint`

## Dependencias 📦

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

**Download Postman file with endpoints here**
[HackTheOcean API.postman_collection.zip](https://github.com/JonathanJRodriguez/HackTheOcean/files/8696084/HackTheOcean.API.postman_collection.zip)


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

**LandingPage** (color differs)

![GIF_2022_05_15_19_47_34](https://user-images.githubusercontent.com/99201962/168502708-74e866e9-d54e-4088-8908-9037921d08db.gif)


**Form Access** (color differs)

![GIF_2022_05_15_19_48_25](https://user-images.githubusercontent.com/99201962/168502723-c32b4402-1461-43d6-9d32-238c097c9eb1.gif)


**Volunteer Form**

![image](https://user-images.githubusercontent.com/99201962/168501780-3a9c8459-36e9-4329-8ac3-4cd89ba401fd.png)

**PostgreSQL database in Azure**

![image](https://user-images.githubusercontent.com/99201962/168500294-e1ffd6e2-bd10-4a59-8fb1-ffad4ce0ccf5.png)

**Volunteer information entered via Front-end form**

![image](https://user-images.githubusercontent.com/99201962/168500568-f51a1c42-2263-42d5-a319-0568d0f6fa66.png)

**Events information entered via HTML methods and Postman**

![image](https://user-images.githubusercontent.com/99201962/168500623-e3035257-bd3e-4ff5-a953-5827e7cbdf6d.png)

**Using endpoints in Browser**

![GIF_2022_05_15_19_29_50](https://user-images.githubusercontent.com/99201962/168501492-694bf2ef-bf09-4921-9d4d-9bb135949633.gif)


## Team Members 🙋‍♂️

[@EslebanPerez](https://github.com/EslebanPerez)

[@gambii007](https://github.com/gambii007)

[@gumodi35](https://github.com/gumodi35)

[@JonathanJRodriguez](https://github.com/JonathanJRodriguez)

[@Saul-Larios](https://github.com/Saul-Larios)
