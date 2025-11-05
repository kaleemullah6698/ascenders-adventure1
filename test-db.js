const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient({
  log: ['query', 'error', 'warn'] // This will show us what's happening
})

async function test() {
  try {
    console.log('🔍 Testing database connection...')
    
    // Test connection
    await prisma.$connect()
    console.log('✅ Database connected successfully!')
    
    // Simple count first
    const count = await prisma.trek.count()
    console.log(`📊 Number of treks in database: ${count}`)
    
    if (count > 0) {
      // If we have data, try to get just names
      const treks = await prisma.trek.findMany({
        select: {
          id: true,
          name: true,
          difficulty: true
        },
        take: 5
      })
      console.log('🗂️ Trek names:', treks)
    }
    
  } catch (error) {
    console.error('❌ Database test failed:', error)
    console.error('Error details:', error.message)
  } finally {
    await prisma.$disconnect()
  }
}

test()