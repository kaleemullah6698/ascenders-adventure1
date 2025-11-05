const { PrismaClient } = require('@prisma/client')

async function test() {
  const prisma = new PrismaClient()
  try {
    console.log('🔍 Testing database connection...')
    await prisma.$connect()
    console.log('✅ Database connected!')
    
    const count = await prisma.trek.count()
    console.log(`📊 Treks in database: ${count}`)
  } catch (error) {
    console.error('❌ Connection failed:', error.message)
  } finally {
    await prisma.$disconnect()
  }
}

test()