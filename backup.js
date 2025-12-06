const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function backup() {
  const treks = await prisma.trek.findMany();
  console.log("Backing up", treks.length, "treks...");
  
  // Save to file
  const fs = require("fs");
  fs.writeFileSync("treks-backup.json", JSON.stringify(treks, null, 2));
  console.log("? Backup saved to treks-backup.json");
}

backup().finally(() => prisma.$disconnect());
