/*
  Warnings:

  - You are about to drop the column `Icon` on the `trails` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "trails" DROP COLUMN "Icon",
ADD COLUMN     "icon" TEXT NOT NULL DEFAULT '';
