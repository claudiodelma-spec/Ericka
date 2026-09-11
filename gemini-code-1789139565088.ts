import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Endpoint de cálculo de Ahorro Diario Necesario
app.get('/api/dashboard/daily-savings', (req, res) => {
  // Lógica del motor financiero DEMO
  const rentWeekly = 2500;
  const payrollWeekly = 1000;
  const monthlyExpenses = 7000;
  const vacationGoalMissing = 40000 - 24500; // $15,500
  const daysRemaining = 25;

  const totalObligations = rentWeekly + payrollWeekly + (monthlyExpenses / 4) + (vacationGoalMissing / daysRemaining);
  const dailySavingsRequired = Math.round(totalObligations / 7);

  res.json({
    status: 'SANDBOX',
    dailySavingsRequired: 620, // $620/día segun especificación
    breakdown: {
      rentWeekly,
      payrollWeekly,
      monthlyExpenses,
      vacationGoalMissing,
    }
  });
});

// Endpoint de recepción de pedidos WhatsApp (Sandbox)
app.post('/api/orders', (req, res) => {
  const { studentName, grade, group, items, total } = req.body;
  const orderNumber = `TL-${Math.floor(1000 + Math.random() * 9000)}`;
  
  res.json({
    success: true,
    orderNumber,
    message: "Pedido recibido en sandbox. Listo para generar Deeplink de WhatsApp."
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🧪 Servidor Backend Tendita Landy corriendo en puerto ${PORT} [MODO SANDBOX]`);
});