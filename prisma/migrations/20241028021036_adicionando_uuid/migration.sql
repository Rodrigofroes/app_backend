/*
  Warnings:

  - The required column `cat_UUID` was added to the `categoria` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `des_UUID` was added to the `despesa` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `rel_UUID` was added to the `relatorio` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `ser_UUID` was added to the `servico` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `tps_UUID` was added to the `tipo_servico` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `usu_UUID` was added to the `usuario` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "categoria" ADD COLUMN     "cat_UUID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "despesa" ADD COLUMN     "des_UUID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "relatorio" ADD COLUMN     "rel_UUID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "servico" ADD COLUMN     "ser_UUID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "tipo_servico" ADD COLUMN     "tps_UUID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "usuario" ADD COLUMN     "usu_UUID" TEXT NOT NULL;
