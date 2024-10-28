/*
  Warnings:

  - You are about to drop the column `cat_atualizadoem` on the `categoria` table. All the data in the column will be lost.
  - You are about to drop the column `des_atualizadoem` on the `despesa` table. All the data in the column will be lost.
  - You are about to drop the column `rel_atualizadoem` on the `relatorio` table. All the data in the column will be lost.
  - You are about to drop the column `ser_atualizadoem` on the `servico` table. All the data in the column will be lost.
  - You are about to drop the column `tps_atualizadoem` on the `tipo_servico` table. All the data in the column will be lost.
  - You are about to drop the column `usu_atualizadoem` on the `usuario` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "categoria" DROP COLUMN "cat_atualizadoem";

-- AlterTable
ALTER TABLE "despesa" DROP COLUMN "des_atualizadoem";

-- AlterTable
ALTER TABLE "relatorio" DROP COLUMN "rel_atualizadoem";

-- AlterTable
ALTER TABLE "servico" DROP COLUMN "ser_atualizadoem";

-- AlterTable
ALTER TABLE "tipo_servico" DROP COLUMN "tps_atualizadoem";

-- AlterTable
ALTER TABLE "usuario" DROP COLUMN "usu_atualizadoem";
