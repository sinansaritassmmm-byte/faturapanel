-- CreateTable
CREATE TABLE "Rate" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT NOT NULL,
    "forexBuy" REAL,
    "forexSell" REAL,
    "banknoteBuy" REAL,
    "banknoteSell" REAL,
    "date" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "TaxDeadline" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "period" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "dueFrom" DATETIME NOT NULL,
    "dueTo" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Announcement" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "published" DATETIME NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
