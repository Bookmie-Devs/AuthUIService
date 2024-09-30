/*
  Warnings:

  - You are about to drop the column `file` on the `login_form` table. All the data in the column will be lost.
  - You are about to drop the column `file` on the `signup_form` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_login_form" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT,
    "description" TEXT,
    "file_content" TEXT,
    "preview_image" TEXT
);
INSERT INTO "new_login_form" ("id") SELECT "id" FROM "login_form";
DROP TABLE "login_form";
ALTER TABLE "new_login_form" RENAME TO "login_form";
CREATE TABLE "new_signup_form" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT,
    "description" TEXT,
    "file_content" TEXT,
    "preview_image" TEXT
);
INSERT INTO "new_signup_form" ("id") SELECT "id" FROM "signup_form";
DROP TABLE "signup_form";
ALTER TABLE "new_signup_form" RENAME TO "signup_form";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
