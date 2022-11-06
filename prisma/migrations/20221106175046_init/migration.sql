-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('DEFAULT', 'IN_PROGRESS', 'FINISHED');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "xp" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trails" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "hours" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "trails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contents" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "duration" TIME(0) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "trail_id" INTEGER NOT NULL,
    "category_id" TEXT NOT NULL,

    CONSTRAINT "contents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dates" (
    "id" SERIAL NOT NULL,
    "date" DATE NOT NULL,
    "count" INTEGER NOT NULL,
    "level" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "dates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userTrails" (
    "user_id" TEXT NOT NULL,
    "trail_id" INTEGER NOT NULL,

    CONSTRAINT "userTrails_pkey" PRIMARY KEY ("user_id","trail_id")
);

-- CreateTable
CREATE TABLE "userContents" (
    "id" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'DEFAULT',
    "user_trail_user_id" TEXT NOT NULL,
    "user_trail_id" INTEGER NOT NULL,
    "contentsId" INTEGER,

    CONSTRAINT "userContents_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "contents" ADD CONSTRAINT "contents_trail_id_fkey" FOREIGN KEY ("trail_id") REFERENCES "trails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contents" ADD CONSTRAINT "contents_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dates" ADD CONSTRAINT "dates_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userTrails" ADD CONSTRAINT "userTrails_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userTrails" ADD CONSTRAINT "userTrails_trail_id_fkey" FOREIGN KEY ("trail_id") REFERENCES "trails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userContents" ADD CONSTRAINT "userContents_user_trail_user_id_user_trail_id_fkey" FOREIGN KEY ("user_trail_user_id", "user_trail_id") REFERENCES "userTrails"("user_id", "trail_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userContents" ADD CONSTRAINT "userContents_contentsId_fkey" FOREIGN KEY ("contentsId") REFERENCES "contents"("id") ON DELETE SET NULL ON UPDATE CASCADE;
