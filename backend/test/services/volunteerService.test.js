const volunteerService = require("../../lib/services/volunteerService");

describe( "Unit tests for volunteerService", () => {
    test("GetAll", async () => {
        const testVolunteers = await volunteerService.getAllVolunteers();
        expect(testVolunteers.length).toBe(7);
    });
    test("GetVolunteerById", async () => {
        const testVolunter = await volunteerService.getVolunteerById(1);
        expect(testVolunter.firstName).toBe("Pepe");
    });
    test("GetVolunteerByBeach", async () => {
        const  testVolunteers = await volunteerService.getVolunteerByBeach("Caleta");
        expect(testVolunteers.length).toBe(2);
    });
    test("CreateVolunteer", async () => {
        const data = { 
            "firstName": "Noe",
            "lastName": "Lopez",
            "email": "mail6@innovaccion.mx",
            "age": 25,
            "city": "Puebla",
            "avSaturday": true,
            "avSunday": true,
            "beaches": "Caleta"
        };
        const volunteer = await volunteerService.createVolunteer(data);
        expect(volunteer.firstName).toBe(data.firstName); 
    });
    test("UpdateVolunteerById", async () => {
        const data = {
            "firstName": "Maria",
        };
        const UpdateVolunteer = await volunteerService.updateVolunteerById(16,data);

        const volunteer = await volunteerService.getVolunteerById(16);
        expect(volunteer.firstName).toBe(data.firstName);
    });
    test ("DeleteVolunteerById", async () => {
        const testVolunteer = await volunteerService.deleteVolunteer(16);
        const getVolunteer = await volunteerService.getVolunteerById(16);
        expect(getVolunteer).toBeNull();
    });
});