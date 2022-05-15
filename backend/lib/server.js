const express = require("express");
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
const EventsService = require("./services/EventsService");


app.get("/", (req, res) => {
  res.json({ message: "alive" });
});

app.get("/v1/events", async (req, res) =>{
  const event = await EventsService.getAll();
  res.json(event);
})

app.get("/v1/events/:eventId", async (req,res) => {
    const id = parseInt(req.params.eventId);
    const event = await EventsService.getEventsById(id);
    res.json(event);
});

app.post("/v1/events/", async (req, res) =>{
  const events = {
    eventDate: new Date(req.body.eventDate),
    eventDay: req.body.eventDay,
    beach: req.body.beach
  }
  EventsService.addNewEvents(events);
  return res.json({message: "Create"})
})

app.delete("/v1/events/:eventId", async (req, res) => {
  const id = parseInt(req.params.eventId);
  await EventsService.deleteEvents(id)
  return res.json({message: "Suprimido"})
})

app.put("/v1/events/:eventId", async (req, res) => {
  const id = parseInt(req.params.eventId);
  const data = {
    eventDate:  new Date(req.body.eventDate),
    beach: req.body.beach
  }
  await EventsService.updateEventsById(id,data)
  return res.json({message: "Actualizado"})
})

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});
