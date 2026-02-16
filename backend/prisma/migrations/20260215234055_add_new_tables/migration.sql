/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "Editores" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'aluno',
    "matricula" TEXT NOT NULL,

    CONSTRAINT "Editores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Boletins" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "proofreader" TEXT NOT NULL,
    "image" TEXT,
    "legend_image" TEXT,
    "created_by_id" INTEGER NOT NULL,
    "created_in" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Boletins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Membros" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "profile_image" TEXT,
    "role" TEXT NOT NULL DEFAULT 'aluno',
    "curriculum" TEXT,

    CONSTRAINT "Membros_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Patrocinadores" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "profile_image" TEXT,

    CONSTRAINT "Patrocinadores_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Editores_email_key" ON "Editores"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Editores_matricula_key" ON "Editores"("matricula");

-- AddForeignKey
ALTER TABLE "Boletins" ADD CONSTRAINT "Boletins_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "Editores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
