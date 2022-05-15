/*
  Warnings:

  - A unique constraint covering the columns `[beach]` on the table `Events` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Events" ALTER COLUMN "beach" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Events_beach_key" ON "Events"("beach");
