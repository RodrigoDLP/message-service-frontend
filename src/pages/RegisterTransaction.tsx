import React, { useState } from "react";
import { registerTransaction } from "../api";
import type { RawTransaction } from "../api";

const RegisterTransaction: React.FC = () => {
  const [form, setForm] = useState<RawTransaction>({
    amount: "" as unknown as number,       // inicial vacío
    creditcard: "" as unknown as number,   // inicial vacío
    codigo: "",
    email: "",                             // opcional
    datetime: new Date().toISOString().slice(0, 16), // formato compatible con <input type="datetime-local">
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validaciones básicas
    if (
      !form.amount ||
      Number(form.amount) <= 0 ||
      !form.creditcard ||
      !form.codigo.trim() ||
      !form.datetime
    ) {
      alert("Por favor complete monto, número de tarjeta, código y fecha.");
      return;
    }

    // Construir payload sin email si está vacío
    const payload: any = { ...form };
    if (!form.email || form.email.trim() === "") {
      delete payload.email;
    }

    const result = await registerTransaction(payload);
    alert("Transacción registrada:\n" + JSON.stringify(result, null, 2));
  };

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">Registrar Transacción</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Monto
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="Ingrese el monto"
            value={form.amount}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
            min="1"
          />
        </div>

        <div>
          <label
            htmlFor="creditcard"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Número de Tarjeta
          </label>
          <input
            type="number"
            id="creditcard"
            name="creditcard"
            placeholder="Ingrese el número de tarjeta"
            value={form.creditcard}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
            min="1"
          />
        </div>

        <div>
          <label
            htmlFor="codigo"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Código de Restaurante
          </label>
          <input
            type="text"
            id="codigo"
            name="codigo"
            placeholder="Ingrese el código"
            value={form.codigo}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Correo (opcional)
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ingrese el correo"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label
            htmlFor="datetime"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Fecha y Hora
          </label>
          <input
            type="datetime-local"
            id="datetime"
            name="datetime"
            value={form.datetime}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Registrar
        </button>
      </form>
    </div>
  );
};

export default RegisterTransaction;
