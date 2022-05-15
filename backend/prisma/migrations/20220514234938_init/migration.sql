-- CreateTable
CREATE TABLE "Events" (
    "eventId" SERIAL NOT NULL,
    "eventDate" TIMESTAMP(3) NOT NULL,
    "eventDay" VARCHAR(255) NOT NULL,
    "beach" VARCHAR(255) NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Events_pkey" PRIMARY KEY ("eventId")
);
