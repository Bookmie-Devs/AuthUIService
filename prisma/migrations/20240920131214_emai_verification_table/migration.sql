-- CreateTable
CREATE TABLE "emailVerificationCodes" (
    "email" TEXT NOT NULL,
    "code" TEXT
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_signup_data" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT,
    "otp_sent" TEXT DEFAULT '',
    "accounts_verified" BOOLEAN NOT NULL DEFAULT false,
    "date_created" DATETIME,
    "project_id" INTEGER NOT NULL,
    CONSTRAINT "signup_data_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_signup_data" ("date_created", "email", "id", "otp_sent", "project_id") SELECT "date_created", "email", "id", "otp_sent", "project_id" FROM "signup_data";
DROP TABLE "signup_data";
ALTER TABLE "new_signup_data" RENAME TO "signup_data";
CREATE UNIQUE INDEX "signup_data_email_key" ON "signup_data"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "emailVerificationCodes_email_key" ON "emailVerificationCodes"("email");
