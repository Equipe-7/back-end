-- CreateTable
CREATE TABLE "User" (
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT E'USER',
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("username")
);

-- CreateTable
CREATE TABLE "Species" (
    "species_id" TEXT NOT NULL,
    "species_name" TEXT NOT NULL,

    CONSTRAINT "Species_pkey" PRIMARY KEY ("species_id")
);

-- CreateTable
CREATE TABLE "Category" (
    "category_id" TEXT NOT NULL,
    "category_name" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("category_id")
);

-- CreateTable
CREATE TABLE "Product" (
    "product_id" TEXT NOT NULL,
    "product_name" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "urlImage" TEXT NOT NULL,
    "companyId" TEXT,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("product_id")
);

-- CreateTable
CREATE TABLE "Company" (
    "company_id" TEXT NOT NULL,
    "company_name" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "hotel" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("company_id")
);

-- CreateTable
CREATE TABLE "Cart" (
    "cart_id" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("cart_id")
);

-- CreateTable
CREATE TABLE "Services" (
    "service_id" TEXT NOT NULL,
    "service_name" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Services_pkey" PRIMARY KEY ("service_id")
);

-- CreateTable
CREATE TABLE "Vets" (
    "vet_id" TEXT NOT NULL,
    "vet_name" TEXT NOT NULL,
    "vet_tel" TEXT NOT NULL,
    "crmv" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT,

    CONSTRAINT "Vets_pkey" PRIMARY KEY ("vet_id")
);

-- CreateTable
CREATE TABLE "Donor" (
    "donor_id" TEXT NOT NULL,
    "donor_name" TEXT NOT NULL,
    "donor_email" TEXT NOT NULL,
    "donor_image" TEXT NOT NULL,
    "donor_species" TEXT NOT NULL,
    "donor_size" TEXT NOT NULL,
    "donor_tel" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Donor_pkey" PRIMARY KEY ("donor_id")
);

-- CreateTable
CREATE TABLE "_ProductToSpecies" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CategoryToProduct" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CartToProduct" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Vets_userId_key" ON "Vets"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Donor_userId_key" ON "Donor"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToSpecies_AB_unique" ON "_ProductToSpecies"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToSpecies_B_index" ON "_ProductToSpecies"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToProduct_AB_unique" ON "_CategoryToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToProduct_B_index" ON "_CategoryToProduct"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CartToProduct_AB_unique" ON "_CartToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_CartToProduct_B_index" ON "_CartToProduct"("B");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("company_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vets" ADD CONSTRAINT "Vets_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("username") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Donor" ADD CONSTRAINT "Donor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("username") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToSpecies" ADD FOREIGN KEY ("A") REFERENCES "Product"("product_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToSpecies" ADD FOREIGN KEY ("B") REFERENCES "Species"("species_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToProduct" ADD FOREIGN KEY ("A") REFERENCES "Category"("category_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToProduct" ADD FOREIGN KEY ("B") REFERENCES "Product"("product_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CartToProduct" ADD FOREIGN KEY ("A") REFERENCES "Cart"("cart_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CartToProduct" ADD FOREIGN KEY ("B") REFERENCES "Product"("product_id") ON DELETE CASCADE ON UPDATE CASCADE;
