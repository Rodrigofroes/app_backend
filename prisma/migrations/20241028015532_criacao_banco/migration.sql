-- CreateTable
CREATE TABLE "usuario" (
    "usu_id" SERIAL NOT NULL,
    "usu_nome" VARCHAR(255) NOT NULL,
    "usu_email" VARCHAR(255) NOT NULL,
    "usu_senha" VARCHAR(255) NOT NULL,
    "usu_criadoem" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usu_atualizadoem" TIMESTAMP(3) NOT NULL,
    "usu_ativo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("usu_id")
);

-- CreateTable
CREATE TABLE "categoria" (
    "cat_id" SERIAL NOT NULL,
    "cat_nome" VARCHAR(255) NOT NULL,
    "cat_criadoem" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cat_atualizadoem" TIMESTAMP(3) NOT NULL,
    "cat_ativo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "categoria_pkey" PRIMARY KEY ("cat_id")
);

-- CreateTable
CREATE TABLE "despesa" (
    "des_id" SERIAL NOT NULL,
    "des_descricao" VARCHAR(255) NOT NULL,
    "des_valor" DOUBLE PRECISION NOT NULL,
    "des_data" TIMESTAMP(3) NOT NULL,
    "des_criadoem" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "des_atualizadoem" TIMESTAMP(3) NOT NULL,
    "des_ativo" BOOLEAN NOT NULL DEFAULT true,
    "des_usu_id" INTEGER NOT NULL,
    "des_cat_id" INTEGER NOT NULL,
    "relatorioRel_id" INTEGER,

    CONSTRAINT "despesa_pkey" PRIMARY KEY ("des_id")
);

-- CreateTable
CREATE TABLE "tipo_servico" (
    "tps_id" SERIAL NOT NULL,
    "tps_nome" VARCHAR(255) NOT NULL,
    "tps_criadoem" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tps_atualizadoem" TIMESTAMP(3) NOT NULL,
    "tps_ativo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "tipo_servico_pkey" PRIMARY KEY ("tps_id")
);

-- CreateTable
CREATE TABLE "servico" (
    "ser_id" SERIAL NOT NULL,
    "ser_descricao" VARCHAR(255) NOT NULL,
    "ser_valor" DOUBLE PRECISION NOT NULL,
    "ser_criadoem" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ser_atualizadoem" TIMESTAMP(3) NOT NULL,
    "ser_ativo" BOOLEAN NOT NULL DEFAULT true,
    "ser_usu_id" INTEGER NOT NULL,
    "ser_tps_id" INTEGER NOT NULL,

    CONSTRAINT "servico_pkey" PRIMARY KEY ("ser_id")
);

-- CreateTable
CREATE TABLE "relatorio" (
    "rel_id" SERIAL NOT NULL,
    "rel_criadoem" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "rel_atualizadoem" TIMESTAMP(3) NOT NULL,
    "rel_ativo" BOOLEAN NOT NULL DEFAULT true,
    "rel_usu_id" INTEGER NOT NULL,
    "rel_link" VARCHAR(255) NOT NULL,

    CONSTRAINT "relatorio_pkey" PRIMARY KEY ("rel_id")
);

-- AddForeignKey
ALTER TABLE "despesa" ADD CONSTRAINT "despesa_des_usu_id_fkey" FOREIGN KEY ("des_usu_id") REFERENCES "usuario"("usu_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "despesa" ADD CONSTRAINT "despesa_des_cat_id_fkey" FOREIGN KEY ("des_cat_id") REFERENCES "categoria"("cat_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "despesa" ADD CONSTRAINT "despesa_relatorioRel_id_fkey" FOREIGN KEY ("relatorioRel_id") REFERENCES "relatorio"("rel_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "servico" ADD CONSTRAINT "servico_ser_usu_id_fkey" FOREIGN KEY ("ser_usu_id") REFERENCES "usuario"("usu_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "servico" ADD CONSTRAINT "servico_ser_tps_id_fkey" FOREIGN KEY ("ser_tps_id") REFERENCES "tipo_servico"("tps_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "relatorio" ADD CONSTRAINT "relatorio_rel_usu_id_fkey" FOREIGN KEY ("rel_usu_id") REFERENCES "usuario"("usu_id") ON DELETE RESTRICT ON UPDATE CASCADE;
