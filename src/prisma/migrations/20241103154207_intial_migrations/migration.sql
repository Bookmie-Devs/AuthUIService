-- CreateTable
CREATE TABLE "user" (
    "user_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_login" DATETIME
);

-- CreateTable
CREATE TABLE "api_key" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "api_secret_key" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "api_key_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "login_form" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT,
    "description" TEXT,
    "script" TEXT,
    "preview_image" TEXT
);

-- CreateTable
CREATE TABLE "signup_form" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT,
    "description" TEXT,
    "script" TEXT,
    "preview_image" TEXT
);

-- CreateTable
CREATE TABLE "project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "project_name" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
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

-- CreateTable
CREATE TABLE "email_verification_codes" (
    "email" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT
);

-- CreateTable
CREATE TABLE "project_user" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT,
    "password" TEXT,
    "username" TEXT,
    "project_id" INTEGER NOT NULL,
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "date_created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "project_user_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "onetime_password" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "project_user_id" INTEGER NOT NULL,
    "otp" TEXT,
    CONSTRAINT "onetime_password_project_user_id_fkey" FOREIGN KEY ("project_user_id") REFERENCES "project_user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "login_data" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT,
    "date_created" DATETIME,
    "project_id" INTEGER NOT NULL,
    CONSTRAINT "login_data_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "api_key_user_id_key" ON "api_key"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "api_key_api_secret_key_key" ON "api_key"("api_secret_key");

-- CreateIndex
CREATE UNIQUE INDEX "project_signup_form_id_key" ON "project"("signup_form_id");

-- CreateIndex
CREATE UNIQUE INDEX "project_login_form_id_key" ON "project"("login_form_id");

-- CreateIndex
CREATE UNIQUE INDEX "email_verification_codes_email_key" ON "email_verification_codes"("email");

-- CreateIndex
CREATE UNIQUE INDEX "project_user_email_key" ON "project_user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "onetime_password_project_user_id_key" ON "onetime_password"("project_user_id");

-- CreateIndex
CREATE UNIQUE INDEX "login_data_email_key" ON "login_data"("email");
