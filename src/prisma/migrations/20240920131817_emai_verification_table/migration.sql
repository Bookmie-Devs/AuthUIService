/*
  Warnings:

  - You are about to drop the `emailVerificationCodes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "emailVerificationCodes";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "email_verification_codes" (
    "email" TEXT NOT NULL,
    "code" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "email_verification_codes_email_key" ON "email_verification_codes"("email");
