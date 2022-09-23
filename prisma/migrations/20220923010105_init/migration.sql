-- CreateEnum
CREATE TYPE "ShoeSize" AS ENUM ('BR_31', 'BR_40', 'BR_41', 'BR_43');

-- CreateEnum
CREATE TYPE "ClothingSize" AS ENUM ('PP', 'P', 'M', 'G', 'GG', 'XG');

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "size" "ShoeSize",
    "price" INTEGER NOT NULL,
    "percent" INTEGER NOT NULL,
    "discount" BOOLEAN NOT NULL,
    "details" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
