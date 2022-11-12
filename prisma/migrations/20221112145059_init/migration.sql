/*
  Warnings:

  - The `duration` column on the `contents` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "contents" DROP COLUMN "duration",
ADD COLUMN     "duration" DOUBLE PRECISION NOT NULL DEFAULT 0;
