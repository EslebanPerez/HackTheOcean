const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

(async function main() {
    try {
        const volunteer1 = await prisma.volunteer.upsert({
            where: { firstName: "Woopa" },
            update: {},
            create: {
                firstName: "Woopa",
                lastName: "Ajolonauta",
                email: "mail1@innovaccion.mx",
                age: 24,
                city: "Zihuatanejo",
                avSaturday: true,
                avSunday: true,
                beaches: "Zihuatanejo"
            },
        });

        const volunteer2 = await prisma.volunteer.upsert({
            where: { firstName: "Dummy1" },
            update: {},
            create: {
                firstName: "Dummy1",
                lastName: "Lastname",
                email: "mail2@innovaccion.mx",
                age: 33,
                city: "Las Playas",
                avSaturday: true,
                avSunday: true,
                beaches: "Caletilla"
            },
        });

        const event1 = await prisma.events.upsert({
            where: { beach: "Caletilla" },
            update: {},
            create: {
                eventDate: new Date("2022-05-29"),
                eventDay: "Sunday",
                beach: "Caletilla"
            },
        });

        const event2 = await prisma.events.upsert({
            where: { beach: "Zihuatanejo" },
            update: {},
            create: {
                eventDate: new Date("2022-05-25"),
                eventDay: "Wednesday",
                beach: "Zihuatanejo"
            },
        });

        console.log("Create db seed succesfully");
    } catch(e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
})();