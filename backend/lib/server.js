const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(
  express.json({
    type: "*/*",
  })
);

app.use(cors());

const port = process.env.PORT || 3000;
const EventsService = require("./services/EventsService");
const volunteerService = require("./services/volunteerService");

app.get("/", (req, res) => {
    res.json({ message: "alive" });
});

app.get("/v1/volunteer/", async (req,res) => {
    const volunteer = await volunteerService.getAllVolunteers();
    res.json(volunteer);
});
app.get("/v1/volunteer/:volunteerId", async (req,res) => {
    const id = parseInt(req.params.volunteerId);
    const volunteer = await volunteerService.getVolunteerById(id);
    res.json(volunteer);
});
app.get("/v1/volunteer/beach/:beach", async (req,res) => {
    const beach = req.params.beach;
    const volunteers = await volunteerService.getVolunteerByBeach(beach);
    res.json(volunteers);
});

app.post("/v1/volunteer/", async (req, res) => {
    const data = { 
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        age : parseInt(req.body.age),
        city : req.body.city,
        avMonday:  Boolean(req.body.avMonday),
        avTuesday: Boolean(req.body.avTuesday),
        avWednesday: Boolean(req.body.avWednesday),
        avThursday: Boolean(req.body.avThursday),
        avFriday: Boolean(req.body.avFriday),
        avSaturday: Boolean(req.body.avSaturday),
        avSunday: Boolean(req.body.avSunday),
        beaches : req.body.beaches
    };
    await volunteerService.createVolunteer(data);
    return res.json({message: "Volunteer created"});
});
app.put("/v1/volunteer/:volunteerId", async (req, res) => {
    const id = parseInt(req.params.volunteerId);
    const data = {
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        age : req.body.age,
        city : req.body.city,
        avMonday:  req.body.avMonday,
        avTuesday: req.body.avTuesday,
        avWednesday: req.body.avWednesday,
        avThursday: req.body.avThursday,
        avFriday: req.body.avFriday,
        avSaturday: req.body.avSaturday,
        avSunday: req.body.avSunday,
        beaches : req.body.beaches
    };
    await volunteerService.updateVolunteerById(id,data);
    return res.json({message: "Actualizado"});
});
app.delete("/v1/volunteer/:volunteerId", async (req, res) => {
    const id = parseInt(req.params.volunteerId);
    await volunteerService.deleteVolunteer(id);
    return res.json({message: " Volunteer deleted"});
});


app.get("/v1/events", async (req, res) => {
    const event = await EventsService.getAll();
    res.json(event);
});

app.get("/v1/events/:eventId", async (req, res) => {
    const id = parseInt(req.params.eventId);
    const event = await EventsService.getEventsById(id);
    res.json(event);
});

app.post("/v1/events/", async (req, res) => {
    const events = {
        eventDate: new Date(req.body.eventDate),
        beach: req.body.beach,
    };
    EventsService.addNewEvents(events);
    return res.json({ message: "Create" });
});

app.delete("/v1/events/:eventId", async (req, res) => {
    const id = parseInt(req.params.eventId);
    await EventsService.deleteEvents(id);
    return res.json({ message: "Suprimido" });
});

app.put("/v1/events/:eventId", async (req, res) => {
    const id = parseInt(req.params.eventId);
    const data = {
        eventDate: new Date(req.body.eventDate),
        beach: req.body.beach,
    };
    await EventsService.updateEventsById(id, data);
    return res.json({ message: "Actualizado" });
});

app.listen(port, () => {
    console.log(`Listening to requests on port ${port}`);
});