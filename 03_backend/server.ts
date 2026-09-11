import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Endpoint de cálculo de Ahorro Diario Necesario
app.get('/api/dashboard/daily-savings', (req, res) => {
  res.json({
    status: 'SANDBOX',
    dailySavingsRequired: 620,
    message: 'Cálculo dinámico activo'
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🧪 Servidor Backend corriendo en puerto ${PORT} [SANDBOX]`);
});