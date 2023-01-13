-- CreateTable
CREATE TABLE "Invoices" (
    "cChaveNFe" VARCHAR(50) NOT NULL,
    "nIdNF" INTEGER NOT NULL,
    "cCodCateg" TEXT NOT NULL,
    "dCan" TEXT NOT NULL,
    "dEmi" TEXT NOT NULL,
    "nNF" TEXT NOT NULL,
    "cCodCliInt" TEXT NOT NULL,
    "cRazao" TEXT NOT NULL,
    "cnpj_cpf" TEXT NOT NULL,
    "nCodCli" INTEGER NOT NULL,
    "vNF" INTEGER NOT NULL,
    "xProd" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Invoices_cChaveNFe_key" ON "Invoices"("cChaveNFe");
