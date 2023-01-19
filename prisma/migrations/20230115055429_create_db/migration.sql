-- CreateTable
CREATE TABLE "Invoices" (
    "cChaveNFe" TEXT NOT NULL,
    "nIdNF" TEXT NOT NULL,
    "cCodCateg" TEXT NOT NULL,
    "cDeneg" TEXT NOT NULL,
    "dCan" TEXT NOT NULL,
    "dEmi" TEXT NOT NULL,
    "nNF" TEXT NOT NULL,
    "cCodCliInt" TEXT NOT NULL,
    "cRazao" TEXT NOT NULL,
    "cnpj_cpf" TEXT NOT NULL,
    "nCodCli" TEXT NOT NULL,
    "vNF" DOUBLE PRECISION NOT NULL,
    "xProd" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Invoices_nIdNF_key" ON "Invoices"("nIdNF");
