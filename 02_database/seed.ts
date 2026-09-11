import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  console.log('✅ Base de datos Sandbox poblada con éxito.');
}

main().catch(e => console.error(e)).finally(() => prisma.$disconnect());