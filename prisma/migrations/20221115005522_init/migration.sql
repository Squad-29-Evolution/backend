-- DropForeignKey
ALTER TABLE "dates" DROP CONSTRAINT "dates_user_id_fkey";

-- DropForeignKey
ALTER TABLE "userContents" DROP CONSTRAINT "userContents_contentsId_fkey";

-- DropForeignKey
ALTER TABLE "userContents" DROP CONSTRAINT "userContents_user_trail_user_id_user_trail_id_fkey";

-- DropForeignKey
ALTER TABLE "userTrails" DROP CONSTRAINT "userTrails_trail_id_fkey";

-- DropForeignKey
ALTER TABLE "userTrails" DROP CONSTRAINT "userTrails_user_id_fkey";

-- AddForeignKey
ALTER TABLE "dates" ADD CONSTRAINT "dates_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userTrails" ADD CONSTRAINT "userTrails_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userTrails" ADD CONSTRAINT "userTrails_trail_id_fkey" FOREIGN KEY ("trail_id") REFERENCES "trails"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userContents" ADD CONSTRAINT "userContents_user_trail_user_id_user_trail_id_fkey" FOREIGN KEY ("user_trail_user_id", "user_trail_id") REFERENCES "userTrails"("user_id", "trail_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userContents" ADD CONSTRAINT "userContents_contentsId_fkey" FOREIGN KEY ("contentsId") REFERENCES "contents"("id") ON DELETE CASCADE ON UPDATE CASCADE;
