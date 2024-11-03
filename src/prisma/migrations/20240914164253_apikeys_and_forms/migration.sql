/*
  Warnings:

  - A unique constraint covering the columns `[file]` on the table `login_form` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[file]` on the table `signup_form` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "login_form" ADD COLUMN "file" TEXT;

-- AlterTable
ALTER TABLE "signup_form" ADD COLUMN "file" TEXT;

-- CreateTable
CREATE TABLE "api_key" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "key" TEXT NOT NULL,
    CONSTRAINT "api_key_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "login_data" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT,
    "date_created" DATETIME,
    "project_id" INTEGER NOT NULL,
    CONSTRAINT "login_data_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "signup_data" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT,
    "otp_sent" TEXT DEFAULT '',
    "date_created" DATETIME,
    "project_id" INTEGER NOT NULL,
    CONSTRAINT "signup_data_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "api_key_user_id_key" ON "api_key"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "api_key_key_key" ON "api_key"("key");

-- CreateIndex
CREATE UNIQUE INDEX "login_data_email_key" ON "login_data"("email");

-- CreateIndex
CREATE UNIQUE INDEX "signup_data_email_key" ON "signup_data"("email");

-- CreateIndex
CREATE UNIQUE INDEX "login_form_file_key" ON "login_form"("file");

-- CreateIndex
CREATE UNIQUE INDEX "signup_form_file_key" ON "signup_form"("file");
