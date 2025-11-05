// test-simple.js - Quick connection test
const { PrismaClient } = require('@prisma/client')

async function test() {
  const prisma = new PrismaClient()
  
  try {
    console.log('🚀 Testing connection...')
    await prisma.$connect()
    console.log('✅ SUCCESS: Connected to Neon database!')
    
    // Try a simple count
    const count = await prisma.trek.count()
    console.log(`📊 Current treks in database: ${count}`)
    
  } catch (error) {
    console.error('❌ FAILED:', error.message)
  } finally {
    await prisma.$disconnect()
  }
}

test()