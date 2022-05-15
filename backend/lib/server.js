const express = require("express");
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
const EventsService = require("./services/EventsService");


app.get("/", (req, res) => {
  res.json({ message: "alive" });
});

app.get("/v1/events/:eventId", async (req,res) => {
    const id = parseInt(req.params.eventId);
    const event = await EventsService.getEventsById(id);
    res.json(event);
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});
