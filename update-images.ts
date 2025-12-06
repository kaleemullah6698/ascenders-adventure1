// update-images.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function updateTrekImages() {
  console.log('🖼️ Starting to update trek images...')
  
  try {
    // Update Thalo Pass Trek image
    console.log('📝 Updating Thalo Pass Trek...')
    const thaloPass = await prisma.trek.updateMany({
      where: {
        name: "Thalo Pass Trek"
      },
      data: {
        image: "/images/thalopasstrek.jpg"  // Update this if your filename is different
      }
    })
    
    console.log(`✅ Updated Thalo Pass Trek: ${thaloPass.count} record(s) affected`)
    
    // Update Lohigol Pass image
    console.log('📝 Updating Lohigol Pass...')
    const lohigolPass = await prisma.trek.updateMany({
      where: {
        name: "Lohigol Pass"
      },
      data: {
        image: "/images/lohigolpass.jpg"  // Make sure you have this image in public/images/
      }
    })
    
    console.log(`✅ Updated Lohigol Pass: ${lohigolPass.count} record(s) affected`)
    
    // Verify the updates
    console.log('\n🔍 Verifying updates...')
    const updatedThalo = await prisma.trek.findFirst({
      where: { name: "Thalo Pass Trek" }
    })
    
    const updatedLohigol = await prisma.trek.findFirst({
      where: { name: "Lohigol Pass" }
    })
    
    console.log('\n📊 Verification Results:')
    console.log(`Thalo Pass image path: ${updatedThalo?.image}`)
    console.log(`Lohigol Pass image path: ${updatedLohigol?.image}`)
    
    if (updatedThalo?.image === "/images/thalopasstrek.jpg") {
      console.log('✓ Thalo Pass image updated successfully!')
    } else {
      console.log('✗ Thalo Pass image might not have updated')
    }
    
    if (updatedLohigol?.image === "/images/lohigolpass.jpg") {
      console.log('✓ Lohigol Pass image updated successfully!')
    } else {
      console.log('✗ Lohigol Pass image might not have updated')
    }
    
  } catch (error: any) {
    console.error('❌ Error updating images:', error.message)
    console.error('Full error:', error)
  } finally {
    await prisma.$disconnect()
    console.log('\n🔌 Database connection closed.')
  }
}

// Run the function
updateTrekImages()
  .catch(console.error)