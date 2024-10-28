/*
  Warnings:

  - Added the required column `ser_data` to the `servico` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "servico" ADD COLUMN     "ser_data" TIMESTAMP NOT NULL;
