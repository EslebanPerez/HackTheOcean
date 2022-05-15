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
    static async getVolunteerByBeach(beach){
        const volunteer = await prisma.volunteer.findMany({
            where: {
                beaches : beach
            }
        });
        return volunteer;
    }
    static async createVolunteer(data){
        await prisma.volunteer.create({data: data});
    }
    static async updateVolunteerById(id, data) {
        await prisma.volunteer.update({
            where: {
                volunteerId: id,
            },
            data: data,
        });
    }
}

module.exports = VolunteerService;
