-- AlterTable
ALTER TABLE "trails" ADD COLUMN     "Icon" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "picture" SET DEFAULT '';
