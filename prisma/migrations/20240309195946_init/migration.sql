-- CreateTable
CREATE TABLE "Note" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "ranking" INTEGER NOT NULL,

    CONSTRAINT "Note_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Note_name_key" ON "Note"("name");
