/*
  Warnings:

  - A unique constraint covering the columns `[cat_UUID]` on the table `categoria` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[des_UUID]` on the table `despesa` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[rel_UUID]` on the table `relatorio` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ser_UUID]` on the table `servico` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tps_UUID]` on the table `tipo_servico` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[usu_UUID]` on the table `usuario` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[usu_email]` on the table `usuario` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "categoria_cat_UUID_key" ON "categoria"("cat_UUID");

-- CreateIndex
CREATE UNIQUE INDEX "despesa_des_UUID_key" ON "despesa"("des_UUID");

-- CreateIndex
CREATE UNIQUE INDEX "relatorio_rel_UUID_key" ON "relatorio"("rel_UUID");

-- CreateIndex
CREATE UNIQUE INDEX "servico_ser_UUID_key" ON "servico"("ser_UUID");

-- CreateIndex
CREATE UNIQUE INDEX "tipo_servico_tps_UUID_key" ON "tipo_servico"("tps_UUID");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_usu_UUID_key" ON "usuario"("usu_UUID");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_usu_email_key" ON "usuario"("usu_email");
