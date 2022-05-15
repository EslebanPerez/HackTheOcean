const EventsService = require("../../lib/services/EventsService");

describe("Unit tests for EventsService", () => {
    test("GetAll", async () => {
        expect(await EventsService.getAll()).toBe(2);
    });
    test("Use the events Service", async () => {
        expect(await EventsService.getEventsById(1).beach).toBe("Caletilla");
    });
    test("DeleteEvent",  async() => {
        expect(await EventsService.deleteEvents(4)).toBe("check")
    })    
});