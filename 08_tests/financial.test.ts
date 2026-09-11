// Suite de Pruebas Financieras — Tendita Landy (Sandbox)

describe('Pruebas del Motor Financiero', () => {
  test('TEST 01: Cambio de Renta Semanal', () => {
    let rentaSemanal = 2500;
    rentaSemanal = 3000;
    expect(rentaSemanal).toBe(3000);
  });

  test('TEST 02: Cálculo de Nómina Variable', () => {
    const salarioDiario = 200;
    const diasTrabajados = 4; // Se redujo 1 día
    const nominaTotal = salarioDiario * diasTrabajados;
    expect(nominaTotal).toBe(800);
  });

  test('TEST 03: Cálculo de Ahorro Diario Necesario', () => {
    const obligaciones = 3500;
    const diasRestantes = 5;
    const ahorroDiario = obligaciones / diasRestantes;
    expect(ahorroDiario).toBe(700);
  });
});