-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Membros" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "profile_image" TEXT,
    "role" TEXT NOT NULL DEFAULT 'aluno',
    "curriculum" TEXT,

    CONSTRAINT "Membros_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Editores" (
    "id" SERIAL NOT NULL,
    "membro_id" INTEGER NOT NULL,
    "matricula" TEXT,

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
CREATE TABLE "Patrocinadores" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "profile_image" TEXT,

    CONSTRAINT "Patrocinadores_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Membros_user_id_key" ON "Membros"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Editores_membro_id_key" ON "Editores"("membro_id");

-- CreateIndex
CREATE UNIQUE INDEX "Editores_matricula_key" ON "Editores"("matricula");

-- AddForeignKey
ALTER TABLE "Membros" ADD CONSTRAINT "Membros_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Editores" ADD CONSTRAINT "Editores_membro_id_fkey" FOREIGN KEY ("membro_id") REFERENCES "Membros"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Boletins" ADD CONSTRAINT "Boletins_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "Editores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
