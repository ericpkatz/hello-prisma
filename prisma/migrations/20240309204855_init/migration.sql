-- CreateTable
CREATE TABLE "Note" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "ranking" INTEGER NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Note_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Note_name_key" ON "Note"("name");
