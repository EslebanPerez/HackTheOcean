-- CreateTable
CREATE TABLE "Volunteer" (
    "volunteerId" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "age" INTEGER NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "avMonday" BOOLEAN NOT NULL DEFAULT false,
    "avTuesday" BOOLEAN NOT NULL DEFAULT false,
    "avWednesday" BOOLEAN NOT NULL DEFAULT false,
    "avThursday" BOOLEAN NOT NULL DEFAULT false,
    "avFriday" BOOLEAN NOT NULL DEFAULT false,
    "avSaturday" BOOLEAN NOT NULL DEFAULT false,
    "avSunday" BOOLEAN NOT NULL DEFAULT false,
    "eventIdMonday" INTEGER NOT NULL,
    "eventIdTuesday" INTEGER NOT NULL,
    "eventIdWednesday" INTEGER NOT NULL,
    "eventIdThursday" INTEGER NOT NULL,
    "eventIdFriday" INTEGER NOT NULL,
    "eventIdSaturday" INTEGER NOT NULL,
    "eventIdSunday" INTEGER NOT NULL,
    "beaches" VARCHAR(255) NOT NULL,

    CONSTRAINT "Volunteer_pkey" PRIMARY KEY ("volunteerId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Volunteer_firstName_key" ON "Volunteer"("firstName");
