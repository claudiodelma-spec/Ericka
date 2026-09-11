export function generateWhatsAppLink(order: any, phoneNumber: string = '525500000000'): string {
  let message = `Hola Tendita Landy 👋\n\n`;
  message += `Quiero realizar el siguiente pedido:\n\n`;
  message += `Alumno: ${order.studentName}\n`;
  message += `Grado: ${order.grade}\n\n`;
  message += `TOTAL: $${order.total}\n\nGracias.`;

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}