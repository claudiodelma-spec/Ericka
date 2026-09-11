import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Configuración Sandbox
  await prisma.setting.createMany({
    data: [
      { key: 'ENVIRONMENT', value: 'SANDBOX' },
      { key: 'WHATSAPP_NUMBER', value: '525500000000' },
      { key: 'MONTHLY_EXPENSE_TARGET', value: '7000' },
    ],
  });

  // Categorías iniciales
  const comida = await prisma.category.create({ data: { name: 'Comida', icon: '🍔' } });
  const bebidas = await prisma.category.create({ data: { name: 'Bebidas', icon: '🥤' } });
  const snacks = await prisma.category.create({ data: { name: 'Snacks', icon: '🍫' } });

  // Productos (Sin stock, sólo disponibilidad)
  await prisma.product.createMany({
    data: [
      { name: 'Sándwich', price: 30.0, categoryId: comida.id, active: true },
      { name: 'Torta de Jamón', price: 35.0, categoryId: comida.id, active: true },
      { name: 'Jugo Natural', price: 15.0, categoryId: bebidas.id, active: true },
      { name: 'Agua de Jamaica', price: 15.0, categoryId: bebidas.id, active: true },
      { name: 'Fruta Preparada', price: 20.0, categoryId: snacks.id, active: true },
    ],
  });

  // Empleados y Nómina DEMO
  const emp1 = await prisma.employee.create({ data: { name: 'María López', dailyWage: 200.0 } });
  const emp2 = await prisma.employee.create({ data: { name: 'Carlos Ruiz', dailyWage: 200.0 } });

  // Renta DEMO
  await prisma.rent.create({
    data: { concept: 'Renta Local Escolar', amount: 2500.0, periodicity: 'SEMANAL', startDate: new Date() },
  });

  // Metas y Vacaciones SEP DEMO
  await prisma.goal.create({
    data: { name: 'Meta Mensual', target: 30000.0, accumulated: 20400.0, startDate: new Date(), endDate: new Date() },
  });

  await prisma.vacationPeriod.create({
    data: { name: 'Vacaciones SEP', startDate: new Date('2026-07-15'), endDate: new Date('2026-08-15'), targetAmount: 40000.0, savedAmount: 24500.0 },
  });

  console.log('✅ Base de datos Sandbox poblada con éxito.');
}

main().catch(e => console.error(e)).finally(() => prisma.$disconnect());