const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  console.log("?? Seeding database with YOUR TWO TREKS FIRST...");
  
  // STEP 1: Delete all existing treks
  console.log("?? Step 1: Clearing old data...");
  await prisma.trek.deleteMany({});
  console.log("? Database cleared");
  
  // STEP 2: Create YOUR TWO TREKS (FIRST IN DATABASE)
  console.log("\n?? Step 2: Adding your treks...");
  
  // TREK 1: Thalo Pass Trek
  const trek1 = await prisma.trek.create({
    data: {
      name: "Thalo Pass Trek",
      description: "An adventurous trek through the beautiful Dir/Chitral region, featuring stunning meadows, crystal clear lakes, and breathtaking waterfalls. The Thalo Pass offers challenging terrain with rewarding views.",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800",
      duration: 5,
      difficulty: "HARD",
      minCost: 100000,
      maxCost: 140000,
      season: ["SUMMER"],
      region: "CHITRAL",
      serviceType: "STANDARD",
      bestMonths: ["June", "July", "August"],
      elevation: 4250,
      distance: 60,
      groupSize: 8,
      highlights: [
        "Meadows of Kumrat",
        "Zaghi Lake",
        "Bashkar Lake",
        "Wild Flower",
        "Rainbow Waterfall",
        "Kumrat Valley",
        "Sor Laspur"
      ]
    }
  });
  console.log("? 1. Thalo Pass Trek added");
  
  // TREK 2: Lohigol Pass
  const trek2 = await prisma.trek.create({
    data: {
      name: "Lohigol Pass",
      description: "A relatively shorter but equally mesmerizing trek through Chitral's stunning landscapes. The Lohigol Pass trek offers beautiful valleys, alpine lakes, and panoramic mountain views.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800",
      duration: 3,
      difficulty: "MODERATE",
      minCost: 70000,
      maxCost: 90000,
      season: ["SUMMER"],
      region: "CHITRAL",
      serviceType: "STANDARD",
      bestMonths: ["May", "June", "July"],
      elevation: 4300,
      distance: 39,
      groupSize: 8,
      highlights: [
        "Lush Green Meadows",
        "Golen Valley",
        "Madaklasht Valley",
        "Golen Lake",
        "Lohigol Pass"
      ]
    }
  });
  console.log("? 2. Lohigol Pass added");
  
  // STEP 3: Verification
  console.log("\n?? Step 3: Verifying...");
  const allTreks = await prisma.trek.findMany({
    orderBy: { createdAt: "asc" }
  });
  
  console.log(`?? Total treks in database: ${allTreks.length}`);
  
  console.log("\n??? FIRST 2 TREKS IN DATABASE:");
  console.log("==============================");
  allTreks.slice(0, 2).forEach((trek, index) => {
    console.log(`${index + 1}. ${trek.name.toUpperCase()}`);
    console.log(`   Region: ${trek.region}`);
    console.log(`   Duration: ${trek.duration} days`);
    console.log(`   Elevation: ${trek.elevation}m`);
    console.log(`   Distance: ${trek.distance}km`);
    console.log("");
  });
  
  // Final check
  if (allTreks.length >= 2 && 
      allTreks[0].name === "Thalo Pass Trek" && 
      allTreks[1].name === "Lohigol Pass") {
    console.log("?? SUCCESS! Your treks are the FIRST TWO in the database!");
  } else {
    console.log("? ERROR: Something went wrong");
  }
}

main()
  .catch((error) => {
    console.error("? Seeding failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log("\n?? Database connection closed");
  });
