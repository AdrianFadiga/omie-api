/*
  Warnings:

  - Added the required column `cDeneg` to the `Invoices` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Invoices" ADD COLUMN     "cDeneg" TEXT NOT NULL,
ALTER COLUMN "nIdNF" SET DATA TYPE BIGINT;
