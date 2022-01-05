/*
  Warnings:

  - The primary key for the `Services` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `service_id` column on the `Services` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Services" DROP CONSTRAINT "Services_pkey",
DROP COLUMN "service_id",
ADD COLUMN     "service_id" SERIAL NOT NULL,
ADD CONSTRAINT "Services_pkey" PRIMARY KEY ("service_id");
