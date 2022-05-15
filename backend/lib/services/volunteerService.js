const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class VolunteerService{
    static async getAllVolunteers(){
        const volunteer = await prisma.volunteer.findMany();
        return volunteer;
    }
    static async getVolunteerById(id){
        const volunteer = await prisma.volunteer.findUnique({where: {volunteerId: id}});
        return volunteer;
    }
}

module.exports = VolunteerService;