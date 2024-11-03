/*
  Warnings:

  - A unique constraint covering the columns `[signup_form_id]` on the table `project` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[login_form_id]` on the table `project` will be added. If there are existing duplicate values, this will fail.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_api_key" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "key" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "api_key_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_api_key" ("id", "key", "user_id") SELECT "id", "key", "user_id" FROM "api_key";
DROP TABLE "api_key";
ALTER TABLE "new_api_key" RENAME TO "api_key";
CREATE UNIQUE INDEX "api_key_user_id_key" ON "api_key"("user_id");
CREATE UNIQUE INDEX "api_key_key_key" ON "api_key"("key");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "project_signup_form_id_key" ON "project"("signup_form_id");

-- CreateIndex
CREATE UNIQUE INDEX "project_login_form_id_key" ON "project"("login_form_id");
