const EventsService = require("../../lib/services/EventsService");

describe("Unit tests for EventsService", () => {
  test("GetAll", async () => {
    const testEvents = await EventsService.getAll();
    expect(testEvents.length).toBe(6);
  });
  test("GetEventById", async () => {
    const testEvent = await EventsService.getEventsById(1);
    expect(testEvent.beach).toBe("Caletilla");
  });

  test("addNewEvents, updateEventsById and deleteEvents", async () => {
    const newEvent = {
      eventDate: new Date("2022-05-28"),
      beach: "Playa3",
    };
    const data = {
        eventDate: new Date("2022-05-30"),
        beach: "Playa4",
    };

    const result = await EventsService.addNewEvents(newEvent);
    expect(result.beach).toBe(newEvent.beach);

    const updateEvent = await EventsService.updateEventsById(result.eventId,data);
    expect(updateEvent.beach).toBe("Playa4");

    const deleteResult = await EventsService.deleteEvents(result.eventId);
    const testEvent = await EventsService.getEventsById(result.eventId);
    expect(testEvent).toBeNull();
  });
});
