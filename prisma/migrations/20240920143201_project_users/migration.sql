/*
  Warnings:

  - The primary key for the `onetime_password` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `id` to the `onetime_password` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_onetime_password" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "project_user_id" INTEGER NOT NULL,
    "otp" TEXT,
    CONSTRAINT "onetime_password_project_user_id_fkey" FOREIGN KEY ("project_user_id") REFERENCES "project_user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_onetime_password" ("otp", "project_user_id") SELECT "otp", "project_user_id" FROM "onetime_password";
DROP TABLE "onetime_password";
ALTER TABLE "new_onetime_password" RENAME TO "onetime_password";
CREATE UNIQUE INDEX "onetime_password_project_user_id_key" ON "onetime_password"("project_user_id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
