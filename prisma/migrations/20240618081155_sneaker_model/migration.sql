-- CreateTable
CREATE TABLE "Sneaker" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "cost" INTEGER NOT NULL,
    "image" TEXT,
    "discount" INTEGER,
    "size" TEXT NOT NULL,
    "color" TEXT NOT NULL
);
