const volunteerService = require("../../lib/services/volunteerService");

describe( "Unit tests for volunteerService", () => {
    test("GetAll", async () => {
        const testVolunteers = await volunteerService.getAllVolunteers();
        expect(testVolunteers.length).toBe(8);
    });
    test("GetVolunteerById", async () => {
        const testVolunter = await volunteerService.getVolunteerById(1);
        expect(testVolunter.firstName).toBe("Pepe");
    });
    test("GetVolunteerByBeach", async () => {
        const testVolunteers = await volunteerService.getVolunteerByBeach("Caleta");
        expect(testVolunteers.length).toBe(3);
    });
   
    test ("DeleteVolunteerById", async () => {
        const testVolunteer = await volunteerService.deleteVolunteer(16);
        const getVolunteer = await volunteerService.getVolunteerById(16);
        expect(getVolunteer).toBeNull();
        
    });
});