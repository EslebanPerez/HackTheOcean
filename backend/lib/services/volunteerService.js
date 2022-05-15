const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class VolunteerService{
    static async getAllVolunteers(){
        const volunteer = await prisma.volunteer.findMany();
        return volunteer;
    }
}

module.exports = VolunteerService;
