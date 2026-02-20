/*
  Warnings:

  - You are about to drop the column `email` on the `Editores` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Editores` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `Editores` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[membro_id]` on the table `Editores` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id]` on the table `Membros` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `membro_id` to the `Editores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Membros` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Editores_email_key";

-- AlterTable
ALTER TABLE "Editores" DROP COLUMN "email",
DROP COLUMN "name",
DROP COLUMN "role",
ADD COLUMN     "membro_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Membros" ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "name";

-- CreateIndex
CREATE UNIQUE INDEX "Editores_membro_id_key" ON "Editores"("membro_id");

-- CreateIndex
CREATE UNIQUE INDEX "Membros_user_id_key" ON "Membros"("user_id");

-- AddForeignKey
ALTER TABLE "Membros" ADD CONSTRAINT "Membros_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Editores" ADD CONSTRAINT "Editores_membro_id_fkey" FOREIGN KEY ("membro_id") REFERENCES "Membros"("id") ON DELETE CASCADE ON UPDATE CASCADE;
