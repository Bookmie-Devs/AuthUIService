/*
  Warnings:

  - A unique constraint covering the columns `[project_uuid]` on the table `project` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "project" ADD COLUMN "project_uuid" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "project_project_uuid_key" ON "project"("project_uuid");
