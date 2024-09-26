/*
  Warnings:

  - You are about to drop the `signup_data` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "signup_data";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "project_user" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT,
    "otp_sent" TEXT,
    "password" TEXT,
    "accounts_verified" BOOLEAN NOT NULL DEFAULT false,
    "date_created" DATETIME,
    "project_id" INTEGER NOT NULL,
    CONSTRAINT "project_user_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "onetime_password" (
    "project_user_id" INTEGER NOT NULL,
    "otp" TEXT,
    CONSTRAINT "onetime_password_project_user_id_fkey" FOREIGN KEY ("project_user_id") REFERENCES "project_user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "project_user_email_key" ON "project_user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "onetime_password_project_user_id_key" ON "onetime_password"("project_user_id");
