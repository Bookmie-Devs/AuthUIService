-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_email_verification_codes" (
    "email" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT
);
INSERT INTO "new_email_verification_codes" ("code", "email") SELECT "code", "email" FROM "email_verification_codes";
DROP TABLE "email_verification_codes";
ALTER TABLE "new_email_verification_codes" RENAME TO "email_verification_codes";
CREATE UNIQUE INDEX "email_verification_codes_email_key" ON "email_verification_codes"("email");
CREATE TABLE "new_onetime_password" (
    "project_user_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "otp" TEXT,
    CONSTRAINT "onetime_password_project_user_id_fkey" FOREIGN KEY ("project_user_id") REFERENCES "project_user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_onetime_password" ("otp", "project_user_id") SELECT "otp", "project_user_id" FROM "onetime_password";
DROP TABLE "onetime_password";
ALTER TABLE "new_onetime_password" RENAME TO "onetime_password";
CREATE UNIQUE INDEX "onetime_password_project_user_id_key" ON "onetime_password"("project_user_id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
