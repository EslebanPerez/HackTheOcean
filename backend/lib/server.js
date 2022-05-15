const express = require("express");
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
const EventsService = require("./services/EventsService");
const volunteerService = require("./services/volunteerService");

app.get("/", (req, res) => {
    res.json({ message: "alive" });
});

app.get("/v1/events/:eventId", async (req,res) => {
    const id = parseInt(req.params.eventId);
    const event = await EventsService.getEventsById(id);
    res.json(event);
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
app.listen(port, () => {
    console.log(`Listening to requests on port ${port}`);
});
