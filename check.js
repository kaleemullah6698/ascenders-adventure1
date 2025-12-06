const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  try {
    const count = await prisma.trek.count();
    console.log(`?? Database has ${count} treks`);
    
    if (count > 0) {
      const treks = await prisma.trek.findMany({
        orderBy: { createdAt: "asc" },
        take: 5,
        select: { name: true, region: true }
      });
      
      console.log("\nFirst 5 treks:");
      treks.forEach((t, i) => {
        console.log(`${i + 1}. ${t.name} (${t.region})`);
      });
    }
  } catch (error) {
    console.error("? Error:", error.message);
  } finally {
    await prisma.$disconnect();
  }
}

main();
