-- CreateTable
CREATE TABLE "allowed_hostnames" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "hostname" TEXT,
    "project_id" INTEGER NOT NULL,
    CONSTRAINT "allowed_hostnames_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "project_uuid" TEXT,
    "project_name" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "redirect_to_callback" BOOLEAN NOT NULL DEFAULT false,
    "signup_form_id" INTEGER,
    "signup_callback" TEXT,
    "login_form_id" INTEGER,
    "login_callback" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "project_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "project_signup_form_id_fkey" FOREIGN KEY ("signup_form_id") REFERENCES "signup_form" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "project_login_form_id_fkey" FOREIGN KEY ("login_form_id") REFERENCES "login_form" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_project" ("active", "created_at", "id", "last_updated", "login_callback", "login_form_id", "project_name", "project_uuid", "signup_callback", "signup_form_id", "user_id") SELECT "active", "created_at", "id", "last_updated", "login_callback", "login_form_id", "project_name", "project_uuid", "signup_callback", "signup_form_id", "user_id" FROM "project";
DROP TABLE "project";
ALTER TABLE "new_project" RENAME TO "project";
CREATE UNIQUE INDEX "project_project_uuid_key" ON "project"("project_uuid");
CREATE UNIQUE INDEX "project_signup_form_id_key" ON "project"("signup_form_id");
CREATE UNIQUE INDEX "project_login_form_id_key" ON "project"("login_form_id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
