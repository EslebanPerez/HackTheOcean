// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class EventsService{
    static async getEventsById(id){
        const event = await prisma.events.findUnique({where: {eventId: id}});
        return event;
    }
}

module.exports = EventsService;