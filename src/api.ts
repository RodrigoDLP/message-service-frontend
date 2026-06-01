export interface RawTransaction {
  amount: number;
  creditcard: number;
  codigo: string;
  email?: string;
  datetime: string;
}

export interface Payment {
  id: number;
  monto_original: number;
  monto_final: number;
  ntarjeta: number;
  codigo: string;
  fecha: string;
}

const API_URL = "http://localhost:8000";

export async function registerTransaction(tx: RawTransaction) {
  const res = await fetch(`${API_URL}/register-transaction`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tx),
  });
  return res.json();
}

export async function getPayments(): Promise<Payment[]> {
  const res = await fetch(`${API_URL}/payments`);
  return res.json();
}
