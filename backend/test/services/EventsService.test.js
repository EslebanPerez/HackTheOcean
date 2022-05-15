const EventsService = require("../../lib/services/EventsService");

describe("Unit tests for EventsService", () => {
    test("Use the events Service", async () => {
        expect(await EventsService.getEventsById(1).beach).toBe("Caletilla");
    });
});