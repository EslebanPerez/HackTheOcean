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
app.listen(port, () => {
    console.log(`Listening to requests on port ${port}`);
});
