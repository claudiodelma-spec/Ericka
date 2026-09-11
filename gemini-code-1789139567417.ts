export interface OrderItemPayload {
  name: string;
  quantity: number;
  price: number;
}

export interface OrderPayload {
  studentName: string;
  grade: string;
  group?: string;
  items: OrderItemPayload[];
  total: number;
}

export function generateWhatsAppLink(order: OrderPayload, phoneNumber: string = '525500000000'): string {
  let message = `Hola Tendita Landy 👋\n\n`;
  message += `Quiero realizar el siguiente pedido:\n\n`;
  message += `Alumno: ${order.studentName}\n`;
  message += `Grado: ${order.grade}\n`;
  if (order.group) message += `Grupo: ${order.group}\n`;
  message += `\n`;

  order.items.forEach(item => {
    message += `${item.quantity}x ${item.name} $${item.price}\n`;
  });

  message += `\nTOTAL: $${order.total}\n\nGracias.`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}