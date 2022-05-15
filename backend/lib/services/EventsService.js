// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class EventsService{
    static async getAll(){
        const events = await prisma.events.findMany({});
        return events;
    }
    
    static async getEventsById(id){
        const event = await prisma.events.findUnique({where: {eventId: id}});
        return event;
    }

    static async addNewEvents(event){
        await prisma.events.create({data: event});
    }

    static async deleteEvents(id){
        await prisma.events.delete({where: {eventId: id}});
        return `check`;
    }
}

module.exports = EventsService;