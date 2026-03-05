/*
  Warnings:

  - You are about to drop the `Editores` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Boletins" DROP CONSTRAINT "Boletins_created_by_id_fkey";

-- DropForeignKey
ALTER TABLE "Editores" DROP CONSTRAINT "Editores_membro_id_fkey";

-- DropTable
DROP TABLE "Editores";
