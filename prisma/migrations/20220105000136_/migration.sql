/*
  Warnings:

  - Added the required column `price` to the `Services` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Services" ADD COLUMN     "price" TEXT NOT NULL;
