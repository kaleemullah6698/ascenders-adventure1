-- CreateEnum
CREATE TYPE "Difficulty" AS ENUM ('EASY', 'MODERATE', 'HARD', 'EXTREME');

-- CreateEnum
CREATE TYPE "Season" AS ENUM ('SPRING', 'SUMMER', 'AUTUMN', 'WINTER');

-- CreateEnum
CREATE TYPE "Region" AS ENUM ('NORTHERN_AREAS', 'KASHMIR', 'KHYBER_PAKHTUNKHWA', 'BALOCHISTAN', 'PUNJAB', 'SINDH', 'GILGIT_BALTISTAN', 'CHITRAL');

-- CreateEnum
CREATE TYPE "ServiceType" AS ENUM ('BASIC', 'STANDARD', 'ELITE', 'PREMIUM');

-- CreateTable
CREATE TABLE "Trek" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "difficulty" "Difficulty" NOT NULL,
    "minCost" INTEGER NOT NULL,
    "maxCost" INTEGER NOT NULL,
    "season" "Season"[],
    "region" "Region" NOT NULL,
    "serviceType" "ServiceType" NOT NULL,
    "bestMonths" TEXT[],
    "elevation" INTEGER NOT NULL,
    "distance" DOUBLE PRECISION NOT NULL,
    "groupSize" INTEGER NOT NULL,
    "highlights" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Trek_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Trek_difficulty_idx" ON "Trek"("difficulty");

-- CreateIndex
CREATE INDEX "Trek_region_idx" ON "Trek"("region");

-- CreateIndex
CREATE INDEX "Trek_serviceType_idx" ON "Trek"("serviceType");
