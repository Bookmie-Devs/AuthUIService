/*
  Warnings:

  - You are about to drop the column `private_key` on the `api_key` table. All the data in the column will be lost.
  - You are about to drop the column `public_key` on the `api_key` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_api_key" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "api_secret_key" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "api_key_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_api_key" ("created_at", "id", "last_updated", "user_id") SELECT "created_at", "id", "last_updated", "user_id" FROM "api_key";
DROP TABLE "api_key";
ALTER TABLE "new_api_key" RENAME TO "api_key";
CREATE UNIQUE INDEX "api_key_user_id_key" ON "api_key"("user_id");
CREATE UNIQUE INDEX "api_key_api_secret_key_key" ON "api_key"("api_secret_key");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
