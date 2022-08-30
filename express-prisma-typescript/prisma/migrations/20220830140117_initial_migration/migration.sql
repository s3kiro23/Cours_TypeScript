-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "isSingle" BOOLEAN,
    "admin" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_User" ("id", "isSingle", "name") SELECT "id", "isSingle", "name" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
