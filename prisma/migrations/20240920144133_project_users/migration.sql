/*
  Warnings:

  - You are about to drop the column `accounts_verified` on the `project_user` table. All the data in the column will be lost.
  - You are about to drop the column `otp_sent` on the `project_user` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_project_user" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT,
    "password" TEXT,
    "project_id" INTEGER NOT NULL,
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "date_created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "project_user_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_project_user" ("date_created", "email", "id", "password", "project_id") SELECT coalesce("date_created", CURRENT_TIMESTAMP) AS "date_created", "email", "id", "password", "project_id" FROM "project_user";
DROP TABLE "project_user";
ALTER TABLE "new_project_user" RENAME TO "project_user";
CREATE UNIQUE INDEX "project_user_email_key" ON "project_user"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
